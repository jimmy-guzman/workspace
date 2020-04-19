import './scss/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader'
import { Normalize } from 'styled-normalize'

import { App } from './App'
import { StyleSheetManager } from 'styled-components'

WebFont.load({
  google: {
    families: ['Oswald:400,700'],
  },
})

render(
  <StyleSheetManager
    disableVendorPrefixes={process.env.NODE_ENV === 'development'}
  >
    <Router>
      <Normalize />
      <App />
    </Router>
  </StyleSheetManager>,
  document.getElementById('root')
)
