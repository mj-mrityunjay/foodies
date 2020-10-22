import * as React from 'react';
import { PiletApi } from 'foodies-piral';
import { Link } from "react-router-dom";
import List from './components/List';
import Thanks from './components/Thanks';
import Detail from './components/Detail';
import App from './App';
import { settings } from 'cluster';



export function setup(app: PiletApi) {
  app.registerPage('/thanks', Thanks, {
    initialColumns: 20,
    initialRows: 5,
  });  
}
