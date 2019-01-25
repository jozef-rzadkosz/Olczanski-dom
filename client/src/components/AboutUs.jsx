import React, { Component } from 'react';

class AboutUsItem extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>{this.props.children}</div>
        <div>
          <i className={this.props.class} aria-hidden='true' />
        </div>
      </div>
    );
  }
}

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <section id='about-us'>
        <div className='container'>
          <h2>O nas</h2>
          <h3>Dlaczego warto do nas przyjechać?</h3>

          <div>
            <div>
              <AboutUsItem class='fas fa-home'>
                Wspaniała rodzinna atmosfera oraz tanie noclegi, u nas poczujesz się jak w domu!
              </AboutUsItem>
              <AboutUsItem class='fa fa-parking'>Bezpłatny parking</AboutUsItem>
              <AboutUsItem class='fas fa-bus-alt'>
                Bezpośrednie połączenie do centrum Zakopanego oraz Kuźnic <br />
                (Przystanek ok. 5m od budynku)
              </AboutUsItem>
            </div>
            <div>
              <AboutUsItem class='fas fa-wifi'>Bezpłatna sieć Wi-Fi na terenie całego obiektu</AboutUsItem>
              <AboutUsItem class='fas fa-users'>
                W pobliżu znajduje się karczma, stacja paliw oraz restauracja McDonald's
              </AboutUsItem>
              <AboutUsItem class='fas fa-smoking-ban'>Pokoje dla niepalących</AboutUsItem>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutUs;
