import React, { Component } from 'react';

class DarkTheme extends Component {

    //scroll top after previous scrolling
    componentDidMount() {
      window.scrollTo(0, 0);
    }

  render() {
    return (
        <>DarkTheme</>
    );
  }
}

export default DarkTheme;