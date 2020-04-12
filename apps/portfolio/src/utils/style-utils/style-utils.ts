/**
 * Calculates 'em' values from 'px' values
 * @example
 * em('24px', '18px') // 1.33333em
 */
export const em = (target: string, context = '18px'): string => {
  return `${parseInt(target) / parseInt(context)}em`
}
