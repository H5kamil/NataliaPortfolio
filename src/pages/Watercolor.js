import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Cooperation from '../components/Cooperation';
import NextProject from '../components/NextProject';
import { images } from "./images";
import '../styles/Watercolor.css';
import '../App.css';

class Watercolor extends Component {

  state = {
    images: images
  }

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const imgTab = this.state.images;
    const imgList = imgTab.map((item) => (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img key={item.id} src={item.src} alt=""/>
    ))

    return (
        <>
          <main className="container">
            <section className="wat-first-sec">
              <div>
                Watercolors and pencil portraits
              </div>
              <div>
                #100 faces challenge
              </div>
            </section>
            <div className="wat-img-container">
              <div>Design process</div>
              <div>Case Study</div>
              <div>Developing my skills in watecolours technique as well as drawing and 
                sketching. Improving color mixing and use of tones and values more 
                intentionally. The challenge I follow is focused on creating 100 watercolour 
                portraits. Can't wait to see improvements! :) </div>
              <section className="wat-cont">
                {imgList}
              </section>
            </div>
            <NextProject id={3}/>
            <Cooperation/>
            <SocialMedia/>
            <Footer/>
          </main>
        </>
    );
  }
}

export default Watercolor;