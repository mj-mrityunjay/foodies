import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Checkout from './components/Checkout';
import { settings } from 'cluster';

let api: PiletApi = undefined;
export function setDataItems(dataItemKey, checkoutitem) {
  console.log('Dynamic Checkout page');
  api.setData(dataItemKey,checkoutitem);
  console.log('Dynamic Checkout page checkoutitems: '+JSON.stringify(checkoutitem));
}


export function setup(app: PiletApi) {
  api = app;
  app.registerPage('/dynamiccheckout', Checkout, {
    initialColumns: 20,
    initialRows: 5,
  });
}
