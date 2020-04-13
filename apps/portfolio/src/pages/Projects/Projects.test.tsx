import React from 'react'
import { render, fireEvent } from '@portfolio/test-utils'

import { projects } from '@portfolio/lang/projects.json'
import { Projects, ProjectsProps } from './Projects'

const defaultProjects = projects.slice(0, 2)
const setupProjects = (
  props: ProjectsProps = {
    isEnglish: true,
    projects: defaultProjects,
  }
) => {
  return render(<Projects {...props} />)
}

describe('<Projects />', () => {
  it('should render first project', () => {
    const { getByText } = setupProjects()

    expect(getByText(defaultProjects[0].name)).toBeInTheDocument()
  })
  it('should render next project', () => {
    const { getByLabelText, getByText } = setupProjects()

    fireEvent.click(getByLabelText('Next'))

    expect(getByText(defaultProjects[1].name)).toBeInTheDocument()
  })
  it('should render loop through projects when clicking next', () => {
    const { getByLabelText, getByText } = setupProjects()

    fireEvent.click(getByLabelText('Next'))
    fireEvent.click(getByLabelText('Next'))

    expect(getByText(defaultProjects[0].name)).toBeInTheDocument()
  })
  it('should render previous project', () => {
    const { getByLabelText, getByText } = setupProjects()

    fireEvent.click(getByLabelText('Previous'))

    expect(
      getByText(defaultProjects[defaultProjects.length - 1].name)
    ).toBeInTheDocument()
  })
  it('should render loop through projects when clicking previous', () => {
    const { getByLabelText, getByText } = setupProjects()

    fireEvent.click(getByLabelText('Previous'))
    fireEvent.click(getByLabelText('Previous'))

    expect(getByText(defaultProjects[0].name)).toBeInTheDocument()
  })
})
