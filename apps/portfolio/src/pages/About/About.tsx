import React from 'react'

import aboutLang from '@portfolio/lang/about.json'
import { TechList, Card } from '@portfolio/components'

export interface AboutProps {
  isEnglish?: boolean
}

export const About = ({ isEnglish = true }: AboutProps) => (
  <main className='light'>
    <section className='about grid__row'>
      <Card className='grid__col--6'>
        <h1>{isEnglish ? 'About Me:' : 'Sobre Mi:'}</h1>
        <p>{isEnglish ? aboutLang.summary : aboutLang.summarySpanish}</p>
      </Card>
      <Card className='grid__col--6'>
        <h1>{isEnglish ? 'Skills:' : 'Habilidades:'}</h1>
        <TechList technologies={aboutLang.skills} />
      </Card>
    </section>
  </main>
)
