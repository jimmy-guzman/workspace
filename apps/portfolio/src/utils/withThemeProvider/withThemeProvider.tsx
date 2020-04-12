import React from 'react'
import { ThemeProvider } from '../../providers'

export const withThemeProvider = (children: React.ReactNode) => {
  return (
    <ThemeProvider>
      {typeof children === 'function' ? children() : children}
    </ThemeProvider>
  )
}
