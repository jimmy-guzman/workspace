import { createGlobalStyle, css } from 'styled-components'

import { fontFamily, fontSize, letterSpacing } from './typography'
import { em, flex, mq } from '@portfolio/utils'

export const bodyStyles = css`
  font-family: ${fontFamily};
  font-size: 14px;
  @media (min-width: ${mq('small')}) {
    font-size: ${fontSize};
  }
  color: ${({ theme }) => theme.font.color};
  background: ${({ theme }) => theme.background.app};
  h1,
  h2 {
    margin: 0;
  }
  p {
    letter-spacing: ${letterSpacing.regular};
  }
`

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    ${bodyStyles}
  }
  main {
    height: 100%;
    width: 100%;
    ${flex('flex', 'column', 'center', 'center')}
    background: ${({ theme }) => theme.background.section};
  }
  .wrapper {
    height: 100%;
    ${flex('flex', 'column', 'space-between', 'center')}
}
`
