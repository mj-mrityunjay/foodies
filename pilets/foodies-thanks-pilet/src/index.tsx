import * as React from 'react';
import { PiletApi } from 'foodies';
import { Link } from "react-router-dom";

import Thanks from './components/Thanks';



export function setup(app: PiletApi) {
  app.registerPage('/thanks', Thanks, {
    initialColumns: 20,
    initialRows: 5,
  });  
}
