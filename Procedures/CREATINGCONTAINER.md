# Creating container

This command creates the container calling it CppDevWebsite and using the image nodejs-16-14-2-alpine-3-15-2.

```bash
[esantanche@luna new-cpp-dev-website]$ sudo docker run -v /home/esantanche/SwProjects/new-cpp-dev-website/app/:/app -w /app -t -d -p 3002:3000 --name=CppDevWebsite nodejs-16-14-2-alpine-3-15-2
```

* The option -t allocates a terminal to the container so that it can run a shell. Without this option the container tries to start but fails because the shell needs a terminal.
* The option -d means that the container starts detached. I will have to open a shell on it later.
* The internal port 3000 will be mapped to port 3002 on the host machine. I will be able to see the app working on http://localhost:3002/
* The folder /home/esantanche/SwProjects/new-cpp-dev-website/app/ in the host machine will be mapped to the folder /app in the container


