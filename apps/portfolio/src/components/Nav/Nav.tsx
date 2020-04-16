import React from 'react'

import { Styled } from './Nav.styles'
import { NavLink } from 'react-router-dom'
import { Link } from '../Link'

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
  { link: '/contact', name: 'Contact', spanish: 'Contacto' },
]

export const Nav = ({ isEnglish = true, links = defaultLinks }: NavProps) => (
  <Styled.Nav>
    {links.map(({ link, name, spanish }) => (
      <Link color='primary' size='big' as={NavLink} to={link} key={link}>
        {isEnglish ? name : spanish}
      </Link>
    ))}
  </Styled.Nav>
)
