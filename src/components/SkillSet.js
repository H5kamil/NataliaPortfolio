import React from 'react';
import '../styles/SkillSet.css';

const SkillSet = () => {
    return (
        <>
            <div className="sk-title">Skill set</div>
            <div className="sk-desc">Understanding the human-centered approach, 
                user experience essentials combined with focusing 
                on clear and pleasing interfaces 
                is a key for creating useful and effective products. 
                I enjoy using my skill set to empower people 
                of accomplishing their goals.  
                I believe that simplicity is the most important feature.
            </div>
            <div className="sk-svg-mobile">
                <img src={require('../images-work/sill_set_mobile.png')} alt="SkillSetMobile"/>
            </div>
            <div className="sk-svg-desktop">
                <img src={require('../images-work/sill_set_web.png')} alt="SkillSetDesktop"/>
            </div>
        </>
    )
}

export default SkillSet;
