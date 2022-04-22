(I didn't use Docker eventually)

# Creating the Docker image

In this folder I create the Docker image I need to then create a container
that will run the application.

## Building the image

This command will create the image using the dockerfile in this folder.

```bash
[esantanche@luna DockerImage]$ sudo docker build -t nodejs-16-14-2-alpine-3-15-2 .
```
