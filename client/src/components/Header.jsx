import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <section id='header'>
        <div className='background-image' />
        <div className='container'>
          <div>Logo</div>
          <div>Menu</div>
          <div>Parzenica</div>
        </div>
      </section>
    );
  }
}

export default Header;
