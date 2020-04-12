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
  it('should render english text', () => {
    const { getByText } = setupHome()

    expect(getByText(/Hi, I'm Jimmy/)).toMatchSnapshot()
    expect(getByText(/I'm a Web Developer/)).toMatchSnapshot()
  })
  it('should render snapshot with not isEnglish', () => {
    const { getByText } = setupHome({ isEnglish: false })

    expect(getByText('Hola, Soy Jimmy')).toMatchSnapshot()
    expect(getByText('Soy un Desarrollador de Web')).toMatchSnapshot()
  })
})
