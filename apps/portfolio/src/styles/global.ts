import { createGlobalStyle, css } from 'styled-components'

import { fontFamily, fontSize, letterSpacing } from './typography'
import { em } from '@portfolio/utils'

export const bodyStyles = css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.tertiary};
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
  ::-webkit-scrollbar {
    width: ${em('12px')};
  }
  ::-webkit-scrollbar-track {
    background: inherit;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.tertiary};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
  body {
    ${bodyStyles}
  }
  .wrapper {
  height: 100%;
}
`
