import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Cooperation from '../components/Cooperation';
import { Link } from 'react-router-dom';
import '../styles/Work.css';
import '../App.css';

class Work extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <main className="container">
        <section className="work-first-sec">
          <div>SELECTED WORKS</div>
          <div>Welcome to my projects page,<br/> here you'll find work that I undertook lately</div>
        </section>
        <section className="work-sec-container">
          <div className="work-item work-light1">Website design</div>
          <div className="work-item work-light2">Tellyo OY</div>
          <div className="work-item work-light3">UX/UI</div>
          <div className="work-item work-light4">
          Process focuses on creating compelling experiences that are grounded 
          in business goals while carefully designing to deliver on the user’s needs. 
          This collaborative process brings together business and technology vision 
          holders to ensure designs meet business objectives, 
          are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/Tellyo-website---opening-dark-stroke.png')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>UX/UI</div>
                <div>Case study presenting the way of update business website. 
                  Redefining company strategy and refocusing target audience. 
                  Presenting products and promote them to boost selling.
                  </div>
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
          <div className="work-item work-dark1">Watercolor portraits</div>
          <div className="work-item work-dark2">Personal project</div>
          <div className="work-item work-dark3">Graphic design</div>
          <div className="work-item work-dark4">
          It's one of my personal project. 
          I'm trying to develop my skills in watecolours technique as well as drawing and 
          sketching. Improving color mixing and use tones and values more intentionally.
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/Watercolorsopening.jpg')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>Graphic Design</div>
                <div>Trying to develop my skills in watecolours technique as well as drawing 
                  and sketching. Improving color mixing and use tones and values more 
                  intentionally.
                  </div>
                <Link to='/watercolor-portraits'>
                  <button>See the Gallery</button>
                </Link>
              </div>
            </section>
          </div>
          <Link className="work-item work-btn-light" to='/watercolor-portraits'>
                  <button>See the Gallery</button>
          </Link>
          <div className="work-text-desktop work-dekstop-h1">Watercolor portraits</div>
          <div className="work-text-desktop work-dekstop-h3">Personal project</div>
        </section>
        <section className="work-sec-container">
          <div className="work-item work-light1">Tellyo Talent mobile app</div>
          <div className="work-item work-light2">Tellyo OY</div>
          <div className="work-item work-light3">UX/UI</div>
          <div className="work-item work-light4">
          Since the nature of this work is confidential, please contact me to see this project.
                  Get in touch with me to talk about my process.
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/Tellyoapp-opening.jpg')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>UX/UI</div>
                <div>Since the nature of this work is confidential, please contact me to see this project.
                  Get in touch with me to talk about my process.</div>
                <Link to='/contact'>
                  <button>Contact me</button>
                </Link>
              </div>
            </section>
          </div>
          <Link className="work-item work-btn" to='/contact'>
                  <button>Contact me</button>
          </Link>  
          <div className="work-text-desktop work-dekstop-h1">Tellyo Talent mobile app</div>
          <div className="work-text-desktop work-dekstop-h3">Tellyo OY</div>    
        </section>
        <section className="work-sec-container work-sec-dark">
          <div className="work-item work-dark1">Conference stand</div>
          <div className="work-item work-dark2">Tellyo OY</div>
          <div className="work-item work-dark3">Graphic design</div>
          <div className="work-item work-dark4">
          {`International Broadcasting Convention, more commonly known by its initials IBC, is an 
          annual trade show, held in September at the RAI Exhibition and Convention Centre in 
          Amsterdam, the Netherlands. IBC's tagline is "The World's Most Influential Media, 
          Entertainment & Technology Show" and is aimed at broadcasters, content creators/providers, 
          equipment manufacturers, professional and technical associations, and other participants 
          in the broadcasting, entertainment and technology industry. `}
          </div>
          <div className="work-img-container">
            <img src={require('../images-work/ibc_stand_final.jpg')} alt="Website design"/>
            <section className="work-hover">
              <div className="work-wrapper">
                <div>Graphic Design</div>
                <div>Company brand in a large format design: 
                  project of stand for International Broadcasting Conference. <br/>
                Catching attention and building the brand awareness.</div>
                <Link to='/tellyo-talent-mobile-app'>
                  <button>Read Case Study</button>
                </Link>
              </div>
            </section>
          </div>
          <Link className="work-item work-btn-light" to='/tellyo-talent-mobile-app'>
                  <button>Read Case Study</button>
          </Link>     
          <div className="work-text-desktop work-dekstop-h1">Conference stand</div>
          <div className="work-text-desktop work-dekstop-h3">Tellyo OY</div> 
        </section>
        <section className="work-sec-container">
          <div className="work-item work-light1">Dark Theme</div>
          <div className="work-item work-light2">Tellyo OY</div>
          <div className="work-item work-light3">UI</div>
          <div className="work-item work-light4">
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
                <div>UI</div>
                <div>Following hottest trends in video editing world and trying to please and satisfy 
                  users by reducing eye strain, we have developed dark version of Tellyo's products.
                </div>
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