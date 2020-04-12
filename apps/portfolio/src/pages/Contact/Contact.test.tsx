import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

import { Contact, ContactProps } from './Contact'

import contact from '@portfolio/lang/contact.json'

const setupContact = (props?: ContactProps) => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <Contact {...props} />
    </Router>
  )
}

describe('<Contact />', () => {
  it('should render english content', () => {
    const { getByText } = setupContact()

    expect(getByText(contact.english)).toBeInTheDocument()
  })
  it('should render snapshot with not isEnglish', () => {
    const { getByText } = setupContact({ isEnglish: false })

    expect(getByText(contact.spanish)).toBeInTheDocument()
  })
})
