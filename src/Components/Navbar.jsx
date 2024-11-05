import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex gap-5'>
      <NavLink className="" to ='/'>
        Home
      </NavLink>
      <NavLink className="" to ='/paste'>
        Vies  Pastes
      </NavLink>
    </nav>
  )
}

export default Navbar
