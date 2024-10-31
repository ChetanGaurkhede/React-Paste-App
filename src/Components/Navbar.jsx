import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex gap-5'>
      <NavLink className="" to ='/home'>
        Home
      </NavLink>
      <NavLink className="" to ='/Pastes'>
        Pastes
      </NavLink>
    </nav>
  )
}

export default Navbar
