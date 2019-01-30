import React, { Component } from 'react';

class Header extends Component {
  goto = selector => {
    if (window.location.pathname !== '/') {
      this.constructor.changeUrl();
    }
    let checkExist = setInterval(() => {
      let element = document.getElementById(selector);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        clearInterval(checkExist);
      }
    }, 100);
  };

  gotoHome = () => {
    this.goto('home');
  };

  gotoAboutUs = () => {
    this.goto('about-us');
  };

  gotoLive = () => {
    this.goto('live');
  };

  gotoGallery = () => {
    this.goto('gallery');
  };
  gotoContact = () => {
    this.goto('contact');
  };

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
              <a onClick={this.gotoHome}>Strona główna</a>
            </li>
            <li>
              <a onClick={this.gotoAboutUs}>O nas</a>
            </li>
            <li>
              <a onClick={this.gotoLive}>Na żywo</a>
            </li>
            <li>
              <a onClick={this.gotoGallery}>Galeria</a>
            </li>
            <li>
              <a onClick={this.gotoContact}>Kontakt</a>
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
