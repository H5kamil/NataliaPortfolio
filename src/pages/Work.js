import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Cooperation from '../components/Cooperation';
import { Link } from 'react-router-dom';
import '../styles/Work.css';
import '../App.css';

class Work extends Component {

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="container">
        <section className="work-first-sec">
          <div>SELECTED WORKS</div>
          <div>Welcome to my projects<br/>page, here you'll find work</div>
        </section>
        <section className="work-sec-container">
          <div className="work-item">Website design</div>
          <div className="work-item">Tellyo OY</div>
          <div className="work-item">UI/UX</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded 
          in business goals while carefully designing to deliver on the user’s needs. 
          This collaborative process brings together business and technology vision 
          holders to ensure designs meet business objectives, 
          are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/Tellyowebsite-opening.jpg')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>UI/UX</div>
                <div>Case study presenting the way of update business website.</div>
                <Link to='/website-design'>
                  <button>Read Case Study</button>
                </Link>
              </div>
            </section>
          </div>
          <Link className="work-item work-btn" to='/website-design'>
                  <button>Read Case Study</button>
          </Link>
          <div className="work-text-desktop work-dekstop-h1">Website design</div>
          <div className="work-text-desktop work-dekstop-h3">Tellyo OY</div>
        </section>
        <section className="work-sec-container work-sec-dark">
          <div className="work-item">Watercolor portraits</div>
          <div className="work-item">Personal project</div>
          <div className="work-item">Graphic design</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded 
          in business goals while carefully designing to deliver on the user’s needs. 
          This collaborative process brings together business and technology vision 
          holders to ensure designs meet business objectives, 
          are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/Watercolorsopening.jpg')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>UI/UX</div>
                <div>Case study presenting the way of update business website.</div>
                <Link to='/watercolor-portraits'>
                  <button>Read Case Study</button>
                </Link>
              </div>
            </section>
          </div>
          <Link className="work-item work-btn" to='/watercolor-portraits'>
                  <button>Read Case Study</button>
          </Link>
          <div className="work-text-desktop work-dekstop-h1">Watercolor portraits</div>
          <div className="work-text-desktop work-dekstop-h3">Personal project</div>
        </section>
        <section className="work-sec-container">
          <div className="work-item">Tellyo Talent mobile app</div>
          <div className="work-item">Tellyo OY</div>
          <div className="work-item">UI/UX</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded 
          in business goals while carefully designing to deliver on the user’s needs. 
          This collaborative process brings together business and technology vision 
          holders to ensure designs meet business objectives, 
          are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/ibc_stand_final.jpg')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>UI/UX</div>
                <div>Case study presenting the way of update business website.</div>
                <Link to='/conference-stand'>
                  <button>Read Case Study</button>
                </Link>
              </div>
            </section>
          </div>
          <Link className="work-item work-btn" to='/conference-stand'>
                  <button>Read Case Study</button>
          </Link>  
          <div className="work-text-desktop work-dekstop-h1">Tellyo Talent mobile app</div>
          <div className="work-text-desktop work-dekstop-h3">Tellyo OY</div>    
        </section>
        <section className="work-sec-container work-sec-dark">
          <div className="work-item">Tellyo Talent mobile app</div>
          <div className="work-item">Tellyo OY</div>
          <div className="work-item">UI/UX</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded 
          in business goals while carefully designing to deliver on the user’s needs. 
          This collaborative process brings together business and technology vision 
          holders to ensure designs meet business objectives, 
          are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/Tellyoapp-opening.jpg')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>UI/UX</div>
                <div>Case study presenting the way of update business website.</div>
                <Link to='/tellyo-talent-mobile-app'>
                  <button>Read Case Study</button>
                </Link>
              </div>
            </section>
          </div>
          <Link className="work-item work-btn" to='/tellyo-talent-mobile-app'>
                  <button>Read Case Study</button>
          </Link>     
          <div className="work-text-desktop work-dekstop-h1">Conference stand</div>
          <div className="work-text-desktop work-dekstop-h3">Tellyo OY</div> 
        </section>
        <section className="work-sec-container">
          <div className="work-item">Dark Theme</div>
          <div className="work-item">Tellyo OY</div>
          <div className="work-item">UI/UX</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded 
          in business goals while carefully designing to deliver on the user’s needs. 
          This collaborative process brings together business and technology vision 
          holders to ensure designs meet business objectives, 
          are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/Darktheme-opening.jpg')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>UI/UX</div>
                <div>Case study presenting the way of update business website.</div>
                <Link to='/dark-theme'>
                  <button>Read Case Study</button>
                </Link>
              </div>
            </section>
          </div>
          <Link className="work-item work-btn" to='/dark-theme'>
                  <button>Read Case Study</button>
          </Link>  
          <div className="work-text-desktop work-dekstop-h1">Dark Theme</div>
          <div className="work-text-desktop work-dekstop-h3">Tellyo OY</div>
        </section>
        <Cooperation/>
        <SocialMedia/>
        <Footer/>
      </main>
    );
  }
}
export default Work;