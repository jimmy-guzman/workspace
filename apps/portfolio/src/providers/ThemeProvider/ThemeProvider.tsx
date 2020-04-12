import React from 'react'

import { ThemeProvider as Provider } from 'styled-components'
import { theme } from './theme'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider theme={theme}>{children}</Provider>
)
