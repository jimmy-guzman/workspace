import { LinkProps } from './interfaces'
import { COLORS } from './constants'

export const setLinkColor = (
  { theme, $active, color, active }: LinkProps,
  hover: boolean = false
): string | undefined => {
  const asActive = $active || active

  if (color === COLORS.primary) {
    return hover || asActive ? theme.colors.highlight : theme.colors.primary
  }

  if (color === COLORS.secondary) {
    return hover || asActive ? theme.colors.highlight : theme.colors.secondary
  }

  return hover || asActive ? theme.colors.highlight : undefined
}

export const setLinkFill = setLinkColor
