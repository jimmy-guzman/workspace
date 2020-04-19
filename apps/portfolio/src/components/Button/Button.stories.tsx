import React from 'react'

import { withThemeProvider } from '@portfolio/utils'
import { Button } from './Button'

export default {
  title: 'portfolio/components/Button',
  component: Button,
  decorators: [withThemeProvider],
}

export const basic = () => <Button>Basic</Button>
export const primary = () => <Button primary>Primary</Button>
export const secondary = () => <Button secondary>Secondary</Button>
