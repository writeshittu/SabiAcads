import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Searchbox from './components/searchfield';
import Dashboard from './components/Dashboard';
import Cardlist from './components/Cardlist';
import Footer from './components/Footer';



class App extends React.Component {
  constructor (){
  super()
   this.state = {
    course:[],
    searchfield: ''
}
}

componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users =>{ this.setState({robots:users})});
}


onSearchChange = (event) => {
this.setState({ searchfield: event.target.value}) 
}

  render(
    onClick=() => alert('hi')
  ){
    
  return (
    <React.Fragment>
      <NavBar/>
      <Router>
      <Searchbox searchChange ={this.onSearchChange}/>
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
