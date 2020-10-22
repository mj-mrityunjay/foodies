import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import FontAwesome from '../common/FontAwesome';
import { Link, useHistory,Redirect } from "react-router-dom";
import {setSharedData} from '../../index';

const CLIENT_ID = '809999336277-adj606g4cjepnq6bg3e9pemvl9m0vdus.apps.googleusercontent.com';
const API_KEY = 'AIzaSyA5vhnL_NNOWwGJrE0fAYWSb87uOaa8CsU';

class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: '',
      name: ''
    };

    
    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    
    console.log('Login Success: currentUser:', response.profileObj);
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken,
        name: response.profileObj.name
      }));
      setSharedData(response.profileObj.name);
    }

   /* alert(
      `Logged in successfully welcome ${response.profileObj.name} 😍. \n See console for full profile object. \n Redirecting to Home Page`
    );*/
    
    //props.history.push('/ticket-list')
  }

  logout (response) {
    alert(
      `Logging out. \n Redirecting to Login Page`
    );
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    setSharedData(null);
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          key={API_KEY}
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
          render={renderProps => (
            <Button onClick={renderProps.onClick} className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="google" className="mr-2" />Logout { this.state.accessToken ? this.state.name : null }</Button>
          )}
        >
        </GoogleLogout>: <GoogleLogin 
          clientId={ CLIENT_ID }
          key={API_KEY}
          render={renderProps => (
            <Button onClick={renderProps.onClick} className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="google" className="mr-2" />Login with Google</Button>
          )}
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token,profile'
          icon={true}
        />
      }
    </div>
    )
  }
}

export default GoogleBtn;
