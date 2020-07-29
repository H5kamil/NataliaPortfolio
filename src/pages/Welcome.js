import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css'

class Welcome extends Component {

  state = {
    activehamburger: null,
    activelist: null
  }

  onClick = () => {
    if(this.state.activehamburger === null) {
      this.setState({
        activehamburger: 'wel--active',
        activelist: 'wel-navigation--active'
      })
    } else {
      this.setState({
        activehamburger: null,
        activelist: null
      })
    }
  }


  render() {
    return (
        <>   
          <nav className="wel-nav"> 
            <button onClick={this.onClick} className={`wel-hamburger ${this.state.activehamburger}`}>
              <span className="wel-hamburger-box">
                <span className="wel-hamburger-inner">
                </span>
              </span>
            </button>   
          </nav>    
          <div className={`wel-navigation ${this.state.activelist}`}>
            <div className="wel-nav-list">
              <Link onClick={this.onClick} to="/" className="wel-nav-item">Work</Link>
              <Link onClick={this.onClick} to="/website-design">Website design</Link>
              <Link onClick={this.onClick} to="/watercolor-portraits">Watercolor portraits</Link>
              <Link onClick={this.onClick} to="/tellyo-talent-mobile-app">Tellyo Talent mobile app</Link>
              <Link onClick={this.onClick} to="/conference-stand">Conference stand</Link>
              <Link onClick={this.onClick} to="/dark-theme">Dark Theme</Link>
              <Link onClick={this.onClick} to="/about" className="wel-nav-item">About</Link>
              <Link onClick={this.onClick} to="/contact" className="wel-nav-item">Contact</Link>  
            </div>
          </div>
        </>  
    );
  }
}

export default Welcome;