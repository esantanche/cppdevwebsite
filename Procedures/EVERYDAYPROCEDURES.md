# Every day procedures

These procedures are used every day.

## Starting the development server

```bash
[esantanche@luna sapperapp]$ npm run dev
```

## Doing the prepare

This is needed every time you change the file app/sapperapp/src/theme/_smui-theme.scss

It may be useful when you install a new module.

```bash
[esantanche@luna sapperapp]$ npm run prepare
[esantanche@luna sapperapp]$ cp build/smui.css static/
```

## Doing the build

This is needed every time you install a new module.

Before doing the build, you may want to do the prepare as well, see above.

```bash
[esantanche@luna sapperapp]$ npm run build
```

## Connecting to the container

(Eventually I didn't use Docker)

This opens a bash shell in the container.

```bash
sudo docker exec -i -t CppDevWebsite bash
```
