import React, { Component } from 'react';

class Header extends Component {
  state = {
    showMenu: false
  };
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
    this.setState({ showMenu: false });
    this.menu.current.classList.remove('menu-show');
    this.button.current.classList.remove('show-button');
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

  menu = React.createRef();
  button = React.createRef();
  clickable = React.createRef();

  click = e => {
    if (!e.target.classList.contains('menu')) {
      this.setState({ showMenu: false });
      document.removeEventListener('click', this.click);
    }
  };
  closeMenu = async () => {
    this.menu.current.classList.remove('menu-show');
    this.button.current.classList.remove('show-button');
    await this.setState({ showMenu: false });
    this.clickable.current.removeEventListener('click', this.closeMenu);
  };
  openMenu = async e => {
    this.menu.current.classList.toggle('menu-show');
    this.button.current.classList.toggle('show-button');
    await this.setState(prevState => ({ showMenu: !prevState.showMenu }));
    if (this.state.showMenu) {
      this.clickable.current.addEventListener('click', this.closeMenu);
    }
  };
  render() {
    return (
      <section id='header'>
        <div className='background-image' />
        <div className='container'>
          <div>
            <img src='Logo.png' alt='Olczański Dom' />
          </div>
          <button ref={this.button} onClick={this.openMenu} className='button-aside'>
            <i className='fas fa-bars' />
          </button>

          <ul ref={this.menu} className='menu'>
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
          <div ref={this.clickable} className={this.state.showMenu ? 'clickable' : 'clickable-hide'} />

          <div>
            <img src='parzenica.png' alt='parzenica' />
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
