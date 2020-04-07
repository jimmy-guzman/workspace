import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

import { Contact, ContactProps } from './Contact'

const setupContact = (props?: ContactProps) => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <Contact {...props} />
    </Router>
  )
}

describe('<Contact />', () => {
  it('should render default snapshot', () => {
    const { container } = setupContact()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render snapshot with not isEnglish', () => {
    const { container } = setupContact({ isEnglish: false })

    expect(container.firstChild).toMatchSnapshot()
  })
})
