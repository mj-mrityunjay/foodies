import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import MyAccountFavourite from './components/myaccount/Favourites.js';




export function setup(app: PiletApi) {
  app.registerPage('/myaccount/favourites', MyAccountFavourite, {
    initialColumns: 20,
    initialRows: 5,
  });
}
