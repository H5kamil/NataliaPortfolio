import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import Cooperation from '../components/Cooperation';
import NextProject from '../components/NextProject';
import '../styles/DarkTheme.css';
import '../App.css';

class DarkTheme extends Component {

    //scroll top after previous scrolling
    componentDidMount() {
      window.scrollTo(0, 0);
    }

  render() {
    return (
      <>
        <section className="dark-background-img-dekstop-wrapper">
          <div className="dark-background-img-dekstop">
            <img src={require('../images-work/dark_theme_opening.jpg')} alt="darksite design"/>
          </div>
        </section>
        <main className="container">
        <section className="dark-first-sec">
            <div>dark theme</div>
            <div className="dark-fs-text-dekstop">
              Process of creating supplemental mode to a light theme
            </div>
            <div className="dark-fs-text-mobile">
            Process of creating<br/>supplemental mode to a light theme
            </div>
          </section>
          <section className="dark-second-sec">
            <div>Project details</div>
            <div className="dark-second-sec-desc-mobile">Company Project <br/>
                2 Months <br/>
                3 Groups <br/>
                (Design Team: 3 people)
            </div> 
            <div className="dark-second-sec-desc-desktop">
              Company Project l 2 Months l 1 Group  <br/>
              (Design Team: 3 people) 
            </div> 
            <div>Case Study</div>   
            <div>
              Growing fast as live video editing and production company, Tellyo has to 
              follow the trail of dark theme mode. It was a request of clients but 
              also industry requirements. 
              Project contains a comprehensive elaboration of colors, usage, 
              application, guidelines and tokens.
            </div>
            {/* <div className="dark-img-container-mobile">
              <img src={require('../images-work/final_t_dark_line.png')} alt="darksite design"/>
            </div> */}
          </section>
          <section className="dark-dekstop-empty-space"></section>
          <section className="dark-third-sec">
            <div className="dark-third-sec-item">
              <div style={{color: "#21222E"}}>My role</div>
              <div>UI/UX Designer</div>
              <div>My role was to find and establish perfect complementary to light theme colors 
                and name them. According to Tellyo's Design System and Google Material Design 
                guidelines together with 2 ohers designers, we had to deliver best dark theme 
                pallete for Tellyo's lead products. </div>
            </div>
            <div className="dark-third-sec-item">
              <div style={{color: "#21222E"}}>Deliverables</div>
              <div>Style guide</div>
              <div>Easy to use colours tokens</div>
              <div>Visual Design</div>
              <div>Dark Theme UI Kit </div>
            </div>
          </section>
          <section className="dark-9-sec">
            <div>    
              <div>About Tellyo</div>
              <div>Tellyo is an advanced, cloud-based live video production, editing, streaming and 
                distribution platform. It gives broadcasters and rights holders the solutions to easily 
                create engaging videos from live content, and share them to social and digital channels 
                in real-time. <br/>
                It was crucial to ensure dark theme mode for users to improve visual ergonomics by reducing 
                eye strain, as the professional video producers spend a lot of time editing video content.
              </div>
            </div>    
            <div className="dark-9-sec-gif-mobile">
              <img src={require('../images-work/About-Tellyo-mobile.png')} alt=""/>
            </div>
            <div className="dark-9-sec-gif-desktop">
              <img src={require('../images-work/About-Tellyo.png')} alt=""/>
            </div>
          </section>
          <section className="dark-a-sec">
            <div>The challenge</div>
            <div>Our ambition was to create a strong foundation: providing clear and easy to use color 
                system for designers and developers. Establish well-balanced, harmonious and accessible 
                dark theme. <br/>
                Main goal was to define and develop practical solution when using and switching color 
                palettes so that final users can change it easily when working with Tellyo. There was a 
                need to implement dark theme in Video Editor, Tellyo Pro Dashboard and Stream Studio products.
            </div>
            <div>
                Main problem was that there was no clear arrangement in terms of color palletes in Dev Team. 
                Developers were working by copying the same (or almost the same) colors and combining 
                different tokens every time they had to, which at the end cause a big mess and was really 
                time-consuming.  
            </div>
          </section>
          {/* <section className="dark-4-sec">
            <div className="dark-4-sec-item1">
              <div>About Tellyo</div>
              <div>Tellyo is an advanced, cloud-based live video production, 
                editing, streaming and distribution platform. It gives broadcasters 
                and rights holders the solutions to easily create engaging videos 
                from live content, and share them to social and digital channels in 
                real-time.</div>
            </div>
              <div className="dark-4-sec-img-mobile">
                <img src={require('../images-work/about-tellyo---mobile-noBG.png')} alt="darksite design"/>
              </div>
              <div className="dark-4-sec-img-desktop">
                <img src={require('../images-work/about-tellyo---mobile-noBG.png')} alt="darksite design"/>
              </div>
          </section>
          <section className="dark-5-sec">
            <div className="dark-5-item1">
              <div>The challenge</div>
              <div>Previously established hierarchy of darksite was based on two main 
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
            <div className="dark-5-item2">
              <div>Before:</div>
              <div>Tellyo = Tellyo Pro | Tellyo On Demand</div>
              <div>New approach:</div>
              <div>Tellyo = Tellyo Pro + Tellyo Stream Studio</div>
            </div>
          </section>
          <section className="dark-6-sec">
            <div>
              <div>Design process</div>
              <div>The first step of the design process involved desk research to understand 
                how competitors and users behave. Starting design process we gathered all the
                necessary information, established the scope of work. By taking a more holistic 
                approach we focused on showing our solutions right. Explaining all advantages 
                of each characteristics and showing main product, Tellyo Pro while Tellyo
                Stream Studio as the additional benefit.</div>
            </div>  
            <div className="dark-6-sec-img-wrapper">
              <img src={require('../images-work/dark-sec-6.png')} alt="darksite design"/>
              <figcaption>Old Tellyo darksite</figcaption>
            </div>
          </section>
          <section className="dark-7-sec">
            <div>Establishing the new hierarhy</div>
            <div>IA and sitemap</div>
            <div>Building the information architecture for this darksite took lots of things 
              into account, as well as organizing the information in a logical way. 
              Design a proper site structure required principles that are based on the 
              understanding that our focus should be purely the structure - something that 
              can be shown with maps and flowcharts, so that all critical user journeys 
              were all covered with needed informations. We’ve got to really understand 
              the functionality of the site. Once these requirements were met, we started 
              begin optimizing the IA.</div>
            <div className="dark-7-sec-img-mobile">
              <img src={require('../images-work/sitemap_mobile.png')} alt=""/>
            </div>
            <div className="dark-7-sec-img-dekstop">
              <img src={require('../images-work/sitemap_desktop.png')} alt=""/>
            </div>
          </section>
          <section className="dark-8-sec">
            This process helped us prioritize, better clasify and organize gathered 
            information and needed elements. When dealing with constantly changing 
            businesses reguirements and new features of each product, there were a 
            number of amendments and updates, but main assumption was constant.
          </section>
          <section className="dark-9-sec">
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
            <div className="dark-9-sec-gif">
              <img src={require('../images-work/macbook_CS-gif-NEW.gif')} alt=""/>
            </div>
          </section>
          <section className="dark-10-sec">
            <div>Design and prototype 03:</div>
            <div>Final solution for Careers</div>
            <div className="dark-10-sec-img-cont">
              <img src={require('../images-work/Careers-02---dark.png')} alt=""/>
            </div>
          </section>
          <section className="dark-11-sec">
            <div>Design and prototype 04:</div>
            <div>Final solution for Pricing and Contact form</div>
            <div className="dark-11-sec-gif">
              <img src={require('../images-work/macbook_pricing-and-contact_gif-new.gif')} alt=""/>
            </div>
          </section>
          <section className="dark-12-sec">
            <div>View the live site </div>
            <div>We launched the official new site in 2019.</div>
            <a id="dark-10-a-id" target="_blank" rel="noopener noreferrer" href="https://tellyo.com/">See the darksite</a>
          </section>
          <section className="dark-13-sec">
            <div>Final solution takeaways</div>
            <div>
              In final design solution, we aimed to improve the content hierarchy and to 
              clearly portray the company’s brand and services offered. Design closely 
              harmonize with Tellyo Design system. I believe we improved the ease of listing, 
              which should result in an increased number of  site visitors and new clients.    
            </div>
          </section> */}
          <NextProject id={2}/>
          <Cooperation/>
          <SocialMedia/>
          <Footer/>
        </main>
      </>
    );
  }
}

export default DarkTheme;