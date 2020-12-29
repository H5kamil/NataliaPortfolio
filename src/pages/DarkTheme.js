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
                in real-time.
                It was crucial to ensure dark theme mode for users to improve visual ergonomics by reducing 
                eye strain, as the professional video producers spend a lot of time editing video content.
              </div>
            </div>    
            <div className="dark-9-sec-gif-mobile">
              <img src={require('../images-work/About-Tellyo-mobile.png')} alt=""/>
              <figcaption>Video editior and dashboard in light theme</figcaption>
            </div>
            <div className="dark-9-sec-gif-desktop">
              <img src={require('../images-work/About-Tellyo-2.png')} alt=""/>
              <figcaption>Video editior and dashboard in light theme</figcaption>
            </div>
          </section>
          <section className="dark-a-sec">
            <div>The challenge</div>
            <div>Our ambition was to create a strong foundation: providing clear and easy to use color 
                system for designers and developers. Establish well-balanced, harmonious and accessible 
                dark theme.
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
          <section className="dark-b-sec">
            <div>
              Design process
            </div>
            <div>
            Research and technical requirement:
            </div>
            <div>
            Most important guides from <span>Material Design</span> dark theme:<br/>
            - <span>Contrast</span>: Dark surfaces and light body text should have a contrast level of at 
            least 15.8:1<br/>
            - <span>Depth</span>:  At higher levels of elevation, components express depth by displaying 
            lighter surface colors<br/>
            - <span>Desaturation</span>: Primary colors are desaturated so they pass the 
            <div className="dark-underline">Web Content Accessibility Guidelines’ (WCAG)</div> AA standard of 
            at least 4.5:1 (when used with body text) at all elevation levels<br/>
            - <span>Limited color</span>: Large surfaces use a dark surface color, with limited 
            color accents (light, desaturated and bright, saturated colors)
            </div>
            <div>
            Checking contrast:
            </div>
            <div>
            The process of checking and establishing well balanced colors with proper contrast was 
            very complex. Combining all surfaces, buttons, dividers, text, icons, disabled element, 
            bigger components on darker backgrounds, causes contrast problems on lighter ones.
            </div>
          </section>
          <section className="dark-layouts">
            <div className="dark-layouts-mobile">
              <div className="dark-cont">
                <img src={require('../images-work/layout_nextto_1.png')} alt=""/>
              </div>
              <div className="dark-cont">
                <img src={require('../images-work/layout_nextto_2.png')} alt=""/>
              </div>
            </div>
            <div className="dark-layouts-dekstop">
              <img src={require('../images-work/Checking_contrast.png')} alt=""/>
            </div>
          </section>
          <section className="dark-colors">
            <div>
            Color theme creation
            </div>
            <div>
            Mapping general rules of light theme
            </div>
            <div>
            Similar to light theme design, when it comes to creating dark theme UI it’s essential 
            to create hierarchy and emphasize important elements in the layout. Elevation is one 
            of the most important way to communicate the element's hierarhy. While in light theme 
            we use shadows to emphasize and express the elevation, in dark theme mode shadows are 
            not well visible. Following Material Design guidelines, we were trying to find best 
            match of background colours by lightning them up- the more elevated the surface is, 
            the brighter the color becomes.
            </div>
            <div>
            Trying to find the best backgrounds eqivalent
            </div>
            <div className="dark-c-img1-mobile">
              <img src={require('../images-work/light_BG@2x.png')} alt=""/>
            </div>
            <div className="dark-c-img1-mobile">
              <img src={require('../images-work/dark_BG@2x.png')} alt=""/>
            </div>
            <div className="dark-c-img1-desktop">
              <img src={require('../images-work/bg_eqivalent@2x.png')} alt=""/>
            </div>
            <div>
            Establishing the elevation
            </div>
            <div className="dark-c-img2">
              <img src={require('../images-work/Elevation_01@2x.png')} alt=""/>
            </div>
            <div>
            Action colours + semantic colours check
            </div>
            <div className="dark-c-img3-mobile">
              <img src={require('../images-work/Grid_colours@2x.png')} alt=""/>
              <img src={require('../images-work/colors@2x.png')} alt=""/>
              <img src={require('../images-work/Buttons@2x.png')} alt=""/>
            </div>
            <div className="dark-c-img3-dektop">
              <img src={require('../images-work/Action_@2x.png')} alt=""/>
            </div>
          </section>
          <section className="dark-text">
          Creating dark theme although is very pleasant, it is not very easy. There are numerous of 
          guidelines, properties, usability and technical requirements also best practises, advices,
           guides and updates to follow. During the process we headed mamy problems. The shadows, 
           text and button colours weren't just simple opposite or supplemental colors, as dark
            background make people perceived color differently. Dark and light themes will always 
            evoke different emotions. We knew we have to do our best to keep the same visual 
            hierarchy and  take advantage of product’s identity. 
          </section>
          <section className="dark-hard">
            <div>
              Working hard
            </div>
            <div>
            Matching colors, testing, failing, iterating
            </div>
            <div className="dark-hard-container">
            <img src={require('../images-work/Iterations_03.gif')} alt=""/>
            </div>
          </section>
          <section className="dark-proto-01">
            <div>Color palettes</div>
            <div>Final solution</div>
            <div>We have divided colours by groups, depending on their purpose and use. This role 
              is closely related to the token's naming. We did our best to reduce number of colours 
              and standarize nomenclature, so that using themes would be much easy and efficient. 
              As a part of Design System, themes need to become the most important global guidelines 
              for Developers so they could have colours reference and use them safely and appropriate.
            </div>
            <div>
            We have distinguished the following groups of interface colors:<br/>
            - layouts (containers and pages backgrounds)<br/>
            - borders<br/>
            - dividers<br/>
            - scroll<br/>
            - shadow<br/>
            - masks<br/>
            - typography <br/>
            - buttons/ interactions (primary, secondary, text buttons, disabled, states)<br/>
            - semantic colors<br/>
            - forms
            </div>
            <div className="dark-p-01-cont">
            <img src={require('../images-work/Color-palettes-02.png')} alt=""/>
            </div>
          </section>
          <section className="dark-11-sec">
            <div>Dark Theme</div>
            <div>Final solution</div>
            <div>
            We established dark theme step by step, testing every variation in more and more 
            complicated interface context.  When numerous of surface within different elevation 
            and text hierarchy had any accesibility problem, we had clear reference in our 
            light theme to keep visual order in place. We were working on numerous components 
            and testing them in variable surfaces. As far as the components grow, we created more 
            complex interfaces that started to match perfectly.
            </div>
            <div className="dark-11-sec-gif">
              <img src={require('../images-work/macbook-switch-themes.gif')} alt=""/>
              <figcaption>Final result when switching between modes</figcaption>
            </div>
          </section>
          <section className="dark-12-sec">
            <div>Final result</div>
            <div>To see interface in action you need to be a logged Tellyo user.</div>
            <a id="dark-10-a-id" target="_blank" rel="noopener noreferrer" href="https://tellyo.com/">See the website</a>
            <a id="dark-10-a-id" target="_blank" rel="noopener noreferrer" href="https://app.tellyo.com/signin">Log in to Tellyo</a>
          </section>
          <section className="dark-take">
          <img src={require('../images-work/all_tools_final_02.png')} alt=""/>
          <div>Final solution takeaways</div>
          <div>Although creating of dark theme was really demanding job, keeping it organize together
            with light theme brought to the company a lot of value. Users can easily switch between 
            modes and choose preferable option. Interfaces look well polished and elegant. I have 
            experienced on my own how well implemented themes makes work much more efficient and
            effective in every day collaboration with developers. What is the most important, Tellyo 
            users also gave back really positive feedback about dark theme.</div>
          </section>
          <NextProject id={0}/>
          <Cooperation/>
          <SocialMedia/>
          <Footer/>
        </main>
      </>
    );
  }
}

export default DarkTheme;