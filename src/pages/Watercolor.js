import React, { Component } from 'react';

class Watercolor extends Component {

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <>Watercolor</>
    );
  }
}

export default Watercolor;