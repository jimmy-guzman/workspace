import { theme } from './providers'

type ThemeInterface = typeof theme

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
