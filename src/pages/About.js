import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Cooperation from '../components/Cooperation';
import DesignProcess from '../components/DesignProcess';
import SkillSet from '../components/SkillSet';
import '../styles/About.css'
import '../App.css';

class About extends Component {

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div className="container">
          <section className="ab-first-sec">          
            <div>Born creative</div>
            <div>My Story</div>
          </section>  
          <section className="ab-second-sec">
            <div className="ab-center2">
              <div>Hello! Nice that you are here</div>
              <div>Natalia Marcinkiewicz</div>
              <div>Working in a 3-person design team in a growing company determined multidisciplinarity.
                 As a visual designer I create powerful and clear experiences in wide range of projects:
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
                What is great I always have a freedom of action for my design decisions and concepts..
              </div>
            </div>
            <div className="ab-picture">
              <img src={require('../images-work/jaaa-small.png')} alt="Natalcia about"/>
            </div>
          </section>
          <section className="ab-center ab-design-process">
            <DesignProcess/>
          </section>
          <section className="ab-center ab-long-text-component">
            <div>As a team memeber I collaborate closely with designers, developers, product managers, and senior executives to help launch best designs decisions.</div>
          </section>
          <section className="ab-center">
            <SkillSet/>
          </section>
          <Cooperation/>
          <SocialMedia/>
          <Footer/>
        </div>
    );
  }
}

export default About;