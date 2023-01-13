import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='app__navbar'>
      <nav className='app__navbar-links'>
        <p><a href="#home">Home</a></p>
        <p><a href="#about">About me</a></p>
        <p><a href="#work">Work</a></p>
        <p><a href="#contact">Contact</a></p>
      </nav>
    </div>
  )
}

export default Navbar