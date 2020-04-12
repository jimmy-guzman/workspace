import React from 'react'
import { ThemeProvider } from '@portfolio/providers'

export const withThemeProvider = (children: React.ReactNode) => {
  return (
    <ThemeProvider>
      {typeof children === 'function' ? children() : children}
    </ThemeProvider>
  )
}
