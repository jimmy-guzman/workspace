import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { StyleSheetManager } from 'styled-components'
import { createMemoryHistory } from 'history'

import { ThemeProvider } from './providers'

const Providers: React.ComponentType<{ route?: string }> = ({
  children,
  route,
}: {
  route?: string
  children?: React.ReactNode
}) => {
  const history = createMemoryHistory()

  if (route) {
    history.push(route)
  }

  return (
    <StyleSheetManager disableVendorPrefixes>
      <Router history={history}>
        <ThemeProvider>{children}</ThemeProvider>
      </Router>
    </StyleSheetManager>
  )
}

Providers.displayName = 'ss'

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
  route?: string
) => {
  const wrapper: React.ComponentType = ({
    children,
  }: {
    children?: React.ReactNode
  }) => <Providers route={route}>{children}</Providers>

  return render(ui, { wrapper, ...options })
}

export * from '@testing-library/react'

export { customRender as render }
