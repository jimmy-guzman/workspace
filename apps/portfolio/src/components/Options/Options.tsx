import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button } from '../Button'
import { Styled } from './Options.styles'
import { DayIcon, NightIcon } from '@portfolio/SVGs'
import { useThemeContext, light, dark } from '@portfolio/providers'

export interface OptionsProps {
  isEnglish?: boolean
  updateLang: (lang: string) => void
  activeRoute?: string
}

export const Options = ({
  isEnglish,
  updateLang,
  activeRoute = '/',
}: OptionsProps) => {
  const { theme, updateTheme: toggleTheme } = useThemeContext()
  return (
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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <Button
            secondary
            active={theme.name === light.name}
            onClick={() => toggleTheme(light.name)}
          >
            <DayIcon height='20' width='20' />
          </Button>
          <Button
            secondary
            active={theme.name === dark.name}
            onClick={() => toggleTheme(dark.name)}
          >
            <NightIcon height='20' width='20' />
          </Button>
        </div>
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
      </div>
    </Styled.Options>
  )
}
