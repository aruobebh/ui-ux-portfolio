import React from 'react';
import './header.css';
import header1 from '../../assets/Illustration top.png';
import header2 from '../../assets/Illustration2.png';

const Header = () => {
  return (
    <div className='app__header section__padding' id='home'>
      <div className='app__header-content'>
        <h1 className='header_text'>Creative UI Designer Sourasith Phomhome Based in Montreal</h1>
        <div className='app__btn-container'>
          <a href="">Hire Me</a>
          <a href="">Download CV</a>
        </div>
      </div>
      <img className='header__top' src={header1} alt="header1" />
      <img className='header__bottom' src={header2} alt="header2" />
    </div>
  )
}

export default Header