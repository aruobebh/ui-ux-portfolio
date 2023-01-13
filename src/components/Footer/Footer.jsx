import React from 'react';
import instagram from '../../assets/Instagram.png';
import twitter from '../../assets/Twitter.png';
import linkedin from '../../assets/Linkedin.png';
import facebook from '../../assets/Facebook.png';
import youtube from '../../assets/YouTube.png';
import Illustration from '../../assets/Illustration footer.png';
import './footer.css';

const Footer = () => {
  return (
    <div className="app__footer ">
      <div className="app__footer-container">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="app__socials">
          <img src={instagram} alt="socials" />
          <img src={twitter} alt="socials" />
          <img src={linkedin} alt="socials" />
          <img src={facebook} alt="socials" />
          <img src={youtube} alt="socials" />
        </div>
      </div>

      <div className="app__terms">
        <p>Terms of Service - Privacy Policy</p>
      </div>

      <img className='app__footer-illustration' src={Illustration} alt="Illustration" />
    </div>
  )
}

export default Footer