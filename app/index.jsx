import React from 'react';
import ReactDOM from 'react-dom';
import WorkerClient from './components/WorkerClient'

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <div><WorkerClient /></div>,
  document.getElementById('app')
);
