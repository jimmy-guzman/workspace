import React from 'react'
import { render } from '@testing-library/react'

import { ProjectButtons, ProjectButtonsProps } from './ProjectButtons'

const setupProjectButtons = (
  props: ProjectButtonsProps = {
    renderPrev: jest.fn(),
    renderNext: jest.fn(),
  }
) => {
  return render(<ProjectButtons {...props} />)
}

describe('<ProjectButtons />', () => {
  it('should render default snapshot', () => {
    const { container } = setupProjectButtons()

    expect(container.firstChild).toMatchSnapshot()
  })
})
