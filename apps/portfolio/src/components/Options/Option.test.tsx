import React from 'react'
import { render, fireEvent } from '@portfolio/test-utils'

import { Options, OptionsProps } from './Options'
import { dark } from '@portfolio/providers'

const mockUpdateLang = jest.fn()

const setupOptions = (props?: Pick<OptionsProps, 'isEnglish'>) => {
  return render(<Options {...props} updateLang={mockUpdateLang} />)
}

describe('<Options />', () => {
  it('should call updateLang with correct language', () => {
    const { getByText } = setupOptions()

    fireEvent.click(getByText('SP'))

    expect(mockUpdateLang).toHaveBeenCalledWith('spanish')

    fireEvent.click(getByText('ENG'))

    expect(mockUpdateLang).toHaveBeenCalledWith('english')
  })
  it('should set correct class when spanish', () => {
    const { getByText } = setupOptions({
      isEnglish: false,
    })

    expect(getByText('ENG')).toHaveStyle(`color: ${dark.colors.secondary}`)
  })
  it('should set correct class when english', () => {
    const { getByText } = setupOptions({
      isEnglish: true,
    })

    expect(getByText('ENG')).toHaveStyle(`color: ${dark.colors.highlight}`)
  })
})
