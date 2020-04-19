import React from 'react'
import { TechList } from './TechList'
import { withThemeProvider } from '@portfolio/utils'

export default {
  title: 'portfolio/components/TechList',
  component: TechList,
  decorators: [withThemeProvider],
}

export const normal = () => (
  <TechList technologies={['JavaScript', 'ReactJS', 'Redux']} />
)
