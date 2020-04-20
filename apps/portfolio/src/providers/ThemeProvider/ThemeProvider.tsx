import React, { createContext, useContext, useState } from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import { light, dark, Theme } from './theme'

interface IThemeContext {
  theme: Theme
  toggleTheme: (themeName: string) => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(dark)

  const toggleTheme = (themeName: string): void => {
    if (themeName === dark.name) setTheme(dark)
    if (themeName === light.name) setTheme(light)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
