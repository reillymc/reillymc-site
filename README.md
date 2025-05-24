# reillymc website

This repository contains the source code for [reillymc.com](reillymc.com), a personal portfolio website for showcasing projects and skills. It is built with SvelteKit, and currently builds and deploys as a static site.

## Developing

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

To customise the personal details, skills and projects displayed, edit the files in [./src/lib/data](./src/lib/data).

## Building

To create a production version of this app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment

The site builds to static HTML/CSS/JS and can be deployed to any static hosting provider by simply uploading the output of the `/build` folder.

## Resources

Built using [shadcn-svelte](https://www.shadcn-svelte.com/), [Lucide](https://lucide.dev/icons/) and [devicon](https://github.com/devicons/devicon).
Inspired by [️SvelteKit-Portfolio](https://github.com/Ladvace/SvelteKit-Portfolio?tab=MIT-1-ov-file) and [Slick Portfolio With Svelte](https://github.com/RiadhAdrani/slick-portfolio-svelte-5)
