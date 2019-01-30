import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Map from './Map';
import Footer from './Footer';

class Contact extends Component {
  state = {};

  render() {
    return (
      <section id='contact'>
        <div className='background-image' />
        <div className='container'>
          <h2>Kontakt</h2>
          <div>
            <ContactForm from='Olczański Dom' />
            <Map />
          </div>
          <Footer />
        </div>
      </section>
    );
  }
}

export default Contact;
