import React, { useState } from 'react'
import { AiOutlineContacts, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FaRegListAlt } from 'react-icons/fa'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href='#' className={activeNav === '#' ? 'active' : ''} onClick={() => {setActiveNav('#')}} ><AiOutlineHome/></a>
      <a href='#about' className={activeNav === '#about' ? 'active' : ''} onClick={() => {setActiveNav('#about')}}><AiOutlineUser/></a>
      <a href='#experience' className={activeNav === '#experience' ? 'active' : ''} onClick={() => {setActiveNav('#experience')}}><MdOutlineLibraryBooks/></a>
      <a href='#services' className={activeNav === '#services' ? 'active' : ''} onClick={() => {setActiveNav('#services')}}><FaRegListAlt/></a>
      <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => {setActiveNav('#contact')}}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav