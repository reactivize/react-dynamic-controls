
#Client-side Setup

download project to your devbox

``` git clone git@github.com:reactivize/react-dynamic-controls.git ```



change into the root folder of the project

``` cd react-dynamic-controls.git ```



if you wish to run client code in docker container...
- open docker terminal
- cd into root folder of project
- then run...
```
docker run -it -v "$PWD":/react-dynamic-controls -p 8080:8080 node:6.2.1 /bin/bash
```


now that you're in the shell of the container, cd into the root of the project

``` cd dynamicControlsClient ```



install packages...
``` npm i ```


production build...
run this first to create the bundle.js
```
> $ npm run build
```


to run webpack-dev-server... 

```
> $ npm run dev
```

open the web browser to...
http://localhost:8080




# Server-side Setup


## setup


install packages...
- if running the server as a separate project from the client
``` npm i ```


make sure tests pass...
``` npm t ```



## server:
if you wish to run server code in docker...
- also opens up the debugger port; 5858
```
docker run -it -v "$PWD":/dynamicControlsServer -p 3000:3000 -p 5858:5858 mydev /bin/bash
```


run app, and listen for changes....
``` npm run nodemon ```


browse to...
http://localhost:3000

or if in docker...

192.168.99.100:3000

(get docker container ip using.... 'docker-machine ip')



## Notes:
To allow the client to make an ajax call to the server on a separate port,
- you may need to enable Allow-Control-Allow-Origin: * 

I use this Chrome extension for development...

https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en


## Source Files Explanation:

1. the json on the server, exposed as a route

/src/server/db/formdata.json


2. the react component on the client that retrieves the json from the server

/src/client/index.jsx


3. the lib module on the client that converts the form control information in the json file into jsx, and returns it back to the react component to render.

/src/client/lib/dynamicControls








## Screenshots:

![dynamic controls - web view](https://s32.postimg.org/dzakzisdx/questionswide.jpg)

![dynamic controls - mobile view](https://s32.postimg.org/oxluhpgz9/questionsmobile.jpg)

![dynamic controls - devtools view](https://s32.postimg.org/ive7r7sj9/questionaire_Console_After_Submit.jpg)





