import styled from 'styled-components'

export const List = styled.ul`
  font-family: ${({ theme }) => theme.font.family};
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`

export const Styled = { List }
