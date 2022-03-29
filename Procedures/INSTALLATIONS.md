# Installations

How to install frameworks, packages, etc.

## SvelteKit

FIXME  this is to be redone because SMUI needs TypeScript

```bash
[root@34753d1ec86e app]$ chown root:root .
[root@34753d1ec86e app]$ npm init svelte@next sveltekitapp
[root@34753d1ec86e sveltekitapp]$ cd sveltekitapp/
[root@34753d1ec86e sveltekitapp]$ nano package.json 
[root@34753d1ec86e sveltekitapp]$ npm install

```

Change to file /app/sveltekitapp/package.json

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
✔ Use TypeScript? … No 
✔ Add ESLint for code linting? … Yes
✔ Add Prettier for code formatting? … No 
✔ Add Playwright for browser testing? … Yes
```

To start the development server see EVERYDAYPROCEDURES.md.

## Svelte Material UI

FIXME 

```bash
[root@34753d1ec86e sveltekitapp]$ npm install --save-dev @smui/button
[root@34753d1ec86e sveltekitapp]$ npm install --save-dev @smui/card
[root@34753d1ec86e sveltekitapp]$ npm install --save-dev @smui/layout-grid
[root@34753d1ec86e sveltekitapp]$ npm install --save-dev @smui/textfield
[root@34753d1ec86e sveltekitapp]$ npm install --save-dev @smui/common
[root@34753d1ec86e sveltekitapp]$ npm install --save-dev smui-theme
[root@34753d1ec86e sveltekitapp]$ npx smui-theme template src/theme
```

There will be more packages to install, one for each SMUI component I need to use.

You will find the full list in /app/sveltekitapp/package.json

There will be something like this:

```json
   "@smui/button": "^6.0.0-beta.15",
   "@smui/card": "^6.0.0-beta.15",
   "@smui/common": "^6.0.0-beta.15",
   "@smui/layout-grid": "^6.0.0-beta.15",
   "@smui/textfield": "^6.0.0-beta.15",
```