import React from 'react'
import { TechList } from './TechList'

export default {
  title: 'portfolio/components/TechList',
  component: TechList,
}

export const normal = () => (
  <TechList technologies={['JavaScript', 'ReactJS', 'Redux']} />
)
