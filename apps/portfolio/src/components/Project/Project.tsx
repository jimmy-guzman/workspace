import React from 'react'

import { DemoIcon, GithubIcon } from '@portfolio/SVGs'
import { ProgressBar } from '../ProgressBar'
import { TechList } from '../TechList'

export interface Project {
  name: string
  url: string
  repo: string
  description: string
  spanish: string
  tech: string[]
}

export interface ProjectProps {
  loadingProjectImage: boolean
  onProjectImageLoaded: () => void
  isEnglish: boolean
  project: Project
}

export const Project = ({
  project,
  isEnglish,
  onProjectImageLoaded,
  loadingProjectImage,
}: ProjectProps) => {
  const imgixUrl = `https://jimmy-guzman.imgix.net/project-screenshots/`
  const imgParams = `png?w=400?fm=png&auto=format`
  const imgUrl = `${imgixUrl + project.repo}.${imgParams}`

  return (
    <div className='project grid__row'>
      <div className='project__image card'>
        <div className='project__bar'>
          <span>{project.name}</span>
          <div className='project__links'>
            <a
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Demo'
            >
              <DemoIcon height='24' width='24' />
            </a>
            <a
              href={`https://github.com/jimmy-guzman/${project.repo}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Repo'
            >
              <GithubIcon height='24' width='24' />
            </a>
          </div>
        </div>
        {loadingProjectImage && <ProgressBar />}
        <img
          style={{ ...(loadingProjectImage && { visibility: 'hidden' }) }}
          onLoad={onProjectImageLoaded}
          alt={`${project.name}`}
          srcSet={`${imgUrl} 1x,
        ${imgUrl}&fit=max&q=40&dpr=2 2x,
        ${imgUrl}&fit=max&q=20&dpr=3 3x`}
          src={`${imgUrl}`}
        />
        <div className='project__info'>
          <TechList technologies={project.tech} />
          <p className='project__desc'>
            {isEnglish ? project.description : project.spanish}
          </p>
        </div>
      </div>
    </div>
  )
}
