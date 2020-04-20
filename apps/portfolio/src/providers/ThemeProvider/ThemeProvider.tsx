import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'

import { dark } from './theme'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider theme={dark}>{children}</Provider>
)
