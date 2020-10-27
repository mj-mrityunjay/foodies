import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import MyAccountOrders from './components/MyAccount/Orders';




export function setup(app: PiletApi) {
  app.registerPage('/myaccount/orders', MyAccountOrders, {
    initialColumns: 20,
    initialRows: 5,
  });
}
