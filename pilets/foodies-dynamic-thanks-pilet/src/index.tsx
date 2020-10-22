import * as React from 'react';
import { PiletApi } from 'foodies';
import Thanks from './components/Thanks';


let api: PiletApi = undefined;
export function getGrandTotal(checkoutitem) {
  console.log('Dynamic thanks page and data is '+api.getData(checkoutitem));
  return (api.getData(checkoutitem)!=null ? '$'+api.getData(checkoutitem) : '$1329');
  //return api.getData('checkoutitem');
}

export function setup(app: PiletApi) {
  api = app;
  app.registerPage('/dynamicthanks', Thanks, {
    initialColumns: 20,
    initialRows: 5,
  });
}
