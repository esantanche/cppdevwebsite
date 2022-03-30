# Creating the container for the project


FIXME these have to be adapted to the new project

# To update sapper

Consider that I updated sapper later. It went to version 0.27.16.

```bash
[root@e01f42592d53 sapperapp]$ npm update sapper
```


# To build the project

```bash
[root@e01f42592d53 app]$ cd sapperapp/
[root@e01f42592d53 sapperapp]$ npm run build
```

# To copy the project to production or testing

1. You need to copy the entire folder /sapperapp/, in my case /vol/WORKnARCH/SwProjects/leadershipcoachfortech-svelte-edition/sapperapp/.
1. After the first copy, you need to copy the folders /vol/WORKnARCH/SwProjects/leadershipcoachfortech-svelte-edition/sapperapp/__sapper__/build/ and 
/vol/WORKnARCH/SwProjects/leadershipcoachfortech-svelte-edition/sapperapp/static/
1. Also, don't forget to restart the node server (see below)
1. If it's the testing website, you need the robots.txt file in /srv/sites/testing.leadershipcoachfortech.com/sapperapp/static

# To run the app on the server

```bash
root@FREEDOMANDCOURAGE:/srv/sites/testing.leadershipcoachfortech.com/sapperapp# export PORT=3001
root@FREEDOMANDCOURAGE:/srv/sites/testing.leadershipcoachfortech.com/sapperapp# nohup node __sapper__/build &
```

You have to restart this node server every time you upload the folder build.

Now there is a service defined in /etc/systemd/system/leadershipcoachfortechcom.service.

You just have to run "service leadershipcoachfortechcom restart"

