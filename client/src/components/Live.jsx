import React, { Component } from 'react';

class Live extends Component {
  state = {};
  render() {
    return (
      <section id='live'>
        <div className='container'>
          <h2>Podgląd na Żywo</h2>
          <div>
            <div>
              <h3>Kasprowy Wierch</h3>
              <iframe
                src='https://imageserver.webcamera.pl/umiesc/kasprowy-wierch'
                border='0'
                frameborder='0'
                scrolling='no'
              />
            </div>
            <div>
              <h3>Krupówki</h3>
              <iframe
                src='https://imageserver.webcamera.pl/umiesc/krupowkidolne'
                border='0'
                frameborder='0'
                scrolling='no'
              />
            </div>
          </div>

          <h2>Pogoda</h2>
        </div>
      </section>
    );
  }
}

export default Live;
