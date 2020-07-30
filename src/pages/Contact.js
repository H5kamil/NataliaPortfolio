import React, { Component } from 'react';
import '../styles/Contact.css';
import '../App.css';

class Contact extends Component {
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
                <form>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name"></input>
                  <label htmlFor="email">Your Email</label>
                  <input type="text" id="email" name="email"></input>
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject"></input>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message"></textarea>  
                  <button className="con-btn">Send</button>              
                </form>
              </div>
              <div className="con-picture">Picture</div>
            </div>
        </main>
    );
  }
}

export default Contact;