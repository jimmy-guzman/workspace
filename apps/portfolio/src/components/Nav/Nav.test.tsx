import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

import { Nav, NavProps } from './Nav'

const setupNav = (props?: NavProps) => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <Nav {...props} />
    </Router>
  )
}

describe('<Nav />', () => {
  it('should render default snapshot', () => {
    const { container } = setupNav()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render snapshot with not isEnglish', () => {
    const { container } = setupNav({ isEnglish: false })

    expect(container.firstChild).toMatchSnapshot()
  })
})
