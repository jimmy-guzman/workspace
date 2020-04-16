import { LinkProps } from './interfaces'
import { COLORS } from './constants'

export const setLinkColor = (
  { theme, $active, color, active }: LinkProps,
  hover: boolean = false
): string | undefined => {
  const asActive = $active || active

  if (color === COLORS.primary) {
    return hover || asActive ? theme.colors.primary : theme.colors.secondary
  }

  if (color === COLORS.secondary) {
    return hover || asActive ? theme.colors.secondary : theme.colors.tertiary
  }

  return hover || asActive ? theme.colors.primary : undefined
}

export const setLinkFill = setLinkColor
