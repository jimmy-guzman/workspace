import React from 'react'
import { render } from '@portfolio/test-utils'
import { ButtonProps } from './interfaces'
import { Styled } from './Button.styles'
import { theme } from '@portfolio/providers'

const setupButton = (props?: ButtonProps) => {
  return render(<Styled.Button {...props}>button</Styled.Button>)
}

describe('<Styled.Button />', () => {
  it('should render Button with default styles', () => {
    const { container } = setupButton()

    expect(container.firstChild).toHaveStyle({ background: 'transparent' })
  })
  it('should render Button with primary styles', () => {
    const { container } = setupButton({ primary: true, theme })

    expect(container.firstChild).toHaveStyle({
      color: theme.colors.secondary,
      fill: theme.colors.secondary,
    })
  })
  it('should render Button with secondary styles', () => {
    const { container } = setupButton({ secondary: true, theme })

    expect(container.firstChild).toHaveStyle({
      color: theme.colors.tertiary,
      fill: theme.colors.tertiary,
    })
  })
  it('should render Button with active', () => {
    const { container } = setupButton({ active: true, theme })

    expect(container.firstChild).toHaveStyle({
      color: theme.colors.primary,
      fill: theme.colors.primary,
    })
  })
})
