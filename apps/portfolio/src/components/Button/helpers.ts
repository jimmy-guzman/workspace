import { ButtonProps } from './interfaces'

export const setButtonColor = (
  props: ButtonProps,
  hover: boolean = false
): string | undefined => {
  const { primary, secondary, theme, active } = props

  if (hover || active) {
    return theme.colors.primary
  }
  if (primary) {
    return theme.colors.secondary
  }

  if (secondary) {
    return theme.colors.tertiary
  }

  return undefined
}

export const setButtonFill = setButtonColor

export const setBackground = (props: ButtonProps) => {
  const { primary, secondary, theme } = props

  if (primary) {
    return theme.colors.tertiary
  }

  if (secondary) {
    return theme.colors.secondary
  }

  return 'transparent'
}
