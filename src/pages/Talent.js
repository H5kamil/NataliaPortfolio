import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/Talent.css';
import '../App.css';

class Talent extends Component {

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="container">
      <section className="st-container">
        <div>Ooooooops!</div>
        <div>Sorry! Coming soon!</div>
        <div>
          I'm very pleased that you made all the way here.
          <br/> Unfortunately this project is still under construction.
          <br/> You can check the presentation.
        </div>
          <Link to="/talent-app-presentation"><button>See presentation</button></Link>
      </section>
      <SocialMedia/>
      <Footer/>
    </main>
    );
  }
}

export default Talent;