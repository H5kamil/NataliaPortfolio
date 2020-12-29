import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Cooperation from '../components/Cooperation';
import NextProject from '../components/NextProject';
import Video from '../images-work/Video_white_orange.mp4';
import '../styles/Stand.css';
import '../App.css';

class Stand extends Component {

    //scroll top after previous scrolling
    componentDidMount() {
      window.scrollTo(0, 0);
    }

  render() {
    return (
        <>
          <section className="st-background-img-dekstop-wrapper">
            <div className="st-background-img-dekstop">
            <img src={require('../images-work/final_01a.jpg')} alt="darksite design"/>
            </div>
          </section>
          <main className="container">
          <section className="st-first-sec">
            <div>IBC conference stand | 2019 </div>
            <div className="st-fs-text-dekstop">
              The design process for creating conference stand 
            </div>
            <div className="st-fs-text-mobile">
              The design process for creating conference stand
            </div>
          </section>
          <section className="st-second-sec">
            <div>About IBC conference</div>
            <div className="st-second-sec-desc-mobile">
              RAI Amsterdam | 13–17 September 2019
            </div> 
            <div className="st-second-sec-desc-desktop">
              RAI Amsterdam | 13–17 September 2019
            </div> 
            <div>Case Study</div>   
            <div>
            International Broadcasting Convention is an annual trade show, 
            held in September in Amsterdam, the Netherlands. Is aimed at
            broadcasters, content creators/providers, equipment manufacturers, 
            professional and technical associations, and other participants in 
            the broadcasting, entertainment and technology industry.
            Tellyo is an annual participant from couple of years, but with new 
            brand identity company has presented its products there for the 3rd 
            time.
            </div>
            <div className="st-img-container-mobile">
              <img src={require('../images-work/final_01a.jpg')} alt="darksite design"/>
            </div>
          </section>
          <section className="st-dekstop-empty-space"></section>
          <section className="st-third-sec">
            <div className="st-third-sec-item">
              <div style={{color: "#21222E"}}>My role</div>
              <div>Graphic Designer</div>
              <div>My role was to arrange space of a stand 6m x 2,5m. I had to deliver sketches, 
                prototypes and prepare 3D visualizations of best ideas. 
                I provided final design and I was responsible 
                for preparing highest quality files for print.
              </div>
            </div>
            <div className="st-third-sec-item">
              <div style={{color: "#21222E"}}>Deliverables</div>
              <div>Sketches</div>
              <div>Portotype</div>
              <div>Visual Design</div>
              <div>3D visualizations</div>
              <div>High fidelity final graphics</div>
              <div>Final files for print</div>
            </div>
          </section>
          <section className="st-tech-req">
            <div>Technical requirements</div>
            <div className="st-tech-req-img">
              <img src={require('../images-work/tech-req.jpg')} alt="darksite design"/>
            </div>
          </section>
          <section className="st-challenge">
            <div>The challenge</div>
            <div>
              {`Keeping with new brands visuals I had to attract attention of people in a really crowded 
              conference and create unique and attractive experience. Display should interest and engage 
              event participants. It should also clearly inform what Tellyo is about (live video production) 
              and give a sense of warm welcome with modern feel. 
              I led the design according to technical requirements and measurements. The key was the division 
              into 2 main sections: demo area (where our product were ready to test online) and meeting & 
              presentation section (for scheduled appointments and products presentation).`}
            </div>
          </section>
          <section className="st-dpc">
            <div>Design process</div>
            <div>Checking out new possibilities, trends and award winning displays, I had many ideas when sketching solutions, 
              but some of them were too brave :) Having such a large space to develop, together with senior designer, 
              we decided that the best solution will be go for a clean, modern and a bit more sophisticated design. 
              We had in mind that company's new brand identity need to be bold and highlighted among others and also well 
              recognizable and remembered.
            </div>
            <div id="st-2x3" className="st-sketches">
              <img src={require('../images-work/sketches-01.jpg')} alt=""/>
              <img src={require('../images-work/sketches-02.jpg')} alt=""/>
              <img src={require('../images-work/sketches-03.jpg')} alt=""/>
              <img src={require('../images-work/sketches-04.jpg')} alt=""/>
              <img src={require('../images-work/sketches-05.jpg')} alt=""/>
              <img src={require('../images-work/sketches-06.jpg')} alt=""/>
            </div>
          </section>
          <section className="st-first">
            <div>First visualizations</div>
            <div>
              Having proper basics is always a good practice. I started with creating the exhibition stand plain and white wall 
              and make sure all the furniture are right placed. Crucial here was to stick to the measurements and technical 
              requirements so that scale would be properly calculated.
            </div>
            <div className="st-first-img">
              <img src={require('../images-work/stand_v00_02.jpg')} alt=""/>
              <img src={require('../images-work/stand_v00_03.jpg')} alt=""/>
              <img src={require('../images-work/stand_00-vizualization.png')} alt=""/>
            </div>
          </section>
          <section className="st-first" id="st-print">
            <div>Final files for print</div>
            <div>I have prepared final files for print according to technical guidelines. 
              We knew that what brings people to the stand is a fresh, energetic, 
              appealing orange colour. With a great amount of white space, the stand was 
              clearly visible and easy to find among overloaded with text, photos and 
              graphics  stands. Logo of the company was also placed on columns so that 
              conference participants won't miss it. Clear and bold title was well visible 
              and easy to read from every distance.
            </div>
            <div className="st-print-img">
            <img src={require('../images-work/Tellyo_dimensions-small.png')} alt=""/>
            </div>
          </section>
          <section className="st-first" id="st-vid">
            <div id="st-vid-div">Final project</div>
            <div id="st-vid-div">It was important to keep with visual language of the company which is relatively new in the industry to 
              create a bold, strong and outstanding brand experience. What was crucial is that elements of the layout had to 
              be well placed. Logo, title and TV had to be right in place: more than 2merets above ground, so that people 
              passing by won't miss it from far away and closer position. 3D visualizations helped me but also other members 
              of this project better arrange the space and boost the accesibility of the stand.</div>
              <div className="st-sketches">
                <img src={require('../images-work/final_02.jpg')} alt="darksite design"/>
                <img src={require('../images-work/final_03.jpg')} alt="darksite design"/>
                <img src={require('../images-work/final_04.jpg')} alt="darksite design"/>
                <img src={require('../images-work/final_05.jpg')} alt="darksite design"/>
                <img src={require('../images-work/final_01a.jpg')} alt="darksite design"/>
              </div>
              <div className="st-video">
              <video controls={true} src={Video} type="video/pm4"/>
              </div>
          </section>
          <section className="st-first" id="st-print">
            <div>Final result and takeaways</div>
            <div>Designing a big format stand has been a really challenging but great experience. Creating 
              in such a big scale make me pay attention for details even more. What is small on screen gets 
              really huge in real scale, surfaces and colours interact differently in three-dimensional world.  That is why knowing the principles of human perceiving is really helpful. 
              3D visualizations were crucial in this project. Final result met our intentions.
            </div>
            <div className="st-print-img">
            <img src={require('../images-work/final-stand.jpg')} alt=""/>
            </div>
          </section>
          <section className="st-desc-last">
          This challenge helped me realize how different can visual language be used across whole range 
          of mediums. Scale matters a lot. 
          Using company's signet in a big enlargement created abstract dynamic shape and became visually 
          attractive space that catch attention. At the same time it's not overloaded with content with 
          the great amount of white space which fit and communicate well the corporate identity. 
          </section>
            <NextProject id={4}/>
            <Cooperation/>
            <SocialMedia/>
            <Footer/>
          </main>
        </>
    );
  }
}

export default Stand;