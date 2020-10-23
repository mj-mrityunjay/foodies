import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Index from './components/Index';

let api: PiletApi = undefined;
export function useSharedData(name) {
  console.log('Home page');
  return 'Mr. '+(api.getData(name)!=null ? api.getData(name) : 'User')+', We have ';
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
