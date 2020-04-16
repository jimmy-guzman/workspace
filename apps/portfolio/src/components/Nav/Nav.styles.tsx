import styled from 'styled-components'

import { em } from '@portfolio/utils'

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
  height: ${em('74px')};
  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;
`

export const Styled = { Nav }
