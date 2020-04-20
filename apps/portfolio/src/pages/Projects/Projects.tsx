import React from 'react'

import { Project, ProjectButtons } from '@portfolio/components'
import { useSlides, TO_SLIDE } from '@portfolio/hooks'

export interface ProjectsProps {
  isEnglish: boolean
  projects: Project[]
}

export const Projects = ({ isEnglish, projects }: ProjectsProps) => {
  const [active, setActive] = useSlides(projects.length)

  return (
    <main>
      <section className='grid__row'>
        <Project project={projects[active]} isEnglish={isEnglish} />
        <ProjectButtons
          renderNext={() => setActive(TO_SLIDE.NEXT)}
          renderPrev={() => setActive(TO_SLIDE.PREVIOUS)}
        />
      </section>
    </main>
  )
}
