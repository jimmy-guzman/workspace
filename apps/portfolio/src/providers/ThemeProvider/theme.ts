interface Theme {
  background: {
    app: string
    section: string
    card: string
  }
  colors: {
    primary: string
    secondary: string
    tertiary: string
    highlight: string
  }
  font: {
    color: string
    family: string
  }
}

export const dark: Theme = {
  background: {
    app: '#263238',
    section: '#263238',
    card: '#263238',
  },
  colors: {
    primary: '#80CBC4',
    secondary: '#546E7A',
    tertiary: '#80CBC420',
    highlight: '#FFCC00',
  },
  font: {
    color: '#EEFFFF',
    family: "'Oswald', Impact, 'Franklin Gothic Bold', sans-serif",
  },
}

export const ligth: Theme = {
  background: {
    app: '#FAFAFA',
    section: '#FAFAFA',
    card: '#FAFAFA',
  },
  colors: {
    primary: '#80CBC4',
    secondary: '#90A4AE',
    tertiary: '#272727',
    highlight: '#FFCC00',
  },
  font: {
    color: '#90A4AE',
    family: "'Oswald', Impact, 'Franklin Gothic Bold', sans-serif",
  },
}
