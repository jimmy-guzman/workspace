import React from 'react'
import { NavLink } from 'react-router-dom'

import './Options.scss'
import { Button } from './Button'

export interface OptionsProps {
  isEnglish?: boolean
  updateLang: (lang: string) => void
  activeRoute?: string
}

export const Options = ({
  isEnglish,
  updateLang,
  activeRoute = '/'
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
      <Button
        className={!isEnglish ? 'btn__primary active' : 'btn__primary'}
        onClick={() => updateLang('spanish')}
      >
        SP
      </Button>
      <Button
        className={isEnglish ? 'btn__primary active' : 'btn__primary'}
        onClick={() => updateLang('english')}
      >
        ENG
      </Button>
    </div>
  </div>
)
