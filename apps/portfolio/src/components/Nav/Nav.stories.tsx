import React from 'react'
import { Nav, defaultLinks } from './Nav'
import { withMockRouter, withThemeProvider } from '../../utils'

export default {
  title: 'portfolio/components/Nav',
  component: Nav,
  decorators: [withMockRouter, withThemeProvider],
}

export const normal = () => <Nav links={defaultLinks} />
export const spanish = () => <Nav links={defaultLinks} isEnglish={false} />
