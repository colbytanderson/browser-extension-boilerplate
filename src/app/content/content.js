import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

console.log("hello world - from content.js");

const anchor = document.createElement('div');
anchor.id = 'anchor';
document.body.insertBefore(anchor, document.body.childNodes[0]);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('anchor')
);