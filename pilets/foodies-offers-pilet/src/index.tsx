import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import Offers from './components/Offers';

export function setup(app: PiletApi) {
  app.registerPage('/offers', Offers, {
    initialColumns: 20,
    initialRows: 5,
  });
}
