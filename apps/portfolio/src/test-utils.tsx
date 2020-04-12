import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { ThemeProvider } from './providers'

const Providers: React.ComponentType = ({
  children,
}: {
  children?: React.ReactNode
}) => {
  const history = createMemoryHistory()

  return (
    <Router history={history}>
      <ThemeProvider>{children}</ThemeProvider>
    </Router>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react'

export { customRender as render }
