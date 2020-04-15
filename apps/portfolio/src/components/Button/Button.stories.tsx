import React from 'react'
import { Styled } from './Button.styles'
import { withThemeProvider } from '@portfolio/utils'

export default {
  title: 'portfolio/components/Button',
  component: Styled.Button,
  decorators: [withThemeProvider],
}

export const basic = () => <Styled.Button>Basic</Styled.Button>
export const primary = () => <Styled.Button primary>Primary</Styled.Button>
export const secondary = () => (
  <Styled.Button secondary>Secondary</Styled.Button>
)
