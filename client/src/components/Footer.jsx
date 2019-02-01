import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  date = new Date();
  render() {
    return (
      <footer>
        <div>
          Copyright &copy; {this.date.getFullYear()} |{' '}
          <a href='https://github.com/freestyle09' target='_blank'>
            Józef Rzadkosz{' '}
          </a>
        </div>
        <div>
          Znajdź nas na
          <a
            href='https://www.booking.com/hotel/pl/olczanski-dom.pl.html?label=gen173nr-1DCAEoggJCAlhYSDNiBW5vcmVmaLYBiAEBmAEeuAEMyAEM2AED6AEBqAID;sid=18707b473eae14656f18eb6faeae384f;dest_id=-538221;dest_type=city;dist=0;group_adults=2;hpos=1;room1=A%2CA;sb_price_type=total;srfid=10f670d2dc87fddcf12efae33a78294101f36e75X1;type=total;ucfs=1&'
            target='_blank'
          >
            <img className='booking' src='booking.png' alt='' />
          </a>
          <a
            href='https://www.google.com/search?source=hp&ei=FPJSXMj_HtHMwAKt3IvYCQ&q=olcza%C5%84ski+dom&btnK=Szukaj+w+Google&oq=olcza%C5%84ski+dom&gs_l=psy-ab.3..35i39j0i22i30.164.2211..2377...2.0..1.214.1786.0j13j1......0....1..gws-wiz.....0..0i131j0i67j0i10j0.w4iTbGyhOds'
            target='_blank'
          >
            <img src='Google_plus_icon.svg' alt='' />
          </a>
          <a href='https://www.facebook.com/olczanskidom/' target='_blank'>
            <img src='facebook.png' alt='' />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
