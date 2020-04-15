import React from 'react'

import { PrevIcon, NextIcon } from '@portfolio/SVGs'
import { Styled } from '../Button'

export interface ProjectButtonsProps {
  renderPrev: () => void
  renderNext: () => void
}

export const ProjectButtons = ({
  renderNext,
  renderPrev,
}: ProjectButtonsProps) => (
  <div className='projects__buttons'>
    <Styled.Button
      type='button'
      secondary
      onClick={renderPrev}
      aria-label='Previous'
    >
      <PrevIcon height='48' width='48' />
    </Styled.Button>
    <Styled.Button
      type='button'
      secondary
      onClick={renderNext}
      aria-label='Next'
    >
      <NextIcon height='48' width='48' />
    </Styled.Button>
  </div>
)
