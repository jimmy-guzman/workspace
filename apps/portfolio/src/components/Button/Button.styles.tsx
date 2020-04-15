import styled from 'styled-components'

import { em } from '@portfolio/utils'
import { ButtonProps } from './interfaces'
import { setButtonColor, setButtonFill, setBackground } from './helpers'

export const Button = styled.button<ButtonProps>`
  background: ${setBackground};
  border: none;
  outline: none;
  font-size: ${em('24px')};
  font-family: ${({ theme }) => theme.font.family};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: ${setButtonColor};
  fill: ${setButtonFill};
  &:hover,
  &:active,
  &:focus {
    color: ${props => setButtonColor(props, true)};
    fill: ${props => setButtonFill(props, true)};
  }
`

export const Styled = { Button }
