import React from 'react'

import { Contact, ContactProps } from './Contact'

import contact from '@portfolio/lang/contact.json'
import { render } from '@portfolio/test-utils'

const setupContact = (props?: ContactProps) => render(<Contact {...props} />)

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
