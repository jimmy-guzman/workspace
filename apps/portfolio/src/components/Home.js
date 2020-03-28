import React from 'react'
import PropTypes from 'prop-types'

const Home = ({ isEnglish }) => (
  <div className='title'>
    <h1 className='title__name'>
      {isEnglish ? "Hi, I'm Jimmy" : 'Hola, Soy Jimmy'}
    </h1>
    <h2 className='title__caption'>
      {isEnglish ? "I'm a Web Developer" : 'Soy un Desarrollador de Web'}
    </h2>
  </div>
)

Home.propTypes = {
  isEnglish: PropTypes.bool.isRequired
}

export default Home
