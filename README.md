# Youth of Ōrākei

## Developing

To start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

If you additionally want to test hCaptcha functionality, you must put the secret key in `.env`.

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
- [ ] Make contact form functional
    - [ ] Add hCaptcha
- [ ] Optimise site (particularly regarding reducing image size i.e. png/webp -> AVIF)
- [ ] Add SEO
- [ ] Lighthouse scores
- [ ] Fix bugs
