import React, { Component } from 'react';

class NotFound extends Component {

    //scroll top after previous scrolling
    componentDidMount() {
      window.scrollTo(0, 0);
    }

  render() {
    return (
        <>NotFound</>
    );
  }
}

export default NotFound;