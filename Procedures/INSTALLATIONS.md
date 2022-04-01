# Installations

How to install frameworks, packages, etc.

## Sapper

I'm using Sapper because SvelteKit has many problems.

```bash
[esantanche@luna app]$ npx degit "sveltejs/sapper-template#rollup" sapperapp
[esantanche@luna sapperapp]$ npm install

```

## Setting up TypeScript for Sapper

```bash
[esantanche@luna sapperapp]$ node scripts/setupTypeScript.js
[esantanche@luna sapperapp]$ npm install
[esantanche@luna sapperapp]$ npm run build

```

## Svelte Material UI

```bash
[esantanche@luna sapperapp]$ npm install --save-dev @smui/card
```

There will be more packages to install, one for each SMUI component I need to use.

You will find the full list in /app/sapperapp/package.json

There will be something like this:

```json
   "@smui/button": "^6.0.0-beta.15",
   "@smui/card": "^6.0.0-beta.15",
   "@smui/common": "^6.0.0-beta.15",
   "@smui/layout-grid": "^6.0.0-beta.15",
   "@smui/textfield": "^6.0.0-beta.15",
```

Installing the theme

```bash
[esantanche@luna sapperapp]$ npm install --save-dev smui-theme
[esantanche@luna sapperapp]$ npx smui-theme template src/theme

```

The file /app/sapperapp/package.json needs a 'script' 'prepare' that compiles Scss to CSS.

```json
scripts": {
    "dev": "sapper dev",
    "build": "sapper build --legacy",
    "export": "sapper export --legacy",
    "start": "node __sapper__/build",
    "prepare": "smui-theme compile static/smui.css -i src/theme"
  },
```

Creating CSS from SCSS.

```bash
[esantanche@luna sapperapp]$ npm run prepare
```

## SvelteKit

(Eventually I didn't use SvelteKit)

```bash
[root@34753d1ec86e app]$ chown root:root .
[root@34753d1ec86e app]$ npm init svelte@next sveltekitapp
[root@34753d1ec86e sveltekitapp]$ cd sveltekitapp/
[root@34753d1ec86e sveltekitapp]$ nano package.json 
[root@34753d1ec86e sveltekitapp]$ npm install

```

Change to file /app/sveltekitapp/package.json.
See line with "svelte-kit dev"

```json
"scripts": {
    "dev": "svelte-kit dev --host",
    "build": "svelte-kit build",
    "package": "svelte-kit package",
    "preview": "svelte-kit preview",
    "prepare": "svelte-kit sync",
    "lint": "eslint --ignore-path .gitignore ."
  },
```

When prompted:

```
✔ Which Svelte app template? › Skeleton project
✔ Use TypeScript? … Yes
✔ Add ESLint for code linting? … Yes
✔ Add Prettier for code formatting? … No 
✔ Add Playwright for browser testing? … Yes
```

To start the development server see EVERYDAYPROCEDURES.md.