import styled from 'styled-components'

import { em } from '@portfolio/utils'

export const Badge = styled.span`
  font-family: ${({ theme }) => theme.font.family};
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${em('3px')};
  color: ${({ theme }) => theme.background.app};
  padding: ${em('5px')};
`

export const Styled = { Badge }
