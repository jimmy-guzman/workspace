import React, { createContext, useContext, useState, useEffect } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import { light, dark, Theme } from './theme'

interface IThemeContext {
  theme: Theme
  updateTheme: (themeName: string) => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)
const savedThemeKey = `${window.location.host}-jg-theme`

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(dark)

  const updateTheme = (themeName: string): void => {
    if (themeName === dark.name) {
      window.sessionStorage.setItem(savedThemeKey, dark.name)
      setTheme(dark)
    }
    if (themeName === light.name) {
      window.sessionStorage.setItem(savedThemeKey, light.name)
      setTheme(light)
    }
  }

  useEffect(() => {
    const savedThemeName = window.sessionStorage.getItem(savedThemeKey)

    if (savedThemeName) updateTheme(savedThemeName)
  }, [theme.name])

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <ThemeContext.Consumer>
        {value =>
          value ? <Provider theme={value.theme}>{children}</Provider> : null
        }
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  if (!context) throw new Error('useThemeContext must be inside ThemeProvider')

  return context
}
