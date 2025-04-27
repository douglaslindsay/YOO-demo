# Youth of Ōrākei
<div align="center">
  <img src="https://img.shields.io/badge/Sveltekit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white"/>
  <img src="https://img.shields.io/badge/NodeJS-aaffaf?style=for-the-badge&logo=nodedotjs"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white"/>
  <img src="https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=googlesheets&logoColor=white"/>
  <img src="https://img.shields.io/badge/Notion-ffffff?style=for-the-badge&logo=Notion&logoColor=black"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</div>

## Developing

To start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

If you want to test the hCaptcha, put the hCaptcha secret key in `.env`.

If you want to test Google Sheets integration (this is an involved process),
1. Create a Google Cloud Workspace project
2. Create a service account for the project
3. Generate keys for it, then put `CLIENT_EMAIL`, `PRIVATE_KEY`, `SHEET_NAME`, and `SPREADSHEET_ID` in `.env`.

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Tasks
- [x] Make frontend
- [x] Make frontend responsive
- [ ] Add integration with Notion CMS
- [x] Make contact form functional
    - [x] Add hCaptcha
- [ ] Optimise site (particularly regarding reducing image size i.e. png/webp -> AVIF)
- [ ] Add SEO
- [ ] Lighthouse scores
- [ ] Fix bugs
