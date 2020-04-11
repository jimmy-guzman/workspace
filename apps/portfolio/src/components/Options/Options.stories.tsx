import React from 'react'

import { Options } from './Options'
import { action } from '@storybook/addon-actions'
import { withMockRouter } from '../../utils'

export default {
  title: 'portfolio/components/Options',
  component: Options,
  decorators: [
    (storyFn: () => React.ReactNode) =>
      withMockRouter(storyFn(), window.location.pathname)
  ]
}

export const english = () => (
  <Options isEnglish updateLang={action('updateLang')} />
)
export const spanish = () => (
  <Options isEnglish={false} updateLang={action('updateLang')} />
)
