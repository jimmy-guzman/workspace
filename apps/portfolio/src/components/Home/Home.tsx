import React from 'react'

export interface HomeProps {
  isEnglish?: boolean
}

export const Home = ({ isEnglish = true }: HomeProps) => (
  <div className='title'>
    <h1 className='title__name'>
      {isEnglish ? "Hi, I'm Jimmy" : 'Hola, Soy Jimmy'}
    </h1>
    <h2 className='title__caption'>
      {isEnglish ? "I'm a Web Developer" : 'Soy un Desarrollador de Web'}
    </h2>
  </div>
)
