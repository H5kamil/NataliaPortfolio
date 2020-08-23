import React, { Component } from 'react';

class Talent extends Component {

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <>Talent</>
    );
  }
}

export default Talent;