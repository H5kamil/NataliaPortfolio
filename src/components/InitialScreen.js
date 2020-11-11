import React, { Component } from 'react';
import Footer from './Footer';
import '../styles/Initialscreen.css';

class InitialScreen extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.onScrollScreen, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScrollScreen, true);
  }

  onScrollScreen = () => {
    if(window.scrollY){
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
        <div onScroll={this.onScrollScreen} id="ini-id">
            <div className="ini-img-container-wrapper">
                <div className="ini-img-container">
                  <img src={require('../images-work/logo.png')} alt="Logo"/>
                </div>
            </div>    
            <main className="ini-main">
                <div className="ini-spec">
                  Hi there! <br/> I'm Natalia Marcinkiewicz - 
                  multidisciplinary designer focused on creating 
                  visually appealing and easy to use
                  products and experiences
                </div>
                {/* start */}
                <button onClick={this.props.onClick} className="ini-btn">Let's start</button>
            </main>
            <section className="ini-footer">
              <Footer/>
            </section>
        </div>
    );
  }
}

export default InitialScreen;