import React from 'react';
import './about.css';
import confident from '../../assets/confident.png';

const About = () => {
  return (
    <div className='app__about section__padding' id='about'>
      <div className='app__about-container'>
        <div className='app__about-img'>
          <img src={confident} alt="confident" />
        </div>
        <div className='app__about-text'>
          <h1>About Me</h1>
          <p>My name is Sourasith Phomhome. I'm a UI Designer and a instrutor based in Montreal. I'm curently working with Design+Code. I'm passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills...<span>read more</span></p>
        </div>
      </div>
    </div>
  )
}

export default About