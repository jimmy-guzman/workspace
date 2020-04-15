import React from 'react'
import { render } from '@portfolio/test-utils'

import { Styled } from './Badge.styles'

const setupBadge = () => {
  return render(<Styled.Badge>Badge</Styled.Badge>)
}

describe('<Styled.Badge />', () => {
  it('should render Badge with default styles', () => {
    const { container } = setupBadge()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-family: 'Oswald',Impact,'Franklin Gothic Bold',sans-serif;
        display: inline-block;
        background: #d7d5d9;
        border-radius: 0.16666666666666666em;
        color: #292b2f;
        padding: 0.2777777777777778em;
      }

      <span
        class="c0"
      >
        Badge
      </span>
    `)
  })
})
