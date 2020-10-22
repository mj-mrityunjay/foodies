import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Index from './components/Index';
import TopSearch from './components/home/TopSearch';
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
export function useSharedData(name) {
  console.log('Home page');
  return 'Mr. '+(api.getData(name)!=null ? api.getData(name) : 'User')+', We have ';
  /*api.on('store-data', ({ name, value }) => {
    console.log('Home page : name : '+name);
    if (name === 'username') {
      return 'Hello, Mr. '+(api.getData('username')!=null ? api.getData('username') : ' User')+', ';
      console.log(`New value is "${value}"!`);
    } else {
      return 'Hello, Mr. User,';
    }
  });*/  
}


export function setup(app: PiletApi) {
api = app;
  //Index.setUserName(app.getData('username'));
  //TopSearch.setUserName('');
  app.registerPage('/Index', Index, {
    initialColumns: 20,
    initialRows: 5,
  });
  
  app.registerTile('Home', () => (
    Index
  ));
}
