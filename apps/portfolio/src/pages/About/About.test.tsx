import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

import { About, AboutProps } from './About'
import aboutLang from '@portfolio/lang/about.json'

const setupAbout = (props?: AboutProps) => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <About {...props} />
    </Router>
  )
}

describe('<About />', () => {
  it('should render render english content', () => {
    const { getByText } = setupAbout()

    expect(getByText('About Me:')).toBeInTheDocument()
    expect(getByText(aboutLang.summary)).toBeInTheDocument()
    expect(getByText('Skills:')).toBeInTheDocument()
  })
  it('should render render spanish contennt', () => {
    const { getByText } = setupAbout({ isEnglish: false })

    expect(getByText('Sobre Mi:')).toBeInTheDocument()
    expect(getByText(aboutLang.summarySpanish)).toBeInTheDocument()
    expect(getByText('Habilidades:')).toBeInTheDocument()
  })
  it('should render render tech skills list', () => {
    const { getByText } = setupAbout()

    expect(getByText(aboutLang.skills[0])).toBeInTheDocument()
  })
})
