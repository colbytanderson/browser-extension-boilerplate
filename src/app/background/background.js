import {wrapStore} from 'webext-redux';

console.log("hello world - from background.js");

const store; // a normal Redux store

wrapStore(store);