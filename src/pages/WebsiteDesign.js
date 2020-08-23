import React, { Component } from 'react';

class WebsiteDesign extends Component {

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <>WebsiteDesign</>
    );
  }
}

export default WebsiteDesign;