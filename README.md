# Test for seedtag

## Description:

Entry test, based on my boilerplate https://github.com/OscarGuerreroLopez/node_boiler_plate . Since I didn’t have much time to complete this task I just grabbed this boilerplate to start coding, hope that is ok

The boiler plate includes route handling, error handling, and also logging. I removed the rate limiter with redis just in case you run into issues while trying to execute it.

Hope I didn´t forget anything, I am more used to functional programming as you can see.
But if you guys are more into object oriented I can get used to it, not a problem. I have worked with NEST.js which it is all about classes, at https://github.com/OscarGuerreroLopez if you check the auth projects (those are not done, working on them whenever I have some free time, which is not much to my regret), those are done in Nest

I have also included some light test due to lack of time, hope that is ok as well

if you have any issues running it please contact me. I ran it locally and with docker in different machines here and seems to be working correctly, but do not hesitate to contact me if you run into issues.

## Run it

You should create an .env file following .example.env although it should run without one.

npm install and then npm run start:dev or start:tsnode

npm run test to run the test suit

Also you can just build it and run it as it is

```bash
$ npm install

$ npm run start:tsnode

$ npm run start:dev

$ npm run build

$ node ./dist/src/index.js


```

you can also run it in docker

```bash
$ docker-compose build && docker-compose up

```
