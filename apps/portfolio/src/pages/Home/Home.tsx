import React from 'react'
import { Title } from '@portfolio/components'
import { homeLang } from '@portfolio/lang'

export interface HomeProps {
  isEnglish?: boolean
}

export const Home = ({ isEnglish = true }: HomeProps) => (
  <Title isEnglish={isEnglish} lang={homeLang.title} />
)
