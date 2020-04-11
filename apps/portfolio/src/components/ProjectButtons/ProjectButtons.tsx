import React from 'react'

import { PrevIcon, NextIcon } from '../../SVGs'

export interface ProjectButtonsProps {
  renderPrev: () => void
  renderNext: () => void
}

export const ProjectButtons = ({
  renderNext,
  renderPrev,
}: ProjectButtonsProps) => (
  <div className='projects__buttons'>
    <button
      type='button'
      className='btn__secondary'
      onClick={renderPrev}
      aria-label='Previous'
    >
      <PrevIcon height='48' width='48' />
    </button>
    <button
      type='button'
      className='btn__secondary'
      onClick={renderNext}
      aria-label='Next'
    >
      <NextIcon height='48' width='48' />
    </button>
  </div>
)
