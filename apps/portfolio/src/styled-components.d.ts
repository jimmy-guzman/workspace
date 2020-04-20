import { dark } from './providers'

type ThemeInterface = typeof dark

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
