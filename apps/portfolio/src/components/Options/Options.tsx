import React from 'react'
import { NavLink } from 'react-router-dom'

import { Styled } from '../Button'

import './Options.scss'

export interface OptionsProps {
  isEnglish?: boolean
  updateLang: (lang: string) => void
  activeRoute?: string
}

export const Options = ({
  isEnglish,
  updateLang,
  activeRoute = '/',
}: OptionsProps) => (
  <div className='options'>
    <NavLink
      exact
      to={activeRoute}
      className='home-link'
      activeClassName='active-home'
    >
      Jimmy Guzman
    </NavLink>
    <div className='options__lang'>
      <Styled.Button
        primary
        active={!isEnglish}
        onClick={() => updateLang('spanish')}
      >
        SP
      </Styled.Button>
      <Styled.Button
        primary
        active={isEnglish}
        onClick={() => updateLang('english')}
      >
        ENG
      </Styled.Button>
    </div>
  </div>
)
