import { css } from 'styled-components'

/**
 * - Calculates 'em' values from 'px' values
 * - Supports multiple 'px' values
 * @example
 * em('0px 10px 20px -5px', '18px') // 0em 0.56em 1.11em -0.28em
 */
export const em = (target: string, context = '18px'): string => {
  return target
    .split(' ')
    .map(t => `${(parseInt(t) / parseInt(context)).toFixed(2)}em`)
    .join(' ')
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

/**
 * Returns flexbox styles based on params
 * @param display `display:`
 * @param flow `flex-flow:`
 * @param justifyContent `justify-content:`
 * @param alignItems `align-bottom:`
 * @param flex `flex:`
 * @example
 * flex('flex', 'row', 'space-around', 'center')
 */
export const flex = (
  display: string = 'flex',
  flow?: string,
  justifyContent?: string,
  alignItems?: string,
  flex?: string
) => css`
  display: ${display};
  flex-flow: ${flow};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex: ${flex};
`
