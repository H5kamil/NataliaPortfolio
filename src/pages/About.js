import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Cooperation from '../components/Cooperation';
import '../styles/About.css'
import '../App.css';

class About extends Component {
  render() {
    console.log("fdfdf")
    return (
        <div className="container">
          <section className="ab-first-sec">          
            <div>Born creative</div>
            <div>My Story</div>
          </section>  
          <section>
            <div>Hello! Nice that you are here</div>
            <div>Natalia Marcinkiewicz</div>
            <div>Working in a 3-person design team in a small company forced me to be as much multidisciplinary as possible. 
              Being an UX generalist, I create powerful and clear experiences in wide range of projects:
              <br/>
              - website design
              <br/>
              - mobile app design
              <br/>
              - design system 
              <br/>
              - improving accessibility and UX over the web applications 
              <br/>
              - company rebranding and brand strategy
              <br/>
              - marketing and sales materials
              <br/>
              - DTP (prints)
              <br/>
              This all gave me great opportunities to constant growth and improvement of skillset. 
              What is great I always have a freedom of action for my design decisions and concepts.
            </div>
            <div></div>
          </section>
          <section>
            Design process
          </section>
          <section>
            As a team memeber I collaborate closely with designers, developers, product managers, and senior executives to help launch best designs decisions.
          </section>
          <section>
            Skill set 
          </section>
          <Cooperation/>
          <SocialMedia/>
          <Footer/>
        </div>
    );
  }
}

export default About;