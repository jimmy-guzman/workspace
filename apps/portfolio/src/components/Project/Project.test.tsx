import React from 'react'
import { render, fireEvent } from '../../test-utils'

import { Project, ProjectProps } from './Project'

const mockOnProjectImageLoaded = jest.fn()
const defaulProps = {
  loadingProjectImage: false,
  onProjectImageLoaded: mockOnProjectImageLoaded,
  isEnglish: true,
  project: {
    name: 'name',
    url: 'url',
    repo: 'repo',
    description: 'description',
    spanish: 'spanish',
    tech: ['react', 'typescript', 'webpack'],
  },
}

const setupProject = (props: ProjectProps = defaulProps) => {
  return render(<Project {...props} />)
}

describe('<Project />', () => {
  it('should have english description', () => {
    const { getByText } = setupProject()

    expect(getByText(defaulProps.project.description)).toBeInTheDocument()
  })
  it('should have spanish description', () => {
    const { getByText } = setupProject({ ...defaulProps, isEnglish: false })

    expect(getByText(defaulProps.project.spanish)).toBeInTheDocument()
  })
  it('should call onProjectImageLoaded when image renders', () => {
    const { getByAltText } = setupProject()

    fireEvent(getByAltText('name'), new Event('load'))

    expect(mockOnProjectImageLoaded).toHaveBeenCalledTimes(1)
  })
  it('should contain image with no visiblity when image is not loaded', () => {
    const { getByAltText } = setupProject({
      ...defaulProps,
      loadingProjectImage: true,
    })

    expect(getByAltText('name')).toHaveStyle('visibility: hidden')
  })
})
