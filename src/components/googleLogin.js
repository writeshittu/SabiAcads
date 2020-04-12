import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}
const logout = (response) => {
  console.log(response);
}
class Logout extends React.Component{

  render(){
    return(
      <GoogleLogout
      clientId="568403139567-nde0j10n0crvensdfsi4vres3806rbp8.apps.googleusercontent.com"
      render={renderProps => (
        <button variant="outline-success" className="bg-light-blue" onClick={renderProps.onClick} >LogOut</button>
      )}
        buttonText="Logout"
        onLogoutSuccess={logout}
    >
    </GoogleLogout>
    )
  }
}
 class Login extends React.Component{
     render(){
return(
      <GoogleLogin
    clientId="568403139567-nde0j10n0crvensdfsi4vres3806rbp8.apps.googleusercontent.com"
    render={renderProps => (
      <button className="bg-light-red" onClick={renderProps.onClick} >Login with Google</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  
);
 }
}
 export { Login, Logout};