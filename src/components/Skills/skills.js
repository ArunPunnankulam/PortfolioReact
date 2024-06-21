import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import AppDesign from '../../assets/app-design.png';
import WebDesign from '../../assets/website-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a skilled web developer with experiance in creating
visually appearing and userfriently websites.I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.</span>
<div className="skillBars">
    <div className="skillBar">
        <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Web Development</h2>
            <p>This demo text can change while changing the production ready site.</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
        <div className="skillBarText">
            <h2>Android Development</h2>
            <p>You can write text related to Android Development</p>
        </div>
    </div>
</div>
    </section>
  )
}

export default Skills;