import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import MyAccountAddresses from './components/myaccount/Addresses';

export function setup(app: PiletApi) {
  app.registerPage('/myaccount/addresses', MyAccountAddresses, {
    initialColumns: 20,
    initialRows: 5,
  });

}
