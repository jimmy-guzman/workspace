/**
 * Calculates 'em' values from 'px' values
 * @example
 * em('24px', '18px') // 1.33333em
 */
export const em = (target: string, context = '18px'): string => {
  return `${parseInt(target) / parseInt(context)}em`
}

/**
 * Returns appriopiate max-width based on device size
 * @example
 * mq('medium') // 769px
 */
export const mq = (
  breakPoint: 'small' | 'medium' | 'large' | 'extra-large'
): string => {
  switch (breakPoint) {
    case 'small':
      return '480px'
    case 'medium':
      return `${768 + 1}px`
    case 'large':
      return '1024px'
    case 'extra-large':
      return '1440px'
    default:
      return 'inherit'
  }
}
