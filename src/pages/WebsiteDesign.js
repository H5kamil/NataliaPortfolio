import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Cooperation from '../components/Cooperation';
import NextProject from '../components/NextProject';
import '../styles/WebsiteDesign.css';
import '../App.css';

class WebsiteDesign extends Component {

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <section className="web-background-img-dekstop-wrapper">
          <div className="web-background-img-dekstop">
            <img src={require('../images-work/final_t_dark_line.png')} alt="Website design"/>
          </div>
        </section>
        <main className="container">
          <section className="web-first-sec">
            <div>website design</div>
            <div className="web-fs-text-dekstop">
              The design process for refreshing company website
            </div>
            <div className="web-fs-text-mobile">
              The design process for<br/> refreshing company<br/> website
            </div>
          </section>
          <section className="web-second-sec">
            <div>Project details</div>
            <div className="web-second-sec-desc-mobile">Company Project <br/>
                2 Months <br/>
                3 Groups <br/>
                (Design + Marketing + <br/>
                Development Team: 6 people) <br/>
            </div> 
            <div className="web-second-sec-desc-desktop">
              Company Project l 2 Months l 3 Groups <br/>
              (Design + Marketing+ Development Team: 6 people) 
            </div> 
            <div>Case Study</div>   
            <div>
                Process focuses on creating compelling experiences
                that are grounded in business goals while carefully 
                designing to deliver on the user’s needs. This collaborative 
                process brings together business and technology 
                vision holders to ensure designs meet business objectives, 
                are scalable for future growth, and are feasible from a 
                technology perspective.
            </div>
            <div className="web-img-container-mobile">
              <img src={require('../images-work/final_t_dark_line.png')} alt="Website design"/>
            </div>
          </section>
          <section className="web-dekstop-empty-space"></section>
          <section className="web-third-sec">
            <div className="web-third-sec-item">
              <div style={{color: "black"}}>My role</div>
              <div>UI/UX Designer</div>
              <div>My role was to design the best possible experience and produce high 
                fidelity design for website update. 
                I had to figure out new attractive way to engaged audience with desirable 
                content. Home, Pricing, Case Studies and Careers were my part of work 
                to prepare new layout.</div>
            </div>
            <div className="web-third-sec-item">
              <div style={{color: "#21222E"}}>Deliverables</div>
              <div>Sketches</div>
              <div>Wireframes</div>
              <div>Portotype</div>
              <div>Visual Design</div>
              <div>High fidelity final graphics</div>
            </div>
          </section>
          <section className="web-4-sec">
            <div className="web-4-sec-item1">
              <div>About Tellyo</div>
              <div>Tellyo is an advanced, cloud-based live video production, 
                editing, streaming and distribution platform. It gives broadcasters 
                and rights holders the solutions to easily create engaging videos 
                from live content, and share them to social and digital channels in 
                real-time.</div>
            </div>
              <div className="web-4-sec-img-mobile">
                <img src={require('../images-work/about-tellyo---mobile-noBG.png')} alt="Website design"/>
              </div>
              <div className="web-4-sec-img-desktop">
                <img src={require('../images-work/about-tellyo---mobile-noBG.png')} alt="Website design"/>
              </div>
          </section>
          <section className="web-5-sec">
            <div className="web-5-item1">
              <div id="web-challange">The challenge</div>
              <div>Previously established hierarchy of website was based on two main 
                products: Tellyo Pro and Tellyo On Demand. Tellyo was resigning of 
                promoting Tellyo On Demand which was a solution for smaller companies 
                and pay-per-use clients focused. Company has centred on presenting new 
                solution: Tellyo Stream Studio. While main product, Tellyo Pro remains 
                unchanged as the core of the company, the additional features polished 
                lately were needed to present for wider audience. 
                Main goal was to present those two products as the complementary but 
                at the same time 
                hihlight their independent functionalities. All that align with the 
                Tellyo brand principles to produce a better experience.</div>
            </div>
            <div className="web-5-item2">
              <div>Before:</div>
              <div>Tellyo = Tellyo Pro | Tellyo On Demand</div>
              <div>New approach:</div>
              <div>Tellyo = Tellyo Pro + Tellyo Stream Studio</div>
            </div>
          </section>
          <section className="web-6-sec">
            <div>
              <div>Design process</div>
              <div>The first step of the design process involved desk research to understand 
                how competitors and users behave. Starting design process we gathered all the
                necessary information, established the scope of work. By taking a more holistic 
                approach we focused on showing our solutions right. Explaining all advantages 
                of each characteristics and showing main product, Tellyo Pro while Tellyo
                Stream Studio as the additional benefit.</div>
            </div>  
            <div className="web-6-sec-img-wrapper">
              <img src={require('../images-work/web-sec-6.png')} alt="Website design"/>
              <figcaption>Old Tellyo website</figcaption>
            </div>
          </section>
          <section className="web-7-sec">
            <div>Establishing the new hierarhy</div>
            <div>IA and sitemap</div>
            <div>Building the information architecture for this website took lots of things 
              into account, as well as organizing the information in a logical way. 
              Design a proper site structure required principles that are based on the 
              understanding that our focus should be purely the structure - something that 
              can be shown with maps and flowcharts, so that all critical user journeys 
              were all covered with needed informations. We’ve got to really understand 
              the functionality of the site. Once these requirements were met, we started 
              begin optimizing the IA.</div>
            <div className="web-7-sec-img-mobile">
              <img src={require('../images-work/sitemap_mobile.png')} alt=""/>
            </div>
            <div className="web-7-sec-img-dekstop">
              <img src={require('../images-work/sitemap_desktop.png')} alt=""/>
            </div>
          </section>
          <section className="web-8-sec">
            This process helped us prioritize, better clasify and organize gathered 
            information and needed elements. When dealing with constantly changing 
            businesses reguirements and new features of each product, there were a 
            number of amendments and updates, but main assumption was constant.
          </section>
          <section className="web-9-sec">
            <div>    
              <div>Design and prototype 02:</div>
              <div>Final solution Case Studies</div>
              <div>Since the site should be simple and easy to navigate and content is always 
                getting bigger, I had to make it easy scalable. Taking into considerations 
                business goals, I had in mind that we need to focus on sales and company 
                reputation but also engaged and encourage new customers. Keeping up with the 
                established IA and all graphics assets in mind, I designed a tiles grid that 
                the best suits Case Study section.
              </div>
            </div>    
            <div className="web-9-sec-gif">
              <img src={require('../images-work/macbook_CS-gif-NEW.gif')} alt=""/>
            </div>
          </section>
          <section className="web-10-sec">
            <div>Design and prototype 03:</div>
            <div>Final solution for Careers</div>
            <div className="web-10-sec-img-cont">
              <img src={require('../images-work/Careers-02---web.png')} alt=""/>
            </div>
          </section>
          <section className="web-11-sec">
            <div>Design and prototype 04:</div>
            <div>Final solution for Pricing and Contact form</div>
            <div className="web-11-sec-gif">
              <img src={require('../images-work/macbook_pricing-and-contact_gif-new.gif')} alt=""/>
            </div>
          </section>
          <section className="web-12-sec">
            <div>View the live site </div>
            <div>We launched the official new site in 2019</div>
            <a id="web-10-a-id" target="_blank" rel="noopener noreferrer" href="https://tellyo.com/">See the website</a>
          </section>
          <section className="web-13-sec">
            <div>Final solution takeaways</div>
            <div>
              In final design solution, we aimed to improve the content hierarchy and to 
              clearly portray the company’s brand and services offered. Design closely 
              harmonize with Tellyo Design system. I believe we improved the ease of listing, 
              which should result in an increased number of  site visitors and new clients.    
            </div>
          </section>
          <NextProject id={1}/>
          <Cooperation/>
        <SocialMedia/>
        <Footer/>
        </main>
        </>
    );
  }
}

export default WebsiteDesign;