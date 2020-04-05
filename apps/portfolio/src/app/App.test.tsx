import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { App } from './App'

const setupApp = () => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <App />
    </Router>
  )
}

describe('<App />', () => {
  it('should render Home', () => {
    const { container } = setupApp()

    expect(container.innerHTML).toMatch("Hi, I'm Jimmy")
  })
  it('should render About', () => {
    const { container, getByText } = setupApp()

    fireEvent.click(getByText(/About/i))

    expect(container.innerHTML).toMatch('About Me:')
  })
  it('should render Projects', () => {
    const { container, getByText } = setupApp()

    fireEvent.click(getByText(/Projects/i))

    expect(container.innerHTML).toMatch('Recipe Box')
  })
  it('should render Contact', () => {
    const { container, getByText } = setupApp()

    fireEvent.click(getByText(/Contact/i))

    expect(container.innerHTML).toMatch('hello@jimmyguzman.com')
  })
})
