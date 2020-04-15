import React from 'react'
import { Styled } from './Badge.styles'
import { withThemeProvider } from '@portfolio/utils'

export default {
  title: 'portfolio/components/Badge',
  component: Styled.Badge,
  decorators: [withThemeProvider],
}

export const basic = () => <Styled.Badge>Basic</Styled.Badge>
