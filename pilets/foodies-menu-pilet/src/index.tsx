import * as React from 'react';
import { PiletApi } from 'foodies-piral';
import { Link } from "react-router-dom";
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Index from './components/Index';
import Offers from './components/Offers';
import MyAccount from './components/MyAccount';
import List from './components/List';
import NotFound from './components/NotFound';
import Thanks from './components/Thanks';
import Extra from './components/Extra';
import Login from './components/Login';
import Register from './components/Register';
import TrackOrder from './components/TrackOrder';
import Invoice from './components/Invoice';
import Checkout from './components/Checkout';
import Detail from './components/Detail';
import App from './App';
import { settings } from 'cluster';



export function setup(app: PiletApi) {
/*  app.registerMenu(() => <Link to="/home">Offerss</Link>);
  app.registerMenu(() => <Link to="/listing">List</Link>);
  app.registerMenu(() => <Link to="/myaccount">My Account</Link>);
  app.registerMenu(() => <Link to="/404">Not Found</Link>);
  app.registerMenu(() => <Link to="/extra">Extra</Link>);
  app.registerMenu(() => <Link to="/login">Login</Link>);
  app.registerMenu(() => <Link to="/register">Register</Link>);
  app.registerMenu(() => <Link to="/track-order">Track Order</Link>);
  app.registerMenu(() => <Link to="/invoice">Invoice</Link>);
  app.registerMenu(() => <Link to="/checkout">Checkout</Link>);
  app.registerMenu(() => <Link to="/thanks">Thanks</Link>);
  app.registerMenu(() => <Link to="/detail">Detail</Link>);
*/
  app.registerMenu(Header, {type:"admin"});
 // app.registerMenu(Index);
  /*app.registerMenu(Footer,{
    type: 'admin'
  });
*/
  app.registerMenu(Footer, {type:"footer"});
  //registerMenu(() => null, { category: 'general' })

  /*app.registerPage('/offers', Offers, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/listing', List, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/myaccount', MyAccount, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/404', NotFound, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/extra', Extra, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/login', Login, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/register', Register, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/track-order', TrackOrder, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/invoice', Invoice, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/checkout', Checkout, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/thanks', Thanks, {
    initialColumns: 20,
    initialRows: 5,
  });
  app.registerPage('/detail', Detail, {
    initialColumns: 20,
    initialRows: 5,
  });

   app.registerPage('/app', App, {
    initialColumns: 20,
    initialRows: 5,
  });

  app.registerPage('/Home', Header, {
    initialColumns: 20,
    initialRows: 5,
  });*/

   app.registerPage('/', Index, {
    initialColumns: 20,
    initialRows: 5,
  });
  

  app.registerPage('/Footer', Footer, {
    initialColumns: 20,
    initialRows: 5,
  }); 
}
