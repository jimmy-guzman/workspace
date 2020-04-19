import styled from 'styled-components'

import { flex, em } from '@portfolio/utils'
import { Link } from '../Link/Link.styles'

const Options = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  width: 100%;
  ${flex('flex', 'row', 'space-between', 'center')}
`
const HomeLink = styled(Link)`
  padding: ${em('8px')};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  letter-spacing: ${em('3px')};
  max-width: ${em('500px')};
  &.active-home {
    background: inherit;
    color: inherit;
    padding: 0;
    max-width: 0;
    overflow: hidden;
  }
`

export const Styled = { Options, HomeLink }
