import React, { Component } from 'react';
import '../styles/NextProject.css';
import svgArrow from '../svg/up-arrow.svg';
import { Link } from 'react-router-dom';

class NextProject extends Component {

    projectRoutes = ["/website-design", "/watercolor-portraits", 
    "/tellyo-talent-mobile-app", "/conference-stand", "/dark-theme"];

    state = {
        activeLink: "/"
    }
  
    componentDidMount() {
        const id = this.props.id;
        this.setState({
            activeLink: this.projectRoutes[id]
        })
        console.log(this.state.activeLink);
    }

    onClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    render() {
      const route = this.state.activeLink;
      return (
        <section className="next-container">
            <div>See next project</div>
            <Link to={route} className="next-link-container">
              <img src={svgArrow} alt="Arrow" className="next-link-img"/>
              <div>Next Project title</div>
            </Link>
            <img onClick={this.onClick} src={svgArrow} alt="Arrow" className="next-link-arrow-up"/>
        </section>
      );
    }
  }
  
  export default NextProject;