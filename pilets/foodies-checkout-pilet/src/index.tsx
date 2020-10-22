import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Checkout from './components/Checkout';




export function setup(app: PiletApi) {
  app.registerPage('/checkout', Checkout, {
    initialColumns: 20,
    initialRows: 5,
  });
}
