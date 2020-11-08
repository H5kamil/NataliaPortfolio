import React from 'react';
import '../styles/SocialMedia.css';

const SocialMedia = () =>  {
    return (
        <section className="soc-container-wrapper">
          <div className="soc-container">
            <a href='https://www.behance.net/Nata_Marcin' rel="noopener noreferrer" target="_blank">Behance</a>
            <a href='https://dribbble.com/natalia_marcin?fbclid=IwAR14NSXwKvgryCRcth5mXzKY57kmj7DtS8LqroQWRlKRuiorDznnvVBtxLI' rel="noopener noreferrer" target="_blank">Dribble</a>
            <a href='https://www.facebook.com/natalia.marcinkiewicz.9' rel="noopener noreferrer" target="_blank">Facebook</a>
            <a href='https://pl.linkedin.com/in/natalia-marcinkiewicz-68624282' rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </div>
        </section>
    );
}

export default SocialMedia;