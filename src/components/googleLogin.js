import React from 'react';
import { GoogleLogin } from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}
 class Login extends React.Component{
     render(){
return(
    <GoogleLogin
    clientId="795533024611-i2k95o3jahhmekv15nkm0ht9fkevgo8c.apps.googleusercontent.com"
    render={renderProps => (
      <button onClick={renderProps.onClick} >Login with Google</button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
);
 }
}
 export default Login;