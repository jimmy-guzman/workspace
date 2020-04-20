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
        background: #80CBC4;
        border-radius: 0.17em;
        color: #263238;
        padding: 0.28em;
      }

      <span
        class="c0"
      >
        Badge
      </span>
    `)
  })
})
