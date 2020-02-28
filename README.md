# CST 438 Project 2

## Hey guys..

#### This is a super boiler plate node/express app, but it works on heroku, so thats a start!

#### I used a few commands to get set up, I recomend doing these too..

to make sure we have the current version of node
`nvm install v12.16.1`

install the express module
`npm install express`

that should create a package-lock.json and a node_modules folder.

I recomend listing the node_modules folder in your .gitignore.
The node_modules thing is basicly all our dependencies, and the package-lock.json
along with package.json basicly list out our dependencies. Both of those files are
necessary for heroku to know what to install to run out app. But! if you deploy the
node_modules folder to heroku it won't build, heroku uses the json files to reconstruct
our node_modules.

my project structure looks like:

`project/
    node_modules/
    app.js
    index.html
    package-lock.json
    package.json
    README.md
`
    
anytime in the future if we need another package, we should be able to run
`npm install package_name`
and it should automaticly install the package in our node_modules, and update
our json files so that heroku knows that we have a new dependency.

I also recomend we each use our own heroku instance.. mostly because i don't 
know how we would share one.. but, we can brain storm that later. for now, if you 
want to see the app live download the heroku cli
I used `npm install -g heroku`
then login to heroku 
`heroku login`
then create a new heroku app, and in the setting there should be a line like
`heroku git:add url-to-project-or-something`

after you add the project you should be able to push and see it live on heroku.