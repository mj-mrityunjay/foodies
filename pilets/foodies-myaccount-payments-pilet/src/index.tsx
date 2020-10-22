import * as React from 'react';
import { PiletApi } from 'foodies-piral';
import { Link } from "react-router-dom";
import MyAccountPayments from './components/MyAccount/Payments';
import App from './App';
import { settings } from 'cluster';



export function setup(app: PiletApi) {
  app.registerPage('/myaccount/payments', MyAccountPayments, {
    initialColumns: 20,
    initialRows: 5,
  });
}
