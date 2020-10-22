import * as React from 'react';
import { PiletApi } from 'foodies-piral';
import { Link } from "react-router-dom";
import MyAccountOffers from './components/myaccount/offers';
import App from './App';
import { settings } from 'cluster';



export function setup(app: PiletApi) {
  app.registerPage('/myaccount/offers', MyAccountOffers, {
    initialColumns: 20,
    initialRows: 5,
  });  
}
