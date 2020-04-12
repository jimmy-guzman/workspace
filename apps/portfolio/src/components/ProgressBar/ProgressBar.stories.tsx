import React from 'react'
import { ProgressBar } from './ProgressBar'
import { withThemeProvider } from '../../utils'

export default {
  title: 'portfolio/components/ProgressBar',
  component: ProgressBar,
  decorators: [withThemeProvider],
}

export const normal = () => <ProgressBar />
