import React from 'react'
import { AiOutlineFileDone } from 'react-icons/ai'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Know</h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="end__container">
          <h2>Frontend Development</h2>
          <div className="ex_items">
            
            <div className='item_row'>
            <div className="ex_item">
              <AiOutlineFileDone/>
              <div className="ex_item_content">
                <p>HTML</p>
                <small>Experienced</small>
              </div>
            </div>
            <div className="ex_item">
              <AiOutlineFileDone/>
              <div className="ex_item_content">
                <p>HTML</p>
                <small>Experienced</small>
              </div>
            </div>
            </div>
            
            <div  className='item_row'>
            <div className="ex_item">
              <AiOutlineFileDone/>
              <div className="ex_item_content">
                <p>HTML</p>
                <small>Experienced</small>
              </div>
            </div>
            
            </div>

          </div>
        </div>
        <div className="end__container">
          <h2>Backend Development</h2>
          <div className="ex_items">
            
            <div  className='item_row'>
            <div className="ex_item">
              <AiOutlineFileDone/>
              <div className="ex_item_content">
                <p>HTML</p>
                <small>Experienced</small>
              </div>
            </div>
            <div className="ex_item">
              <AiOutlineFileDone/>
              <div className="ex_item_content">
                <p>HTML</p>
                <small>Experienced</small>
              </div>
            </div>
            </div>
            
            <div  className='item_row'>
            <div className="ex_item">
              <AiOutlineFileDone/>
              <div className="ex_item_content">
                <p>HTML</p>
                <small>Experienced</small>
              </div>
            </div>
            
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience