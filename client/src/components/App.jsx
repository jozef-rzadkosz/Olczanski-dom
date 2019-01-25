import React, { Component } from 'react';

//components
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';
import Live from './Live';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Home />
        <AboutUs />
        <Live />
      </div>
    );
  }
}

export default App;
