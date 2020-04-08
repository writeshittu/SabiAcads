import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Cardlist from './components/Cardlist';
import Footer from './components/Footer';



class App extends React.Component {
  render(){
    
  return (
    <React.Fragment>
      <NavBar/>
      <Router>
      <Switch>
      <Route exact path="/" component={Cardlist}/>
      <Route path="/dashboard" component={Dashboard}/>
      </Switch>
      </Router>
      <Footer/>
    </React.Fragment>
  );
  }
}

export default App;
