import React, { Component } from 'react';

class Header extends Component {
  state = {};
  render() {
    return (
      <section id='header'>
        <div className='background-image' />
        <div className='container'>
          <div>
            <img src='Logo.png' alt='Olczański Dom' />
          </div>

          <ul className='menu'>
            <li>
              <a className='active'>Strona główna</a>
            </li>
            <li>
              <a>O nas</a>
            </li>
            <li>
              <a>Na żywo</a>
            </li>
            <li>
              <a>Galeria</a>
            </li>
            <li>
              <a>Kontakt</a>
            </li>
          </ul>

          <div>
            <img src='parzenica.png' alt='parzenica' />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
