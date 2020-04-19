import styled, { DefaultTheme } from 'styled-components'
import { em, flex } from '@portfolio/utils'

export interface ListProps {
  centered?: boolean
  theme: DefaultTheme
}

const List = styled.ul<ListProps>`
  list-style: none;
  padding: 0;
  /* TODO: revisit color for dark/light theme */
  color: ${({ theme }) => theme.colors.tertiary};
  text-align: ${({ centered }) => (centered ? 'center' : undefined)};
  font-family: ${({ theme }) => theme.font.family};
  ${({ centered }) =>
    flex(
      centered ? 'flex' : 'block',
      centered ? 'wrap' : undefined,
      centered ? 'center' : undefined
    )}
`

const ListItem = styled.li<ListProps>`
  margin: ${em('6px')};
`

export const Styled = { List, ListItem }
