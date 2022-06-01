import React from 'react'
import { MdDone } from 'react-icons/md'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <div className="ser_items">
          <div className="ser_item_header">UI/UX Design</div>
          <div className="ser_item">
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
          </div>
        </div>
        <div className="ser_items">
          <div className="ser_item_header">Web Development</div>
          <div className="ser_item">
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
          </div>
        </div>
        <div className="ser_items">
          <div className="ser_item_header">Content Creation</div>
          <div className="ser_item">
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
            <div className="ser_item_content">
              <div className="ser_icon"><MdDone/></div>
              <p>Lorem ipsum dolor sit, amet consecteturt soluta praesentium aperiam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services