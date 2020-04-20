import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '../Button'
import { Styled } from './Options.styles'

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
  <Styled.Options>
    <Styled.HomeLink
      color='secondary'
      as={({ ...props }) => (
        <NavLink
          exact
          activeClassName='active-home'
          to={activeRoute}
          {...props}
        >
          Jimmy Guzman
        </NavLink>
      )}
    />
    <div>
      <Button
        secondary
        active={!isEnglish}
        onClick={() => updateLang('spanish')}
      >
        SP
      </Button>
      <Button
        secondary
        active={isEnglish}
        onClick={() => updateLang('english')}
      >
        ENG
      </Button>
    </div>
  </Styled.Options>
)
