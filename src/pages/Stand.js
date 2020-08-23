import React, { Component } from 'react';

class Stand extends Component {

    //scroll top after previous scrolling
    componentDidMount() {
      window.scrollTo(0, 0);
    }

  render() {
    return (
        <>Stand</>
    );
  }
}

export default Stand;