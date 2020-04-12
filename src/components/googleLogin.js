import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useHistory, withRouter } from "react-router-dom";
// import { Link } from 'react-bootstrap/lib/Navbar';


 
 


class Logout extends React.Component{
   
   logout = (response) => {
    alert("Logged out Successfully");
    window.location.href = "/";
  }
 
  render(){
    return(
      <GoogleLogout
      clientId="568403139567-nde0j10n0crvensdfsi4vres3806rbp8.apps.googleusercontent.com"
      render={renderProps => (
        <button variant="outline-success" className="bg-light-blue" onClick={renderProps.onClick} >LogOut</button>
      )}
        buttonText="Logout"
        onLogoutSuccess={this.logout}
    >
    </GoogleLogout>
    )
  }
}
 class Login extends React.Component{
  
   responseGoogle = (isStudent) => {
    
     console.log( )
    this.props.history.push({pathname:"/dashboard", state:{loginSuccessful:"loginmarked", isStudent:isStudent}});
    

  }
     render(){
  return(  
          <GoogleLogin
          clientId="568403139567-nde0j10n0crvensdfsi4vres3806rbp8.apps.googleusercontent.com"
          render={renderProps => (
          <button className="bg-light-red" onClick={renderProps.onClick} >{this.props.title}</button>
          )}
          buttonText="Login"
          onSuccess={()=>this.responseGoogle(this.props.isStudent)}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
          
);
 }
}
 export default withRouter(Login);