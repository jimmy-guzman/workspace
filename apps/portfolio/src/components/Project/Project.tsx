import React, { useState, useEffect } from 'react'

import { DemoIcon, GithubIcon } from '@portfolio/SVGs'
import { ProgressBar } from '../ProgressBar'
import { TechList } from '../TechList'
import {
  StyledProject,
  StyledProjectCard,
  StyledProjectImage,
  StyledProjectLinks,
  StyledProjectLink,
  StyledProjectInfo,
  StyledProjectDesc,
  StyledProjectBar,
  StyledProjectName,
} from './Project.styles'

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
    <StyledProject>
      <StyledProjectCard>
        <StyledProjectBar>
          <StyledProjectName>{project.name}</StyledProjectName>
          <StyledProjectLinks>
            <StyledProjectLink
              color='primary'
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Demo'
            >
              <DemoIcon height='24' width='24' />
            </StyledProjectLink>
            <StyledProjectLink
              color='primary'
              href={`https://github.com/jimmy-guzman/${project.repo}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='View Repo'
            >
              <GithubIcon height='24' width='24' />
            </StyledProjectLink>
          </StyledProjectLinks>
        </StyledProjectBar>
        {loadingImage && <ProgressBar />}
        <StyledProjectImage
          style={{ ...(loadingImage && { visibility: 'hidden' }) }}
          onLoad={() => setLoadingImage(false)}
          alt={`${project.name}`}
          srcSet={`${imgUrl} 1x,
        ${imgUrl}&fit=max&q=40&dpr=2 2x,
        ${imgUrl}&fit=max&q=20&dpr=3 3x`}
          src={`${imgUrl}`}
        />
        <StyledProjectInfo>
          <TechList technologies={project.tech} />
          <StyledProjectDesc>
            {isEnglish ? project.description : project.spanish}
          </StyledProjectDesc>
        </StyledProjectInfo>
      </StyledProjectCard>
    </StyledProject>
  )
}
