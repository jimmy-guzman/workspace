import React, { useState, useEffect } from 'react'

import { DemoIcon, GithubIcon } from '@portfolio/SVGs'
import { ProgressBar } from '../ProgressBar'
import { TechList } from '../TechList'
import { Link } from '../Link'

export interface Project {
  name: string
  url: string
  repo: string
  description: string
  spanish: string
  tech: string[]
}

export interface ProjectProps {
  isEnglish: boolean
  project: Project
}

export const Project = ({ project, isEnglish }: ProjectProps) => {
  const [loadingImage, setLoadingImage] = useState<boolean>(true)
  const imgixUrl = `https://jimmy-guzman.imgix.net/project-screenshots/`
  const imgParams = `png?w=400?fm=png&auto=format`
  const imgUrl = `${imgixUrl + project.repo}.${imgParams}`

  useEffect(() => {
    setLoadingImage(true)
  }, [project])

  return (
    <div className='project grid__row'>
      <div className='project__image card'>
        <div className='project__bar'>
          <span>{project.name}</span>
          <div className='project__links'>
            <Link
              color='primary'
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Demo'
            >
              <DemoIcon height='24' width='24' />
            </Link>
            <Link
              color='primary'
              href={`https://github.com/jimmy-guzman/${project.repo}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Repo'
            >
              <GithubIcon height='24' width='24' />
            </Link>
          </div>
        </div>
        {loadingImage && <ProgressBar />}
        <img
          style={{ ...(loadingImage && { visibility: 'hidden' }) }}
          onLoad={() => setLoadingImage(false)}
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
