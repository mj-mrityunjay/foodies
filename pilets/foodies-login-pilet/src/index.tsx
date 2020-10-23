import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

let api: PiletApi = undefined;
export function setSharedData(name) {
  console.log('Login page');
  api.setData('username',name);
}

export function setup(app: PiletApi) {
  api = app;
  console.log('login setData: '+setSharedData(undefined));
  app.registerPage('/login', Login, {
    initialColumns: 20,
    initialRows: 5,
  });
  
  console.log('login getData: '+app.getData('username'));
  
  app.registerPage('/register', Register, {
    initialColumns: 20,
    initialRows: 5,
  });
  
}
