import React from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.scss'

export interface Links {
  link: string
  name: string
  spanish: string
}
export interface NavProps {
  isEnglish?: boolean
  links?: Links[]
}
export const defaultLinks: Links[] = [
  { link: '/about', name: 'About', spanish: 'Sobre Mi' },
  { link: '/projects', name: 'Projects', spanish: 'Proyectos' },
  { link: '/contact', name: 'Contact', spanish: 'Contacto' }
]

export const Nav = ({ isEnglish = true, links = defaultLinks }: NavProps) => (
  <nav className='main-nav'>
    {links.map(({ link, name, spanish }) => (
      <NavLink to={link} key={link}>
        {isEnglish ? name : spanish}
      </NavLink>
    ))}
  </nav>
)
