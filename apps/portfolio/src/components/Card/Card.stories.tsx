import React from 'react'
import { withThemeProvider } from '../../utils'
import { Card } from './Card'
import { GlobalStyle } from '@portfolio/styles'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'portfolio/components/Card ',
  component: Card,
  decorators: [
    withA11y,
    (storyFn: () => React.ReactNode) => (
      <>
        <GlobalStyle />
        {storyFn()}
      </>
    ),
    withThemeProvider,
  ],
}

export const basic = () => (
  <Card>
    <div>Basic Card</div>
  </Card>
)
