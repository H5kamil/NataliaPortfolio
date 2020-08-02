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
        {/* <section>
          <div>SELECTED WORKS</div>
          <div>Welcome to my projects</div>
          <div>page, here you'll find work</div>
        </section>
        <section>
          <div>Website design</div>
          <div>Tellyo OY</div>
          <div>UI/UX</div>
          <div>
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/Tellyowebsite-opening.jpg')} alt="Website design"/></div>
          <button>Read Case Study Component</button>
        </section>
        <section>
          <div>Watercolor portraits</div>
          <div>Personal project</div>
          <div>Graphic design</div>
          <div>
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/Watercolorsopening.jpg')} alt="Website design"/></div>
          <button>Read Case Study Component</button>
        </section>
        <section>
          <div>Tellyo Talent mobile app</div>
          <div>Tellyo OY</div>
          <div>UI/UX</div>
          <div>
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/ibc_stand_final.jpg')} alt="Website design"/></div>
          <button>Read Case Study Component</button>          
        </section>
        <section>
          <div>Tellyo Talent mobile app</div>
          <div>Tellyo OY</div>
          <div>UI/UX</div>
          <div>
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/Tellyoapp-opening.jpg')} alt="Website design"/></div>
          <button>Read Case Study Component</button>     
        </section>
        <section>
          <div>Dark Theme</div>
          <div>Tellyo OY</div>
          <div>UI/UX</div>
          <div>
          Process focuses on creating compelling experiences that are grounded in business goals while carefully designing to deliver on the user’s needs. This collaborative process brings together business and technology vision holders to ensure designs meet business objectives, are scalable for future growth, and are feasible from a technology perspective.
          </div>
          <div className="work-img-container"><img src={require('../images-work/Darktheme-opening.jpg')} alt="Website design"/></div>
          <button>Read Case Study Component</button>
        </section> */}
        <Cooperation/>
        <SocialMedia/>
        <Footer/>
      </main>
    );
  }
}
// {require('/images/image-name.png')}
export default Work;