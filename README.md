# Demo of web workers integrated with react/webpack through worker-loader

based on react-boilerplate - Boilerplate for "SurviveJS - React"

To run app:
npm start

OK - worker is working now, computing something when the component first appears, and when the user clicks on the component.

Issues:
- I can't figure out babel-polyfill to get ArrayBuffer and Uint32Array to work - I have to use global.ArrayBuffer to make it work.
   - in general, I haven't found any decent doc on polyfilling - it seems to be a thing that some people know about but I have no idea how     
     to learn the secret - it's just black magic to me. The world could use some clear ground-up doc on how to do fix things up when babel 
     falls over

- To use the worker, I do:
var Worker = require('worker!./Worker.js');
..seems like there is more react-ive webpacky way to do this, but I don't know what it is - if it's possible to have the worker loaded independently, or some advice on how to do shared code between the worker and the worker client.