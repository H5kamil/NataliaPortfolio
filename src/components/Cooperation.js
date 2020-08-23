import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cooperation.css';

const Cooperation = () => {
    return (
        <section className="coo-container">
            <div className="coo-h1">
                <div style={{marginRight: "6px"}}>So then how can </div>
                <div>I help you?</div>
            </div>
            <div className="coo-h2">
                <div style={{marginRight: "6px"}}>Always available for creative work.</div>
                <div>Any interesting project?</div>
            </div>
            <Link to='/contact'><button>Contact me</button></Link>
        </section>
    );
}

export default Cooperation;