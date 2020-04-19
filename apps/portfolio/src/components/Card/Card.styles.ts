import styled from 'styled-components'
import { em } from '@portfolio/utils'

const Card = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: ${em('0px 10px 20px -5px')} rgba(0, 0, 0, 0.8);
  padding: 1em;
  margin-bottom: 1em;
`

export const Styled = { Card }
