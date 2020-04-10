import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

export const withMockRouter = (children: React.ReactNode) => {
  const history = createMemoryHistory()

  return (
    <Router history={history}>
      {typeof children === 'function' ? children() : children}
    </Router>
  )
}
