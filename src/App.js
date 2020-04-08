import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Cardlist from './components/Cardlist';



class App extends React.Component {
  render(){
    
  return (
    <div className="">
      <NavBar/>
      <Cardlist/>
      <Footer/>
    </div>
  );
  }
}

export default App;
