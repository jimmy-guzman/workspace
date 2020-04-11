import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { projects as defaultProjects } from '../../lang/projects.json'
import { Projects, ProjectsProps } from './Projects'

const setupProjects = (
  props: ProjectsProps = {
    isEnglish: true,
    projects: defaultProjects,
  }
) => {
  return render(<Projects {...props} />)
}

describe('<Projects />', () => {
  it('should render english snapshot', () => {
    const { container } = setupProjects()

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render spanish snapshot', () => {
    const { container } = setupProjects({
      isEnglish: false,
      projects: defaultProjects,
    })

    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render next project', () => {
    const { getByLabelText, getByText } = setupProjects()

    fireEvent.click(getByLabelText('Next'))

    expect(getByText(defaultProjects[1].name)).toBeInTheDocument()
  })
  it('should render previous project', () => {
    const { getByLabelText, getByText } = setupProjects()

    fireEvent.click(getByLabelText('Previous'))

    expect(
      getByText(defaultProjects[defaultProjects.length - 1].name)
    ).toBeInTheDocument()
  })
})
