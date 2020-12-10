import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import FontAwesome from '../common/FontAwesome';
import {Row,Col,Container,Form,Button} from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
// refresh token
import { refreshTokenSetup } from './utils/refreshToken';
import { Redirect } from 'react-router';

// Please set CLIENT_ID and API_KEY from your google account.
const clientId = '809999....';
const API_KEY = 'AIzaSyA....';


function LoginHooks() {
  const history = useHistory();
  const state = {
    isLogined: false,
    accessToken: '',
    name: ''
  };
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    if(res.accessToken){
      state = ({
        isLogined: true,
        accessToken: res.accessToken,
        name: res.profileObj.name
      });
    }
    console.log('state details : '+this.state);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object. \n Redirecting to Home Page`
    );
    //refreshTokenSetup(res);
    history.push("/Index");
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please contact Mrityunjay Kumar, Administer of this application.`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'online',
    responseType: 'code',
    prompt: 'consent',
  });

  return (

    <Button onClick={signIn} className="btn pl-1 pr-1 btn-lg btn-google font-weight-normal text-white btn-block text-uppercase" type="submit"><FontAwesome icon="google" className="mr-2" /> Google</Button>
  );
}

export default LoginHooks;
