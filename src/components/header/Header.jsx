import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import CV from '../../assets/cv.pdf'
import ME from '../../assets/me.png'
import './header.css'

const Header = () => {
  return (
    <header id='#' className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Md Akber Hossain</h1>
      <h5 className='text-light'>Fullstack Developer</h5>
      <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's talk</a>
      </div>
      <div className="header__social">
        <a href="http://facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="http://github.com" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        <a href="http://linkedin.com" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
      </div>
      <div className="header__scroll">
        <a href="#footer">scroll down</a>
      </div>
      <div className="me">
        <img src={ME} alt="me" />
      </div>
    </header>
  )
}

export default Header