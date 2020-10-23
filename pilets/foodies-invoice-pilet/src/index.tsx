import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Invoice from './components/Invoice';

export function setup(app: PiletApi) {
  app.registerPage('/invoice', Invoice, {
    initialColumns: 20,
    initialRows: 5,
  });
}
