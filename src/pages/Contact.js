import React, { Component } from 'react';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import axios from 'axios';
import '../styles/Contact.css';
import '../App.css';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    validEmial: true
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onChangeSubject = (e) => {
    this.setState({
      subject: e.target.value
    })
  }

  onChangeMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  onClickSend = async () => {
    console.log(this.state.subject);
    if(!this.emailIsValid(this.state.email)){
      alert("Email is not valid")
    }else if (this.state.subject === '' || this.state.message === '' ) {
      alert("Fill required field")
    }else {
      axios.defaults.headers = {
        'Content-Type': 'application/json'
      }
  
      const data = {
        email: this.state.email,
        text: "Portfolio contact form",
        subject: this.state.subject,
        message: this.state.message
      }
      const url = 'https://send-gmail-api.herokuapp.com/api/send';
      try {
        const response = await axios.post(url, data); 
        console.log(response);
        if(response.status === 200) {
          alert("Email sent");
        }else {
          alert("Error occured");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    return (
        <main className="container">
          <section className="con-desc">
            <div className="con-h1">GET IN TOUCH</div>
            <div className="con-h3">Always available for</div>
            <div className="con-h3"> creative work</div>
          </section>
          {/* contact form with picture */}
            <div className="con-form-container">
              <div className="con-form-container-inner">
                {/* <form> */}
                  <label htmlFor="name">Your Name</label>
                  <input onChange={this.onChangeName} value={this.state.name} type="text" id="name" name="name"></input>
                  <label htmlFor="email">Your Email</label>
                  <input onChange={this.onChangeEmail} value={this.state.email} type="text" id="email" name="email"></input>
                  <label htmlFor="subject">Subject</label>
                  <input onChange={this.onChangeSubject} value={this.state.subject} type="text" id="subject" name="subject"></input>
                  <label htmlFor="message">Message</label>
                  <textarea onChange={this.onChangeMessage} value={this.state.message} id="message" name="message"></textarea>  
                  <button onClick={this.onClickSend} className="con-btn">Send</button>    
                  {/* </form>           */}
              </div>
              <div className="con-picture">
                <img src={require('../images-work/contact-portrait.png')} alt="Contact portrait"/>
              </div>
            </div>
            <SocialMedia/>
            <Footer/>
        </main>
    );
  }
}

export default Contact;