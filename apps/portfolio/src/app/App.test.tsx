import React from 'react'
import { render, fireEvent } from '@portfolio/test-utils'

import { App } from './App'

const setupApp = (route?: string) => render(<App />, {}, route)

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
  it('should render 404', () => {
    const { container } = setupApp('bad-route')

    ;(global as any).window = { location: { pathname: null } }

    expect(container.innerHTML).toMatch(
      '404 Error: URL does not match any existing paths!'
    )
  })
})
