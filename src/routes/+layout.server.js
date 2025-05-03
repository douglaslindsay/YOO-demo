import { Client } from '@notionhq/client';
import { TOKEN, DATABASE_ID } from '$env/static/private';

const notion = new Client({ auth: TOKEN });

export async function load() {
    try {
        const response = await notion.databases.query({
            database_id: DATABASE_ID,
        });

        return { data: response.results }; // passed into data prop of pages (process individually in each of them)
    } catch (error) {
        console.log("Error while fetching Notion in +layout.server.js");
        return {};
    }
}