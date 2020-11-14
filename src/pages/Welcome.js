import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css'

class Welcome extends Component {

  activeClass = "wel-work-active";
  activeId = "wel-id-active";

  state = {
    activehamburger: null,
    activelist: null,
    link1: this.activeClass,
    link2: null,
    link3: null,
    link4: null,
    link5: null,
    link6: null,
    link7: null,
    link8: null,
    menuActive: true
  }

  //scroll top after previous scrolling
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onClick = (e) => {
    if(e.target.tagName !== `SPAN`) {
      this.props.onClickSubPage();
    }
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

  onClickLink = (e,) => {
    console.log(e);
    this.setState({
      activeWork: null
    })

    switch (e) {
      case 1:
        this.setState({
          link1: this.activeClass,
          link2: null,
          link3: null,
          // link4: null,
          // link5: null,
          // link6: null,
          // link7: null,
          // link8: null,
        })
        break;
      case 2:
        this.setState({
          link1: null,
          link2: this.activeClass,
          link3: null,
          link4: null,
          link5: null,
          link6: null,
          link7: null,
          link8: null,
          })
        break;
      case 3:
        this.setState({
          link1: null,
          link2: null,
          link3: this.activeClass,
          link4: null,
          link5: null,
          link6: null,
          link7: null,
          link8: null,
          })
          break;    
      default:
        break;
    }
  }

  onClickLink2 = (e) => {
    console.log(e);
    this.setState({
      activeWork: null
    })

    switch (e) {
      case 4:
        this.setState({
          link1: null,
          link2: null,
          link3: null,
          link4: this.activeId,
          link5: null,
          link6: null,
          link7: null,
          link8: null,
          })
          break;      
      case 5:
        this.setState({
          link1: null,
          link2: null,
          link3: null,
          link4: null,
          link5: this.activeId,
          link6: null,
          link7: null,
          link8: null,
          })
          break;               
      case 6:
        this.setState({
          link1: null,
          link2: null,
          link3: null,
          link4: null,
          link5: null,
          link6: this.activeId,
          link7: null,
          link8: null,
          })
          break;   
      case 7:
        this.setState({
          link1: null,
          link2: null,
          link3: null,
          link4: null,
          link5: null,
          link6: null,
          link7: this.activeId,
          link8: null,
          })
          break;   
      case 8:
        this.setState({
          link1: null,
          link2: null,
          link3: null,
          link4: null,
          link5: null,
          link6: null,
          link7: null,
          link8: this.activeId,
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
          <Link to="/work" onClick={ () => {this.props.onClickSubPage();} }>
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
              <Link onClick={()=>this.onClickLink(1)} to="/work" className={`wel-nav-item wel-menu-active ${this.state.link1}`}>Work
              <div className="wel-dropdown">
                <Link onClick={()=>this.onClickLink2(4)} id={`${this.state.link4}`} to="/website-design">Website design</Link>
                <Link onClick={()=>this.onClickLink2(5)} id={`${this.state.link5}`} to="/watercolor-portraits">Watercolor portraits</Link>
                <Link onClick={()=>this.onClickLink2(6)} id={`${this.state.link6}`} to="/tellyo-talent-mobile-app">Tellyo Talent mobile app</Link>
                <Link onClick={()=>this.onClickLink2(7)} id={`${this.state.link7}`} to="/conference-stand">Conference stand</Link>
                <Link onClick={()=>this.onClickLink2(8)} id={`${this.state.link8}`} to="/dark-theme">Dark Theme</Link>
              </div></Link>
              <Link onClick={()=>this.onClickLink(2)} to="/about" className={`wel-nav-item ${this.state.link2}`}>About</Link>
              <Link onClick={()=>this.onClickLink(3)} to="/contact" className={`wel-nav-item ${this.state.link3}`}>Contact</Link>  
            </div>
          </nav>    
          <div className={`wel-navigation ${this.state.activelist}`}>
            <div className="wel-nav-list">
              <Link onClick={this.onClick} to="/work" className="wel-nav-item">Work</Link>
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