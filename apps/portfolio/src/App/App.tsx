import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDynamicHeight } from '@jimmy-guzman/hooks'

import Projects from '../components/Projects'
import { useLanguage } from '../hooks'
import { Home, Contact, About } from '../pages'
import { Nav, Options } from '../components'

export const App = () => {
  const [isEnglish, updateLang] = useLanguage()
  const appHeight = useDynamicHeight()

  return (
    <div className='wrapper' style={{ height: `${appHeight}px` }}>
      <Options updateLang={updateLang} isEnglish={isEnglish} />
      <Switch>
        <Route exact path='/' render={() => <Home isEnglish={isEnglish} />} />
        <Route path='/about' render={() => <About isEnglish={isEnglish} />} />
        <Route
          path='/projects/'
          render={() => <Projects isEnglish={isEnglish} />}
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
  )
}
