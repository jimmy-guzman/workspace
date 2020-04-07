import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

import { Home, HomeProps } from './Home'

const setupHome = (props?: HomeProps) => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <Home {...props} />
    </Router>
  )
}

describe('<Home />', () => {
  it('should render default snapshot', () => {
    const { container } = setupHome()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render snapshot with not isEnglish', () => {
    const { container } = setupHome({ isEnglish: false })

    expect(container.firstChild).toMatchSnapshot()
  })
})
