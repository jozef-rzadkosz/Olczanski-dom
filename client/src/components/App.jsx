import React, { Component } from 'react';

//components
import Header from './Header';
import Home from './Home';
import AboutUs from './AboutUs';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Home />
        <AboutUs />
      </div>
    );
  }
}

export default App;
