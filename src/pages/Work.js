import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import '../styles/Work.css';
import '../App.css';
import Cooperation from '../components/Cooperation';

class Work extends Component {
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
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/Tellyowebsite-opening.jpg')} alt="Website design"/></div>
          <button className="work-item work-btn">Read Case Study</button>
        </section>
        <section className="work-sec-container">
          <div className="work-item">Watercolor portraits</div>
          <div className="work-item">Personal project</div>
          <div className="work-item">Graphic design</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/Watercolorsopening.jpg')} alt="Website design"/></div>
          <button className="work-item work-btn">Read Case Study</button>
        </section>
        <section className="work-sec-container">
          <div className="work-item">Tellyo Talent mobile app</div>
          <div className="work-item">Tellyo OY</div>
          <div className="work-item">UI/UX</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/ibc_stand_final.jpg')} alt="Website design"/></div>
          <button className="work-item work-btn">Read Case Study</button>          
        </section>
        <section className="work-sec-container">
          <div className="work-item">Tellyo Talent mobile app</div>
          <div className="work-item">Tellyo OY</div>
          <div className="work-item">UI/UX</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/Tellyoapp-opening.jpg')} alt="Website design"/></div>
          <button className="work-item work-btn">Read Case Study</button>     
        </section>
        <section className="work-sec-container">
          <div className="work-item">Dark Theme</div>
          <div className="work-item">Tellyo OY</div>
          <div className="work-item">UI/UX</div>
          <div className="work-item">
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/Darktheme-opening.jpg')} alt="Website design"/></div>
          <button className="work-item work-btn">Read Case Study</button>
        </section>
        <Cooperation/>
        <SocialMedia/>
        <Footer/>
      </main>
    );
  }
}
// {require('/images/image-name.png')}
export default Work;