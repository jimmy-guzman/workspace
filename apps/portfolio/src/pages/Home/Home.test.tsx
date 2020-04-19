import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { Home, HomeProps } from './Home'
import { render } from '@portfolio/test-utils'

const setupHome = (props?: HomeProps) => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <Home {...props} />
    </Router>
  )
}

describe('<Home />', () => {
  it('should render english text', () => {
    const { getByText } = setupHome()

    expect(getByText(/Hi, I'm Jimmy/)).toBeInTheDocument()
    expect(getByText(/I'm a Web Developer/)).toBeInTheDocument()
  })
  it('should render snapshot with not isEnglish', () => {
    const { getByText } = setupHome({ isEnglish: false })

    expect(getByText('Hola, Soy Jimmy')).toBeInTheDocument()
    expect(getByText('Soy un Desarrollador de Web')).toBeInTheDocument()
  })
})
