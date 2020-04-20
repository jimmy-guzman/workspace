import styled from 'styled-components'

import { em, flex } from '@portfolio/utils'

const Nav = styled.nav`
  background: ${({ theme }) => theme.background.app};
  width: 100%;
  height: ${em('74px')};
  ${flex('flex', 'row', 'space-around', 'center')}
`

export const Styled = { Nav }
