import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/Stand.css';
import '../App.css';

class Stand extends Component {

    //scroll top after previous scrolling
    componentDidMount() {
      window.scrollTo(0, 0);
    }

  render() {
    return (
        <main className="container st-container">
          <section className="st-container">
            <div>Ooooooops!</div>
            <div>Sorry! Coming soon!</div>
            <div>
              I'm very pleased that you made all the way here.
              <br/> Unfortunately this project is still under construction.
              <br/> Feel free to explore other projects or get in touch with me.
            </div>
            <Link to="/contact"><button>Contact me</button></Link>
          </section>
          <SocialMedia/>
          <Footer/>
        </main>
    );
  }
}

export default Stand;