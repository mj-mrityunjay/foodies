import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import MyAccount from './components/myaccount';

export function setup(app: PiletApi) {
  app.registerPage('/myaccount', MyAccount, {
    initialColumns: 20,
    initialRows: 5,
  });
}
