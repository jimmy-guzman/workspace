import { ButtonProps } from './interfaces'

export const setButtonColor = (
  { primary, secondary, theme, active }: ButtonProps,
  hover: boolean = false
): string | undefined => {
  if (hover || active) {
    return theme.colors.highlight
  }
  if (primary) {
    return theme.colors.primary
  }

  if (secondary) {
    return theme.colors.secondary
  }

  return undefined
}

export const setButtonFill = setButtonColor

export const setBackground = ({ primary, secondary, theme }: ButtonProps) => {
  if (primary) {
    return 'inherit'
  }

  if (secondary) {
    return 'transparent'
  }

  return 'transparent'
}
