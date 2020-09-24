import React, { Component } from 'react';
// import Slider from "react-slick";
import '../styles/Slider.css';
// import 'slick-carousel/slick/slick.css'; 
// import 'slick-carousel/slick/slick-theme.css';

class SliderComponent extends Component {

    properties = [
        {
            index: 0,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-01.png'
        },
        {
            index: 1,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-02.png'
        },
        {
            index: 2,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-03.png'
        },
        {
            index: 3,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-04.png'
        },
        {
            index: 4,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-05.png'
        },
        {
            index: 5,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-06.png'
        },
        {
            index: 6,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-07.png'
        },
        {
            index: 7,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-08.png'
        },
        {
            index: 8,
            picture: '../slider-mobile/Design-and-prototype-home-MOBILE-09.png'
        }
    ]

    render() {
        // const settings = {
        //     dots: true,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        //   };  
      return (
        <section className="sl-container">
            {/* <Slider {...settings}>
            <div>
                gdfdfdfdfdfd
                <img src={require('../slider-mobile/Design-and-prototype-home-MOBILE-01.png')} alt="Website design"/>
            </div>
            <div>
                gdfdfdfdfdfd
                <img src={require('../slider-mobile/Design-and-prototype-home-MOBILE-02.png')} alt="Website design"/>
            </div>
            <div>
                gdfdfdfdfdfd
                <img src={require('../slider-mobile/Design-and-prototype-home-MOBILE-03.png')} alt="Website design"/>
            </div>
            </Slider> */}
        </section>
      );
    }
  }
//   {require('../images-work/web-sec-6.png')}
  export default SliderComponent;