import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'

import { TechList, TechListProps } from './TechList'

const setupTechList = (
  props: TechListProps = {
    technologies: ['JavaScript', 'ReactJS', 'Redux'],
  }
) => {
  const history = createMemoryHistory()

  return render(
    <Router history={history}>
      <TechList {...props} />
    </Router>
  )
}

describe('<TechList />', () => {
  it('should render default snapshot', () => {
    const { container } = setupTechList()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render snapshot with not isEnglish', () => {
    const { container } = setupTechList()

    expect(container.firstChild).toMatchSnapshot()
  })
})
