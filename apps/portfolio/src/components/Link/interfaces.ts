import { DefaultTheme } from 'styled-components'

export interface LinkProps {
  /** color of the component based on `theme['colors']` */
  color: 'default' | 'primary' | 'secondary'
  /**  if `true`, the link will have active styles */
  active?: boolean
  /** (use with `as`), if `true`, the link will have active styles */
  $active?: boolean
  /** size of the component based on `theme['size']` */
  size: 'default' | 'big'
  theme: DefaultTheme
}
