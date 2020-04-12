import React from 'react'
import { render } from '../../test-utils'

import { ProgressBar } from './ProgressBar'

const setupProgressBar = () => {
  return render(<ProgressBar />)
}

describe('<ProgressBar />', () => {
  it('should render default snapshot', () => {
    const { container } = setupProgressBar()

    expect(container.firstChild).toMatchSnapshot()
  })
})
