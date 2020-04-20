import React from 'react'
import { render } from '@portfolio/test-utils'
import { ButtonProps } from './interfaces'
import { Styled } from './Button.styles'
import { dark } from '@portfolio/providers'

const setupButton = (props?: ButtonProps) => {
  return render(<Styled.Button {...props}>button</Styled.Button>)
}

describe('<Styled.Button />', () => {
  it('should render Button with default styles', () => {
    const { container } = setupButton()

    expect(container.firstChild).toHaveStyle({ background: 'transparent' })
  })
  it('should render Button with primary styles', () => {
    const { container } = setupButton({ primary: true, theme: dark })

    expect(container.firstChild).toHaveStyle({
      color: dark.colors.primary,
      fill: dark.colors.primary,
    })
  })
  it('should render Button with secondary styles', () => {
    const { container } = setupButton({ secondary: true, theme: dark })

    expect(container.firstChild).toHaveStyle({
      color: dark.colors.secondary,
      fill: dark.colors.secondary,
    })
  })
  it('should render Button with active', () => {
    const { container } = setupButton({ active: true, theme: dark })

    expect(container.firstChild).toHaveStyle({
      color: dark.colors.highlight,
      fill: dark.colors.highlight,
    })
  })
})
