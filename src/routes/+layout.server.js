import { Client } from '@notionhq/client';
import { TOKEN, DATABASE_ID } from '$env/static/private';

const notion = new Client({ auth: TOKEN });

export async function load() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID,
  });

  return { data: response.results }; // passed into data prop of pages (process individually in each of them)
}