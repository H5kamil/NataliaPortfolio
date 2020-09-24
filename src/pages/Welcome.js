import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css'

class Welcome extends Component {

  activeClass = "wel-work-active";

  state = {
    activehamburger: null,
    activelist: null,
    link1: this.activeClass,
    link2: null,
    link3: null
  }

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
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

  onClickLink = (e) => {
    console.log(e);
    this.setState({
      activeWork: null
    })

    switch (e) {
      case 1:
        this.setState({
          link1: this.activeClass,
          link2: null,
          link3: null
        })
        break;
      case 2:
        this.setState({
          link1: null,
          link2: this.activeClass,
          link3: null
          })
        break;
      case 3:
        this.setState({
          link1: null,
          link2: null,
          link3: this.activeClass
          })
          break;              
      default:
        break;
    }
  }

  render() {
    return (
        <>   
          <nav className="wel-nav"> 
          <Link to="/">
            <div className="wel-img-container">
              <img src={require('../images-work/logo.png')} alt="Logo"/>
            </div>
          </Link>  
            <button onClick={this.onClick} className={`wel-hamburger ${this.state.activehamburger}`}>
              <span className="wel-hamburger-box">
                <span className="wel-hamburger-inner">
                </span>
              </span>
            </button>   
            <div className="wel-nav-desktop">
              <Link onClick={()=>this.onClickLink(1)} to="/" className={`wel-nav-item ${this.state.link1}`}>Work</Link>
              <Link onClick={()=>this.onClickLink(2)} to="/about" className={`wel-nav-item ${this.state.link2}`}>About</Link>
              <Link onClick={()=>this.onClickLink(3)} to="/contact" className={`wel-nav-item ${this.state.link3}`}>Contact</Link>  
            </div>
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