import 'normalize.css'
import './scss/index.scss'
import React from 'react'
import { render } from 'react-dom'

import WebFont from 'webfontloader'
import App from './components/App'

WebFont.load({
  google: {
    families: ['Oswald:400,700']
  }
})

render(<App />, document.getElementById('root'))
