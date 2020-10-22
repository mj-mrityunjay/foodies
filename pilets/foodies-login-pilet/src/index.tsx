import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Index from './components/Index';
import Offers from './components/Offers';
import MyAccount from './components/MyAccount';
import List from './components/List';
import NotFound from './components/NotFound';
import Thanks from './components/Thanks';
import Extra from './components/Extra';
import Login from './components/Login';
import Register from './components/Register';
import TrackOrder from './components/TrackOrder';
import Invoice from './components/Invoice';
import Checkout from './components/Checkout';
import Detail from './components/Detail';
import App from './App';
import { settings } from 'cluster';

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
