import React from 'react'

import { PrevIcon, NextIcon } from '@portfolio/SVGs'
import { Styled } from '../Button'
import { StyledProjectButtons } from './ProjectButtons.styles'

export interface ProjectButtonsProps {
  renderPrev: () => void
  renderNext: () => void
}

export const ProjectButtons = ({
  renderNext,
  renderPrev,
}: ProjectButtonsProps) => (
  <StyledProjectButtons>
    <Styled.Button
      type='button'
      primary
      onClick={renderPrev}
      aria-label='Previous'
    >
      <PrevIcon height='48' width='48' />
    </Styled.Button>
    <Styled.Button type='button' primary onClick={renderNext} aria-label='Next'>
      <NextIcon height='48' width='48' />
    </Styled.Button>
  </StyledProjectButtons>
)
