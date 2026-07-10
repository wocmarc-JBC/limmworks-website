# LIMM Works Website

Production source for [limmworks.com](https://www.limmworks.com), built with Next.js and deployed on Vercel.

## Local verification

```bash
npm ci
npm test
```

`npm test` runs ESLint and a full production build.

## Deployment safety

- Production domains are managed by the existing Vercel project `limmworks-website`.
- Project photos are referenced from `https://limmworks-growth.woc-marc.chatgpt.site/projects/`.
- Do not replace the photo origin or production aliases without first verifying all project and Owner's Notes routes.

