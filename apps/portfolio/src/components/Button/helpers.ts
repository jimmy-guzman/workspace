import { ButtonProps } from './interfaces'

export const setButtonColor = (
  { primary, secondary, theme, active }: ButtonProps,
  hover: boolean = false
): string | undefined => {
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

export const setBackground = ({ primary, secondary, theme }: ButtonProps) => {
  if (primary) {
    return theme.colors.tertiary
  }

  if (secondary) {
    return 'transparent'
  }

  return 'transparent'
}
