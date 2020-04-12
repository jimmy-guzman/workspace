import React from 'react'

import aboutLang from '@portfolio/lang/about.json'
import { TechList } from '@portfolio/components'

export interface AboutProps {
  isEnglish?: boolean
}

export const About = ({ isEnglish = true }: AboutProps) => (
  <main className='light'>
    <section className='about grid__row'>
      <div className='card grid__col--6'>
        <h1>{isEnglish ? 'About Me:' : 'Sobre Mi:'}</h1>
        <p>{isEnglish ? aboutLang.summary : aboutLang.summarySpanish}</p>
      </div>
      <div className='card grid__col--6'>
        <h1>{isEnglish ? 'Skills:' : 'Habilidades:'}</h1>
        <TechList technologies={aboutLang.skills} />
      </div>
    </section>
  </main>
)
