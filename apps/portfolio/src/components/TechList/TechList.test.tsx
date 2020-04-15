import React from 'react'
import { TechList, TechListProps } from './TechList'
import { render } from '@portfolio/test-utils'

const setupTechList = (
  props: TechListProps = {
    technologies: ['JavaScript', 'ReactJS', 'Redux'],
  }
) => render(<TechList {...props} />)

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
