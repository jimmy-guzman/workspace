import styled from 'styled-components'

const Card = styled.div`
  color: inherit;
  background: ${({ theme }) => theme.background.card};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1em;
  margin-bottom: 1em;
`

export const Styled = { Card }
