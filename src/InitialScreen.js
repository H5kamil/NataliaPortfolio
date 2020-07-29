import React, { Component } from 'react';
import './styles/Initialscreen.css';

class InitialScreen extends Component {
  render() {
    return (
        <>
        <main className="ini-main">
            {/* who I am */}
            <div className="ini-who">
            <div>I'M NATALIA</div>
            <div>MARCINKIEWICZ</div> 
            <div>VISUAL DESIGNER</div> 
            <div>AND PROBLEM</div> 
            <div>SOLVER BASED IN</div>
            <div>ŁÓDŹ, POLAND.</div>
            </div>  
            {/* specialization */}
            <div className="ini-spec">
            <div>Specializing in graphic and</div>
            <div>user interface design.</div> 
            <div>Animation and motion lover.</div>
            </div>  
            {/* start */}
            <button onClick={this.props.onClick} className="ini-btn">Let's start</button>
        </main>
        </>
    );
  }
}

export default InitialScreen;