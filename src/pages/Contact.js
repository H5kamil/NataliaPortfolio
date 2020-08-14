import React, { Component } from 'react';
import nodemailer from 'nodemailer';
import SocialMedia from '../components/SocialMedia';
import Footer from '../components/Footer';
import '../styles/Contact.css';
import '../App.css';

class Contact extends Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
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

  sendMail = async () => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    console.log("testacc ")
    let testAccount = await nodemailer.createTestAccount();
    console.log("testacc passed")
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: this.state.email.toString(), // sender address
      to: "kamil.nowak.p.lodzka@gmail.com", // list of receivers
      subject: this.state.subject.toString(), // Subject line
      text: this.state.message.toString(), // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  onClickSend = () => {
    this.sendMail();
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