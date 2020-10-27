import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import List from './components/List';
import Checkout from './components/Checkout';
import Detail from './components/Detail';


export function setup(app: PiletApi) {
  app.registerPage('/listing', List, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/detail', Detail, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/checkout', Checkout, {
    initialColumns: 20,
    initialRows: 5,
  });
  
}
