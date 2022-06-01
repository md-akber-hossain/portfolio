import React from 'react'
import port1_img from '../../assets/portfolio1.jpg'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <div className="port_item">
          <div className="port_image">
            <img src={port1_img} alt="" />
          </div>
          <div className="port_item_content">
            <h4>Project Title</h4>
            <div className="port_link">
              <a className='btn' href="">Github</a>
              <a className='btn btn-primary' href="">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="port_item">
          <div className="port_image">
            <img src={port1_img} alt="" />
          </div>
          <div className="port_item_content">
            <h4>Project Title</h4>
            <div className="port_link">
              <a className='btn' href="">Github</a>
              <a className='btn btn-primary' href="">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="port_item">
          <div className="port_image">
            <img src={port1_img} alt="" />
          </div>
          <div className="port_item_content">
            <h4>Project Title</h4>
            <div className="port_link">
              <a className='btn' href="">Github</a>
              <a className='btn btn-primary' href="">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="port_item">
          <div className="port_image">
            <img src={port1_img} alt="" />
          </div>
          <div className="port_item_content">
            <h4>Project Title</h4>
            <div className="port_link">
              <a className='btn' href="">Github</a>
              <a className='btn btn-primary' href="">Live Demo</a>
            </div>
          </div>
        </div>

        <div className="port_item">
          <div className="port_image">
            <img src={port1_img} alt="" />
          </div>
          <div className="port_item_content">
            <h4>Project Title</h4>
            <div className="port_link">
              <a className='btn' href="">Github</a>
              <a className='btn btn-primary' href="">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio