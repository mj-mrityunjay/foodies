import * as React from 'react';
import { PiletApi } from 'foodies-piral';
import { Link } from "react-router-dom";
import TrackOrder from './components/TrackOrder';
import App from './App';
import { settings } from 'cluster';



export function setup(app: PiletApi) {
  app.registerPage('/track-order', TrackOrder, {
    initialColumns: 20,
    initialRows: 5,
  });
}
