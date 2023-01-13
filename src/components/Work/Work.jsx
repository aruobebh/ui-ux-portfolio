import React from 'react';
import Illustration from '../../assets/Illustration.png';
import Designs from '../../assets/Designs.png';
import UIDesign from '../../assets/UI Design.png';
import Mockups from '../../assets/Mockups.png';
import './work.css';

const Work = () => {
  return (
    <div className='app__work section__padding' id='work'>
      <h1>My Recent Work</h1>
      <div className="app__work-container">
        <img src={Designs} alt="designs" />
        <img className='scale' src={UIDesign} alt="UIDesign" />
        <img src={Mockups} alt="Mockups" />
      </div>
    </div>
  )
}

export default Work