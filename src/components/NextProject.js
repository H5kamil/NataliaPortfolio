import React, { Component } from 'react';
import '../styles/NextProject.css';
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
            <div className="next-nata">See the next project</div>
            <Link id="next-id" to={route}>
              Next project
            </Link>
        </section>
      );
    }
  }
  
  export default NextProject;