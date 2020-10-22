import * as React from 'react';
import { PiletApi } from 'foodies-piral';
import { Link } from "react-router-dom";
import Offers from './components/Offers';
import App from './App';
import { settings } from 'cluster';



export function setup(app: PiletApi) {
  app.registerPage('/offers', Offers, {
    initialColumns: 20,
    initialRows: 5,
  });
}
