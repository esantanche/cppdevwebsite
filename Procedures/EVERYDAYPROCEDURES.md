# Every day procedures

These procedures are used every day.

## Connecting to the container

This opens a bash shell in the container.

```bash
sudo docker exec -i -t CppDevWebsite bash
```

## Starting the development server

In the container

```bash
[root@34753d1ec86e app]$ cd sveltekitapp/
[root@34753d1ec86e sveltekitapp]$ npm run dev
```
