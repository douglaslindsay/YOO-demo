// everything in here is hardcoded. this is bad practice but it doesn't matter since it's never changing and the token is never exposed.
import { Client } from '@notionhq/client';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import fs from 'fs';

dotenv.config();

const notion = new Client({ auth: process.env.NOTION_TOKEN });

async function download(url, filename){
    const response = await fetch(url);
    const image = await response.buffer();
    fs.writeFileSync(`./src/lib/generated/${filename}`, image);
    return filename;
}

// fetch the big dashboard and get IDs
const dashboard = await notion.databases.query({database_id: process.env.DASHBOARD_ID});
const [misc_id, history_id, contact_id, members_id, projects_id, homepage_id] = dashboard.results.map(i => i.id);

// fetch homepage
async function homepage(){
    let homepage_data = {};
    const homepage = await notion.blocks.children.list({block_id: homepage_id});
    const [,hero,,,whoweare,,whatwedo,,aboutusimage,goals,upcoming_events_db,,organisations_db,schools_db] = homepage.results;

    //handle hero image
    await download(hero.image.file.url, "Whole Council.webp");

    //handle who we are text
    homepage_data.whoweare = whoweare.paragraph.rich_text[0].plain_text;
    homepage_data.whatwedo = whatwedo.paragraph.rich_text[0].plain_text;

    //handle about us image
    await download(aboutusimage.image.file.url, "About Us.webp");

    //handle goals table (text/text)
    homepage_data.goals = (await notion.databases.query({database_id: goals.id})).results.map(row => row.properties).map(row => ({
        "Name" : row.Name.title[0].plain_text,
        "Description" : row.Description.rich_text[0].plain_text
    }));

    //handle upcoming events table (text/text/text/image)
    let upcoming = (await notion.databases.query({database_id: upcoming_events_db.id})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "Date" : row.Date.rich_text[0].plain_text,
        "Description" : row.Description.rich_text[0].plain_text,
        "Image" : await download(row.Image.files[0].file.url,`upcoming_${index}.webp`)
    }));
    for(let [index,promise] of upcoming.entries()){upcoming[index]=await promise;} // evaluate promises
    homepage_data.upcoming = upcoming;

    //handle organisations table (text/url/image)
    let organisations = (await notion.databases.query({database_id: organisations_db.id})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "URL" : row.URL.url,
        "Logo" : await download(row.Logo.files[0].file.url,`organisations_${index}.webp`)
    }));
    for(let [index,promise] of organisations.entries()){organisations[index]=await promise;} // evaluate promises
    homepage_data.organisations = organisations;

    //handle schools table (text/url/image)
    let schools = (await notion.databases.query({database_id: schools_db.id})).results.map(row => row.properties).map(async(row, index) => ({ // create promises
        "Name" : row.Name.title[0].plain_text,
        "URL" : row.URL.url,
        "Logo" : await download(row.Logo.files[0].file.url,`schools_${index}.webp`)
    }));
    for(let [index,promise] of schools.entries()){schools[index]=await promise;} // evaluate promises
    homepage_data.schools = schools;

    fs.writeFileSync("./src/lib/data/homepage-data.json", JSON.stringify(homepage_data));
    console.log("homepage downloaded");
}

await homepage();