import React from 'react'
import { NavLink } from 'react-router-dom'

export interface NavProps {
  isEnglish?: boolean
}

export const Nav = ({ isEnglish = true }: NavProps) => (
  <nav className='main-nav'>
    <NavLink to='/about'>{isEnglish ? 'About' : 'Sobre Mi'}</NavLink>
    <NavLink to='/projects'>{isEnglish ? 'Projects' : 'Proyectos'}</NavLink>
    <NavLink to='/contact'>{isEnglish ? 'Contact' : 'Contacto'}</NavLink>
  </nav>
)
