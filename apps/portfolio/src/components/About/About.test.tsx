import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

import { About, AboutProps } from './About'

const setupAbout = (props?: AboutProps) => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <About {...props} />
    </Router>
  )
}

describe('<About />', () => {
  it('should render default snapshot', () => {
    const { container } = setupAbout()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render snapshot with not isEnglish', () => {
    const { container } = setupAbout({ isEnglish: false })

    expect(container.firstChild).toMatchSnapshot()
  })
})
