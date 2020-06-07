import App from './App';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';

const popupStore = new Store();

// wait for the store to connect to the background page
store.ready().then(() => {
  // The store implements the same interface as Redux's store
  // so you can use tools like `react-redux` no problem!
  render(
    <Provider store={popupStore}>
      <App/>
    </Provider>
    , document.getElementById('root'));
});

console.log("from popup.js - Hello World");