import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Options from './Options'

import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
  state = {
    isEnglish: true,
    appHeight: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  handleResize = () => {
    this.setState({ appHeight: window.innerHeight })
  }

  updateLang = newLanguage => {
    const isEnglish = newLanguage === 'english'

    this.setState({ isEnglish })
  }

  render() {
    const { isEnglish, appHeight } = this.state

    return (
      <BrowserRouter>
        <div className='wrapper' style={{ height: `${appHeight}px` }}>
          <Options updateLang={this.updateLang} isEnglish={isEnglish} />
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Home isEnglish={isEnglish} />}
            />
            <Route
              path='/about'
              render={() => <About isEnglish={isEnglish} />}
            />
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
      </BrowserRouter>
    )
  }
}

export default App
