import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
      <section className="foo-container-wrapper">
        <div className="foo-container">
          <Link to="/">
            <div className="foo-img-container">
              <img src={require('../images-work/logo.png')} alt="Logo"/>
            </div>
          </Link>
          <div className="foo-nt">
            <div className="foo-desc">Natalia Marcikiewicz</div>
            <div className="foo-desc">Design Portfolio 2020.</div>
          </div>

        </div>
    </section>
    );
}

export default Footer;