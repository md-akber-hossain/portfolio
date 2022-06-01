import React from 'react'
import { AiFillFacebook, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import './footer.css'


const Footer = () => {
  return (
    <section id="footer">
      <div className="footer__container">
        <h2>Thanks for Visiting</h2>

        <div className="permalink">
          <div className="perm_item"><a href="#">Header</a></div>
          <div className="perm_item"><a href="#about">About Me</a></div>
          <div className="perm_item"><a href="#experience">Experience</a></div>
          <div className="perm_item"><a href="#services">Services</a></div>
          <div className="perm_item"><a href="#portfolio">Portfolio</a></div>
          <div className="perm_item"><a href="#contact">Contact Me</a></div>
        </div>

        <div className="socials_link">
          <div className="perm_item"><a href="http://facebook.com/rimel.hossain" target="_blank" rel="noopener noreferrer"><AiFillFacebook/></a></div>
          <div className="perm_item"><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a></div>
          <div className="perm_item"><a href="http://github.com" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a></div>
        </div>

        <div className="copyright">
          <small>@copyright All rights reserved to Akber  Hossain</small>
        </div>

      </div>
    </section>
  )
}

export default Footer