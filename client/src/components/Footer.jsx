import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  date = new Date();
  render() {
    return (
      <footer>
        Copyright &copy;{' '}
        <a href='https://github.com/freestyle09' target='_blank'>
          Józef Rzadkosz
        </a>
        {this.date.getFullYear()}
      </footer>
    );
  }
}

export default Footer;
