import styled from 'styled-components'

import { LinkProps } from './interfaces'
import { em } from '@portfolio/utils'
import { setLinkColor, setLinkFill } from './helpers'
import { withDefaultProps } from '../../ts-utils'

/**
 * - Use a `<Link />` to customize anchor elements.
 * - This also supports `react-router-dom`'s `<NavLink />` by using `as`
 **/
export const Link = withDefaultProps(
  { color: 'default', size: 'default' },
  styled.a<LinkProps>`
    font-family: ${({ theme }) => theme.font.family};
    text-decoration: none;
    color: ${setLinkColor};
    fill: ${setLinkFill};
    font-size: ${({ size }) => (size === 'big' ? em('24px') : 'inherit')};
    &:hover {
      color: ${props => setLinkColor(props, true)};
      fill: ${props => setLinkFill(props, true)};
      cursor: pointer;
    }
    &:active,
    &.active {
      color: ${props => setLinkColor(props, true)};
      fill: ${props => setLinkFill(props, true)};
    }
  `
)

export const Styled = { Link }
