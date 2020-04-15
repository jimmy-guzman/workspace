import React from 'react'
import { render } from '@portfolio/test-utils'

import { Styled, ListProps } from './List.syles'
import { theme } from '@portfolio/providers'

const setupList = (props?: ListProps) => {
  return render(
    <Styled.List {...props}>
      <Styled.ListItem>List Item</Styled.ListItem>
    </Styled.List>
  )
}

describe('<Styled.List />', () => {
  it('should render List with default styles', () => {
    const { container } = setupList()

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        list-style: none;
        padding: 0;
        color: #292b2f;
        font-family: 'Oswald',Impact,'Franklin Gothic Bold',sans-serif;
        display: block;
      }

      .c1 {
        margin: 0.3333333333333333em;
      }

      <ul
        class="c0"
      >
        <li
          class="c1"
        >
          List Item
        </li>
      </ul>
    `)
  })
  it('should render List with centerd styles', () => {
    const { container } = setupList({ centered: true, theme })

    expect(container.firstChild).toHaveStyle({
      'text-align': 'center',
      display: 'flex',
      'flex-flow': 'wrap',
      'justify-content': 'center',
    })
  })
})
