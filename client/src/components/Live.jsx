import React, { Component } from 'react';

class Live extends Component {
  state = {
    data: null,
    sunrise: 0
  };

  sunrise;

  render() {
    return (
      <section id='live'>
        <div className='container'>
          <h2>Podgląd na Żywo</h2>
          <div className='live'>
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
          {this.state.data && (
            <div className='weather'>
              <div>
                <div>
                  <h3>{this.state.data.name}, Polska</h3>
                  <h3>{this.state.data.main.temp - 274.15}&#176; C</h3>
                </div>

                <div>
                  <img src={`http://openweathermap.org/img/w/${this.state.data.weather[0].icon}.png`} alt='' />
                </div>
                <div>{this.state.data.weather[0].description}</div>
              </div>
              <div>
                <div>Wilgotność powietrza: {this.state.data.main.humidity}%</div>
                <div>Ciśnienie atmosferyczne: {this.state.data.main.pressure} hPa</div>
                <div>Zachmurzenie: {this.state.data.clouds.all}%</div>
                <div>Widoczność: {this.state.data.visibility}m</div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  componentDidMount() {
    fetch('/weather')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data });
      });
  }
}

export default Live;
