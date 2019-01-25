import React, { Component } from 'react';

//components
import Header from './Header';
import Home from './Home';

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
