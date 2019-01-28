import React, { Component } from 'react';
import Lightbox from './Lightbox';

class Gallery extends Component {
  images = [];

  render() {
    return (
      <section id='gallery'>
        <Lightbox images={this.images} />
      </section>
    );
  }

  componentWillMount() {
    for (let i = 1; i < 24; i++) {
      let obj = {};
      if (i === 7) {
        obj = {
          id: i,
          url: `images/${i}.jpg`,
          tb: `images/tb/${i}.jpg`,
          class: `vertical`
        };
      } else {
        obj = {
          id: i,
          url: `images/${i}.jpg`,
          tb: `images/tb/${i}.jpg`
        };
      }
      this.images.push(obj);
    }
  }
}

export default Gallery;
