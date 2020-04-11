import React from 'react'
import { render } from '@testing-library/react'

import { withMockRouter } from '../../utils'
import { Nav, NavProps, defaultLinks } from './Nav'

const setupNav = (props?: Pick<NavProps, 'isEnglish'>) => {
  return render(withMockRouter(<Nav {...props} links={defaultLinks} />))
}

describe('<Nav />', () => {
  it('should render default snapshot', () => {
    const { container } = setupNav()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render snapshot with not isEnglish', () => {
    const { container } = setupNav({
      isEnglish: false,
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
