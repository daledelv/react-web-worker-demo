# Demo of web workers integrated with react/webpack through worker-loader

based on react-boilerplate - Boilerplate for "SurviveJS - React"

To run app:
npm start

OK - worker is working now, computing something when the component first appears, and when the user clicks on the component.

Issues:
- ArrayBuffer and Uint32Array are working in this version with the addition of a 'globals' section to .eslintrc, I still don't know if babel-polyfill is required for some browsers, but current version works in the latest for firefox & chrome on mac. Comment directly below about polyfill black magic still applies.
   - in general, I haven't found any decent doc on polyfilling - it seems to be a thing that some people know about but I have no idea how     
     to learn the secret - it's just black magic to me. The world could use some clear ground-up doc on how to do fix things up when babel 
     falls over
     

- To use the worker, in the last version I did:
var Worker = require('worker!./Worker.js');

In this version, it is my first attempt to use webpack loading to load the worker & using an es6 style import - it doesn't work and the 
"Child worker:" output is missing from the command shell where npm is building the project - I'm not sure what is wrong and could use some help on troubleshooting...

Still todo:
- no external files are included in the worker, but we should figure out the babel/es6/webpack version of importScripts.
- I was having a problem with reusing ArrayBuffer - it seems like you can only create a buffer, pass it to a worker, and have it passed back once. I tried to use one repeatedly, and got a javascript error - "An ArrayBuffer is neutered and could not be cloned"

