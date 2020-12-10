import React from 'react';
import { GoogleLogout } from 'react-google-login';

// Please set CLIENT_ID and API_KEY from your google account.
const clientId =
  '7077884......';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
