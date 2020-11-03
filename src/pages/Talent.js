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
      <main className="container st-container">
      <section className="st-container">
        <div>Ooooooops!</div>
        <div>Sorry! Coming soon!</div>
        <div>
          I'm very pleased that you made all the way here.
          <br/> Unfortunately this project is still under construction.
          <br/> You can check the PDF presentation file
        </div>
        <a href="https://drive.google.com/file/d/15yfMxt-czZYS1F3fGDLu6cbMqbdpKAp3/view?fbclid=IwAR1DveBp2oJPxAqa6m25krBWMOXPr68ihztHKzfqVaRy5wWov0ICiEX1hkU" rel="noopener noreferrer" target="_blank"><button>See PDF presentation</button></a>
      </section>
      <SocialMedia/>
      <Footer/>
    </main>
    );
  }
}

export default Talent;