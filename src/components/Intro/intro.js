import React from 'react';
import './intro.css';
import bg from '../../assets/imagetwo.png';
import btnImage from '../../assets/hireme.png';
import { Link } from 'react-scroll';
const intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm 
            <span className="introName"> Arun</span>
            <br />Software Developer</span>
            <p className="introPara">I am a skilled web developer with experiance in developing <br />visually appearing and userfriently Websites and Android App</p>
            <Link><button className="btn"><img src={btnImage} alt="Hire Me" />Hire me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default intro;