import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";
import TrackOrder from './components/TrackOrder';

export function setup(app: PiletApi) {
  app.registerPage('/track-order', TrackOrder, {
    initialColumns: 20,
    initialRows: 5,
  });
}
