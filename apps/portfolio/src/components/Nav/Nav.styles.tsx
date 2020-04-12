import styled from 'styled-components'
import { NavLink as RouterNavLink } from 'react-router-dom'

import { em } from '@portfolio/utils'

const NavLink = styled(RouterNavLink)`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${em('24px')};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  fill: ${({ theme }) => theme.colors.secondary};
  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
  height: ${em('74px')};
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
`

export const Styled = {
  NavLink,
  Nav,
}
