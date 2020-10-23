import * as React from 'react';
import { PiletApi } from 'foodies';
import Thanks from './components/Thanks';


//let checkoutitemTemp = [{"itemName":"Chicken Tikka Sub","price":314,"priceUnit":"$","id":1,"qty":2,"show":true,"minValue":0,"maxValue":7,"total":1662},{"itemName":"Cheese corn Roll","price":260,"priceUnit":"$","id":2,"qty":1,"show":true,"minValue":0,"maxValue":7,"total":1662},{"itemName":"Mixed Veg","price":122,"priceUnit":"$","id":3,"qty":1,"show":true,"minValue":0,"maxValue":7,"total":1662},{"itemName":"Black Dal Makhani","price":652,"priceUnit":"$","id":4,"qty":1,"show":true,"minValue":0,"maxValue":7,"total":1662}];


let api: PiletApi = undefined;
export function getDataItem(dataItemKey) {
  
  let checkoutitemObj = api.getData(dataItemKey);
  //checkoutitemObj = checkoutitemTemp;
  //console.log('Dynamic thanks page and checkoutitemTemp: '+JSON.stringify(checkoutitemTemp));
  console.log('Dynamic thanks page and data is '+JSON.stringify(checkoutitemObj));
  return (checkoutitemObj!=null ? '$'+checkoutitemObj : '$1329');
  //return api.getData('checkoutitem');
}

export function setup(app: PiletApi) {
  api = app;
  app.registerPage('/dynamicthanks', Thanks, {
    initialColumns: 20,
    initialRows: 5,
  });
}
