import emailjs from 'emailjs-com'
import React, { useRef } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import './contact.css'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fg4yj9j', 'template_ah2uzn2', form.current, 'bOQ0Oq4RtO7pZlvm9')
      .then((result) => {
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="left_items">
        <div className="left_item">
            <AiOutlineMail/>
            <h5>Email</h5>
            <p>akberhossain890@gmail.com</p>
            <a href="mailto:akberhossain890@gmail.com">Send a Message</a>
          </div>

          <div className="left_item">
            <RiMessengerLine/>
            <h5>Messanger</h5>
            <p>Md Akber Hossain</p>
            <a target='_blank' href="https://m.me/rimel.hossain" rel="noreferrer">Send a Message</a>
          </div>

          <div className="left_item">
            <BsWhatsapp/>
            <h5>Whatsapp</h5>
            <p>+4746567512</p>
            <a target='_blank' href="https://api.whatsapp.com/send?phone=+4746567512" rel="noreferrer">Send a Message</a>
          </div>
        </div>
        <div className="right_items">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="text" name='email' placeholder='Your Email Address' required/>
            <textarea rows="10" name='message' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact