interface THEME {
  colors: {
    /** #40af93 */
    primary: string
    /** #d7d5d9 */
    secondary: string
    /** #292b2f */
    tertiary: string
    /** #018185 */
    quaternary: string
  }
  font: {
    family: string
  }
}

export const theme: THEME = {
  colors: {
    primary: '#40af93',
    secondary: '#d7d5d9',
    tertiary: '#292b2f',
    quaternary: '#018185',
  },
  font: {
    family: "'Oswald', Impact, 'Franklin Gothic Bold', sans-serif",
  },
}
