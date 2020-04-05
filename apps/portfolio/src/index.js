import 'normalize.css'
import './scss/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader'

import { App } from './App'

WebFont.load({
  google: {
    families: ['Oswald:400,700']
  }
})

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
