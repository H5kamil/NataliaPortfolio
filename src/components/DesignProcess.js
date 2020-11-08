import React from 'react';
import '../styles/DesignProcess.css';
import svgDefine from '../svg/icon_define.svg';
import svgDeliver from '../svg/icon_deliver.svg';
import svgDesign from '../svg/icon_design.svg';
import svgDeveloping from '../svg/icon_developing.svg';
import svgPresent from '../svg/icon_present.svg';
import svgResearch from '../svg/icon_research.svg';

const DesignProcess = () =>  {
    return (
        <>
            <div className="depr-text">Design process</div>
            <section className="depr-container-mobile">
                <div className="depr-line">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="depr-process-desc">
                    <div>
                        <div><img src={svgDefine} alt="Define"/></div>
                        <div className="depr-desc-item">Define</div>
                        <div>Familiarizing with business
                            <br/>
                            and product requirements. 
                            <br/>
                            Establishing workflow. 
                            <br/>
                            Empathize with user.
                        </div>
                    </div>
                    <div>
                        <div><img src={svgResearch} alt="Research"/></div>
                        <div className="depr-desc-item">Research</div>
                        <div>Finding and naming all the 
                            <br/>
                            problems and pain points. 
                            <br/>
                            Checking out available 
                            <br/>
                            solutions and ideas, 
                            <br/>
                            competitors research.
                        </div>
                    </div>
                    <div>
                        <div><img src={svgDesign} alt="Design"/></div>
                        <div className="depr-desc-item">Design</div>
                        <div>Sketching, wireframing, 
                            <br/>
                            prototyping. Style guide. 
                            <br/>
                            design + dev + product owners 
                            <br/>
                            + testers meetings
                        </div>
                    </div>
                    <div>
                        <div><img src={svgPresent} alt="Present"/></div>
                        <div className="depr-desc-item">Present and evaluate</div>
                        <div>Team presentation and 
                            <br/>
                            critique. Designs iterations.  
                            <br/>
                            Consultations. Amendments.
                        </div>
                    </div>
                    <div>
                        <div><img src={svgDeveloping} alt="Developing"/></div>
                        <div className="depr-desc-item">Developing and test</div>
                        <div>Implementation of design by 
                            <br/>
                            dev team. Close cooperation 
                            <br/>
                            with tech experts. Checking
                            <br/>
                            solutions by test team.
                            <br/>
                            Amendments.
                        </div>
                    </div>
                    <div>
                        <div><img src={svgDeliver} alt="Deliver"/></div>
                        <div className="depr-desc-item">Deliver</div>
                        <div>Final development and
                            <br/>
                            design handoff, constant  
                            <br/>
                            testing. Maintenance. 
                            <br/>
                            Future development.
                        </div>
                    </div>
                </div>
            </section>
            <section className="depr-container-desktop">
                <div className="depr-wavy">
                <img src={require('../images-work/Dpw.png')} alt="Natalcia about"/>
                </div>
            </section>
        </>
    );
}

export default DesignProcess;