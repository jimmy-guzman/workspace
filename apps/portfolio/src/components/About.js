import React from 'react'
import PropTypes from 'prop-types'
import about from '../data/about.json'

import TechList from './TechList'

const About = ({ isEnglish }) => (
  <main className='light'>
    <section className='about grid__row'>
      <div className='card grid__col--6'>
        <h1>{isEnglish ? 'About Me:' : 'Sobre Mi:'}</h1>
        <p>{isEnglish ? about.summary : about.summarySpanish}</p>
      </div>
      <div className='card grid__col--6'>
        <h1>{isEnglish ? 'Skills:' : 'Habilidades:'}</h1>
        <TechList techs={about.skills} />
      </div>
    </section>
  </main>
)

About.propTypes = {
  isEnglish: PropTypes.bool.isRequired
}

export default About
