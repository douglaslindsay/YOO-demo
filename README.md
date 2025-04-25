# Youth of Ōrākei

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
2. Create a service account project
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
