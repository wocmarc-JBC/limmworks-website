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
- Project photos are versioned in `public/projects/` and served from the website origin.
- Do not replace the photo origin or production aliases without first verifying all project and Owner's Notes routes.
