// everything in here is hardcoded. this is bad practice but it doesn't matter since it's never changing and the token is never exposed.
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function download(image, filename, extension = ".webp"){
    if(Object.hasOwn(image,"name")){
        extension = path.extname(image.name);
    }
    const url = image.file.url;
    const response = await fetch(url);
    const data = await response.buffer();
    fs.writeFileSync(`./static/generated/${filename}${extension}`, data);
    return filename;
}

function plaintext(paragraph){
    if(paragraph.rich_text.length){
        return paragraph.rich_text[0].plain_text;
    }
    return "";
}

// fetch the big dashboard and get IDs
const dashboard = await notion.databases.query({database_id: process.env.DASHBOARD_ID,sorts:[{property:"Name",direction:"ascending"}]});
const [contact_id, history_id, homepage_id, members_id, misc_id,, projects_id] = dashboard.results.map(i => i.id);

// fetch homepage
async function homepage(){
    let homepage_data = {};
    const homepage = await notion.blocks.children.list({block_id: homepage_id});
    const [,hero,,,whoweare,,whatwedo,,aboutusimage,goals,upcoming_events_db,,organisations_db,schools_db] = homepage.results;

    //handle hero image
    await download(hero.image, "Whole Council");

    //handle who we are text
    homepage_data.whoweare = plaintext(whoweare.paragraph);
    homepage_data.whatwedo = plaintext(whatwedo.paragraph);

    //handle about us image
    await download(aboutusimage.image, "About Us");

    //handle goals table (text/text)
    homepage_data.goals = (await notion.databases.query({database_id: goals.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(row => ({
        "Name" : row.Name.title[0].plain_text,
        "Description" : plaintext(row.Description)
    }));

    //handle upcoming events table (text/text/text/image)
    let upcoming = (await notion.databases.query({database_id: upcoming_events_db.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "Date" : plaintext(row.Date),
        "Description" : plaintext(row.Description),
        "Image" : await download(row.Image.files[0],`upcoming_${index}`)
    }));
    for(let [index,promise] of upcoming.entries()){upcoming[index]=await promise;} // evaluate promises
    homepage_data.upcoming = upcoming;

    //handle organisations table (text/url/image)
    let organisations = (await notion.databases.query({database_id: organisations_db.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "URL" : row.URL.url,
        "Logo" : await download(row.Logo.files[0],`organisations_${index}`)
    }));
    for(let [index,promise] of organisations.entries()){organisations[index]=await promise;} // evaluate promises
    homepage_data.organisations = organisations;

    //handle schools table (text/url/image)
    let schools = (await notion.databases.query({database_id: schools_db.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "URL" : row.URL.url,
        "Logo" : await download(row.Logo.files[0],`schools_${index}`)
    }));
    for(let [index,promise] of schools.entries()){schools[index]=await promise;} // evaluate promises
    homepage_data.schools = schools;

    fs.writeFileSync("./src/lib/data/homepage-data.json", JSON.stringify(homepage_data));
    console.log("homepage downloaded");
}

// fetch projects
async function projects(){ // one single text/text/text/text/image block
    const projects = await notion.blocks.children.list({block_id: projects_id});
    const [projects_db] = projects.results;

    let projects_data = (await notion.databases.query({database_id: projects_db.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "Date" : plaintext(row.Date),
        "Description" : plaintext(row.Description),
        "Team" : plaintext(row.Team),
        "Image" : await download(row.Image.files[0],`project_${index}`)
    }));
    for(let [index,promise] of projects_data.entries()){projects_data[index]=await promise;} // evaluate promises

    fs.writeFileSync("./src/lib/data/projects-data.json", JSON.stringify(projects_data));
    console.log("projects downloaded");
}

async function members(){
    let members_data = {};
    const members_blocks = await notion.blocks.children.list({block_id: members_id});
    const [leadership_db,leadershipblurb,comms_db,commsblurb,teams_db] = members_blocks.results;

    // handle leadership team (text/text/image)
    let leadership = (await notion.databases.query({database_id: leadership_db.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "Role" : plaintext(row.Role),
        "Headshot" : await download(row.Headshot.files[0],`leadership_${index}`)
    }));
    for(let [index,promise] of leadership.entries()){leadership[index]=await promise;} // evaluate promises
    members_data.leadership = leadership;

    //handle leadership blurb (text)
    members_data.leadershipblurb = plaintext(leadershipblurb.paragraph);

    // handle comms team (text/text/image)
    let comms = (await notion.databases.query({database_id: comms_db.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "Role" : plaintext(row.Role),
        "Headshot" : await download(row.Headshot.files[0],`comms_${index}`)
    }));
    for(let [index,promise] of comms.entries()){comms[index]=await promise;} // evaluate promises
    members_data.comms = comms;

    //handle comms blurb (text)
    members_data.commsblurb = plaintext(commsblurb.paragraph);

    //handle other teams (text/text/text/image)
    let members = (await notion.databases.query({database_id: teams_db.id})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "Team" : plaintext(row.Team),
        "Role" : plaintext(row.Role),
        "Headshot" : await download(row.Headshot.files[0],`members_${index}`)
    }));
    for(let [index,promise] of members.entries()){members[index]=await promise;} // evaluate promises
    members_data.members = members;

    fs.writeFileSync("./src/lib/data/members-data.json", JSON.stringify(members_data));
    console.log("members downloaded");
}

async function contact(){
    const contact = await notion.blocks.children.list({block_id: contact_id});
    const [,stockphoto] = contact.results;

    // handle stock photo
    await download(stockphoto.image, "Contact Us Stock Photo");

    console.log("contact downloaded");
}

async function history(){  // one single text/text/text/text/image block
    const history = await notion.blocks.children.list({block_id: history_id});
    const [history_db] = history.results;

    let history_data = (await notion.databases.query({database_id: history_db.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "Date" : plaintext(row.Date),
        "Description" : plaintext(row.Description),
        "Team" : plaintext(row.Team),
        "Image" : await download(row.Image.files[0],`history_${index}`)
    }));
    for(let [index,promise] of history_data.entries()){history_data[index]=await promise;} // evaluate promises

    fs.writeFileSync("./src/lib/data/history-data.json", JSON.stringify(history_data));
    console.log("history downloaded");
}

async function miscellaneous(){
    const misc = await notion.blocks.children.list({block_id: misc_id});
    const [,logo,,favicon,,background,socials_db] = misc.results;

    //handle logo
    await download(logo.image, "logo", ".png");

    //handle favicon
    await download(favicon.image, "favicon", ".png");

    // handle background
    await download(background.image, "background", ".svg");

    //handle social media (text/url/image)
    let socialmedia = (await notion.databases.query({database_id: socials_db.id,sorts:[{property:"Order",direction:"ascending"}]})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Platform" : row.Platform.title[0].plain_text,
        "URL" : row.URL.url,
        "Icon" : await download(row.Icon.files[0],`icon_${index}`)
    }));
    for(let [index,promise] of socialmedia.entries()){socialmedia[index]=await promise;} // evaluate promises

    fs.writeFileSync("./src/lib/data/social-media.json", JSON.stringify(socialmedia));
    console.log("miscellaneous downloaded");
}

await homepage();
await projects();
await members();
await contact();
await history();
await miscellaneous();
console.log("download complete!");