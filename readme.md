#Client-side Setup

if you wish to run client code in docker container...
```
docker run -it -v //c/Users/Public/mydocker/dynamicControlsClient:/dynamiccontrols -p 3000:3000 mydev /bin/bash
```



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
``` npm i ```


make sure tests pass...
``` npm t ```



## server:
if you wish to run server code in docker...
- also opens up the debugger port; 5858
```
docker run -it -v //c/Users/Public/mydocker/dynamicControlsServer:/expressapi -p 3000:3000 -p 5858:5858 mydev /bin/bash
```


run app, and listen for changes....
``` npm run nodemon ```


browse to...
http://localhost:3000

or if in docker...

192.168.99.100:3000

(get docker container ip using.... 'docker-machine ip')








## Screenshots:

![dynamic controls 01](https://s32.postimg.org/dzakzisdx/questionswide.jpg)

![dynamic controls 01](https://s32.postimg.org/oxluhpgz9/questionsmobile.jpg)

![dynamic controls 01](https://s32.postimg.org/ive7r7sj9/questionaire_Console_After_Submit.jpg)





