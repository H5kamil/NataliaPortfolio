import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
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
      <section className="st-presentation">
        <img src={require('../images-work/app_part01.jpg')} alt="app_part01"/>
        <img src={require('../images-work/app_part02.jpg')} alt="app_part02"/>
        <img src={require('../images-work/app_part03.jpg')} alt="app_part03"/>
        <img src={require('../images-work/app_part04.jpg')} alt="app_part04"/>
      </section>
      <SocialMedia/>
      <Footer/>
    </main>
    );
  }
}

export default Talent;