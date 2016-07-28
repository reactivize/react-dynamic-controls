
#Client-side Setup

```bash
# download project to your devbox
git clone git@github.com:reactivize/react-dynamic-controls.git



# change into the root folder of the project
cd react-dynamic-controls



# if you wish to run client code in docker container...
# - open docker terminal
# - cd into root folder of project
# - then run...
docker run -it -v "$PWD":/react-dynamic-controls -p 8888:8888 node:6.2.1 /bin/bash



# now that you're in the shell of the container, cd into the root of the project
cd react-dynamic-controls



# install packages...
npm i



# production build...
# - in the docker terminal
# - run this first to create the bundle.js
# - give it one minute
# - will create a /public/ folder with a bundle.js and copied in index.html
# - and you will get your terminal prompt back
npm run build





# open up an other docker terminal
# - run webpack-dev-server from this new terminal
# - give it 30 seconds
npm run dev

```


  open the web browser to...
  - 192.168.99.100:8888

  or if not using docker...
  - http://localhost:8888
  


docker note:
- (get your docker container ip using.... `docker-machine ip`)




# Server-side Setup


## setup


install packages...
- if running the server as a separate project from the client

` npm i `


make sure tests pass...

` npm t `



## server:
if you wish to run server code in docker...
- also opens up the debugger port; 5858

In docker terminal, cd into the root directory of the project
eg...
 ` cd /c/Users/Public/mydocker/dynamicControlsClient `


```bash
#then run...
docker run -it -v "$PWD":/dynamicControlsServer -p 3000:3000 -p 5858:5858 node:6.2.1 /bin/bash
#now you're at the command prompt of the docker container

#then...
cd dynamicControlsServer


#from within the container prompt, run the app, and listen for changes....
npm run debug:server

```


browse to...
- http://localhost:3000/questions

or if in docker...
- 192.168.99.100:3000/questions






## Notes:
To allow the client to make an ajax call to the server on a separate port on your devbox,
- you may need to enable... Allow-Control-Allow-Origin: * 

I use this Chrome extension for development...
- https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en


## Source Files Explanation:

the json on the server, exposed as a route...

> /src/server/db/formdata.json


the react component on the client that retrieves the json from the server...

> /src/client/index.jsx


the lib module on the client that converts the form control information in the json file into jsx, and returns it back to the react component to render...

> /src/client/lib/dynamicControls








## Screenshots:

![dynamic controls - web view](https://s32.postimg.org/dzakzisdx/questionswide.jpg)

![dynamic controls - mobile view](https://s32.postimg.org/oxluhpgz9/questionsmobile.jpg)

![dynamic controls - devtools view](https://s32.postimg.org/ive7r7sj9/questionaire_Console_After_Submit.jpg)





