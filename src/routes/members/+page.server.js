import fs from 'fs/promises';

export async function load() {
  const json = await fs.readFile('src/lib/data/members-data.json', 'utf-8');
  return JSON.parse(json);
}