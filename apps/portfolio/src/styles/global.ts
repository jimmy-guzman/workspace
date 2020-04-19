import { createGlobalStyle, css } from 'styled-components'

import { fontFamily, fontSize, letterSpacing } from './typography'

export const bodyStyles = css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${({ theme }) => theme.colors.secondary};
  h1,
  h2 {
    margin: 0;
  }
  p {
    letter-spacing: ${letterSpacing.regular};
  }
`

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`
