import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import MyAccountPayments from './components/MyAccount/Payments';

export function setup(app: PiletApi) {
  app.registerPage('/myaccount/payments', MyAccountPayments, {
    initialColumns: 20,
    initialRows: 5,
  });
}
