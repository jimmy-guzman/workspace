import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDynamicHeight } from '@jimmy-guzman/hooks'

import { useLanguage } from '@portfolio/hooks'
import { Home, Contact, About, Projects } from '@portfolio/pages'
import { Nav, Options } from '@portfolio/components'
import { projects as projectsLang } from '@portfolio/lang/projects.json'
import { ThemeProvider } from '@portfolio/providers'
import { GlobalStyle } from '@portfolio/styles'

export const App = () => {
  const [isEnglish, updateLang] = useLanguage()
  const appHeight = useDynamicHeight()

  return (
    <ThemeProvider>
      <GlobalStyle />
      <div className='wrapper' style={{ height: `${appHeight}px` }}>
        <Options updateLang={updateLang} isEnglish={isEnglish} />
        <Switch>
          <Route exact path='/' render={() => <Home isEnglish={isEnglish} />} />
          <Route path='/about' render={() => <About isEnglish={isEnglish} />} />
          <Route
            path='/projects/'
            render={() => (
              <Projects projects={projectsLang} isEnglish={isEnglish} />
            )}
          />
          <Route
            path='/contact'
            render={() => <Contact isEnglish={isEnglish} />}
          />
          <Route
            render={() => (
              <h2>404 Error: URL does not match any existing paths!</h2>
            )}
          />
        </Switch>
        <Nav isEnglish={isEnglish} />
      </div>
    </ThemeProvider>
  )
}
