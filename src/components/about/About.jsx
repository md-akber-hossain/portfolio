import React from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import ME from '../../assets/me-about.jpg'
import './about.css'

const About = () => {
  return (
    <section id="about" className='container'>
      <h5>About Me</h5>
      <h2>About Me</h2>

      <div className="about__container">
        <div className="about-me-image">
          <img src={ME} alt="about-me-image" />
        </div>

        <div className="about-me-content">
          <div className="apply_cards">
            <div className="apply_card">
              <div className="about-me-icon"><FaRegLightbulb/></div>
              <p>3+ years</p>
              <p>of fullstack experience</p>
            </div>

            <div className="apply_card">
              <div className="about-me-icon"><FaRegLightbulb/></div>
              <p>3+ years</p>
              <p>of fullstack experience</p>
            </div>

            <div className="apply_card">
              <div className="about-me-icon"><FaRegLightbulb/></div>
              <p>3+ years</p>
              <p>of fullstack experience</p>
            </div>
          </div>

          <div className='par'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit dolore cupiditate ut quasi dolor eaque libero vel quia assumenda vitae at illum totam quo eos unde hic similique, ullam cum.</div>
        
          <div className="btn btn-primary">Let's Talk</div>
        </div>
      </div>
    </section>
  )
}

export default About