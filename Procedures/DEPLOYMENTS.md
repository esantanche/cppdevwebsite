# Deployments

How to deploy the app from development to testing or production.

The root folder for the website will contain files like robots.txt and the file google needs
to make it sure that you are the owner of the website.

There will also be the sitemap.

To deploy the code:

1. You run a "npm run build"
2. You copy the folder sapperapp from development to testing or production.

You copy the folder sapperapp directly in the root.

When you deploy changes, you need to copy the folders:

/app/sapperapp/__sapper__/build

and

/app/sapperapp/static

You also have to restart the service:

service emanuelesantanchecom restart