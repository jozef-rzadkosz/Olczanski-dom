import React, { Component } from 'react';

class Live extends Component {
  state = {
    data: Array,
    main: Array,
    temp: 0
  };

  render() {
    return (
      <section id='live'>
        <div className='container'>
          <h2>Podgląd na Żywo</h2>
          <div>
            <div>
              <h3>Kasprowy Wierch</h3>
              <iframe src='https://imageserver.webcamera.pl/umiesc/kasprowy-wierch' border='0' scrolling='no' />
            </div>
            <div>
              <h3>Krupówki</h3>
              <iframe src='https://imageserver.webcamera.pl/umiesc/krupowkidolne' border='0' scrolling='no' />
            </div>
          </div>

          <h2>Pogoda</h2>
          <div>{this.state.data.name}</div>
          <div>{this.state.temp - 274.15}</div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    fetch('/weather')
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        this.setState({ data, main: data.main, temp: data.main.temp });
      });
  }
}

export default Live;
