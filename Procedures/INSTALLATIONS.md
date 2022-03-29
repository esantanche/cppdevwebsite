# Installations

How to install frameworks, packages, etc.

## SvelteKit

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

npm install --save-dev @smui/button
npm install --save-dev @smui/card
npm i -D @smui/layout-grid
npm i -D @smui/textfield
npm i -D @smui/common
# etc...

npm install --save-dev smui-theme

Create your theme files with smui-theme.

npx smui-theme template src/theme