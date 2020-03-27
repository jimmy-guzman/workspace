import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Nav = ({ isEnglish }) => (
  <nav className='main-nav'>
    <NavLink to='/about'>{isEnglish ? 'About' : 'Sobre Mi'}</NavLink>
    <NavLink to='/projects'>{isEnglish ? 'Projects' : 'Proyectos'}</NavLink>
    <NavLink to='/contact'>{isEnglish ? 'Contact' : 'Contacto'}</NavLink>
  </nav>
)

Nav.propTypes = {
  isEnglish: PropTypes.bool.isRequired
}

export default Nav
