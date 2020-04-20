import React from 'react'
import { Title } from '@portfolio/components'
import { homeLang } from '@portfolio/lang'
import { StyledHomeWrapper } from './Home.styles'

export interface HomeProps {
  isEnglish?: boolean
}

export const Home = ({ isEnglish = true }: HomeProps) => (
  <StyledHomeWrapper>
    <Title isEnglish={isEnglish} lang={homeLang.title} />
  </StyledHomeWrapper>
)
