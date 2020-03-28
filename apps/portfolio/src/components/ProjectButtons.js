import React from 'react'
import PropTypes from 'prop-types'

import NextSVG from './SVGs/NextSVG'
import PrevSVG from './SVGs/PrevSVG'

const ProjectButtons = ({ renderNext, renderPrev }) => (
  <div className='projects__buttons'>
    <button
      type='button'
      className='btn__secondary'
      onClick={renderPrev}
      aria-label='Previous'
    >
      <PrevSVG height='48' width='48' />
    </button>
    <button
      type='button'
      className='btn__secondary'
      onClick={renderNext}
      aria-label='Next'
    >
      <NextSVG height='48' width='48' />
    </button>
  </div>
)

ProjectButtons.propTypes = {
  renderPrev: PropTypes.func.isRequired,
  renderNext: PropTypes.func.isRequired
}

export default ProjectButtons
