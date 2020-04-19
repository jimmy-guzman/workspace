import React from 'react'

import { Styled } from './Title.styles'

export interface TitleProps {
  isEnglish: boolean
  lang: {
    spanish: {
      header: string
      subHeader: string
    }
    english: {
      header: string
      subHeader: string
    }
  }
}

export const Title = ({ isEnglish, lang }: TitleProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>
        {isEnglish ? lang.english.header : lang.spanish.header}
      </Styled.Header>
      <Styled.SubHeader>
        {isEnglish ? lang.english.subHeader : lang.spanish.subHeader}
      </Styled.SubHeader>
    </Styled.Wrapper>
  )
}
