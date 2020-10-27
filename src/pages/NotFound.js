import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

class NotFound extends Component {

    //scroll top after previous scrolling
    componentDidMount() {
      window.scrollTo(0, 0);
    }

  render() {
    return (
      <div className="not-wrapper">
        <div>404</div>
        <div>The page you're looking for does not exist</div>
        <Link to="/">
          Go to Home Page
        </Link>
      </div>
    );
  }
}

export default NotFound;