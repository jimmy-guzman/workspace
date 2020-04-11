import React, { useState } from 'react'

import { projects as defaultProjects } from '../../lang/projects.json'
import { Project, ProjectButtons } from '../../components'

export interface ProjectsProps {
  isEnglish: boolean
  projects: Project[]
}

export const Projects = ({
  isEnglish,
  projects = defaultProjects
}: ProjectsProps) => {
  const [projectIndex, setProjectIndex] = useState<number>(0)
  const [loadingProjectImage, setLoadingProjectImage] = useState<boolean>(true)

  const renderNext = () => {
    setProjectIndex(prevState => {
      return prevState === projects.length - 1 ? 0 : (prevState += 1)
    })
    setLoadingProjectImage(true)
  }

  const renderPrev = () => {
    setProjectIndex(prevState => {
      if (prevState === projects.length - 1) {
        return 0
      }

      return projectIndex === 0 ? projects.length - 1 : (prevState += 1)
    })
    setLoadingProjectImage(true)
  }

  const onProjectImageLoaded = () => {
    setLoadingProjectImage(false)
  }

  return (
    <main className='light'>
      <section className='projects grid__row'>
        <Project
          loadingProjectImage={loadingProjectImage}
          project={projects[projectIndex]}
          isEnglish={isEnglish}
          onProjectImageLoaded={onProjectImageLoaded}
        />
        <ProjectButtons renderNext={renderNext} renderPrev={renderPrev} />
      </section>
    </main>
  )
}
