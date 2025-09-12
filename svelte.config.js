// use adapter-cloudflare in future when deploying to Cloudflare Pages

import adapter from '@sveltejs/adapter-cloudflare';

const config = { kit: { adapter: adapter() } };


export default config;
