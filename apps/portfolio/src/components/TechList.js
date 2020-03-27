import React from 'react'
import { arrayOf, string } from 'prop-types'

const TechList = ({ techs }) => (
  <ul style={{ textAlign: 'center' }}>
    {techs.map(tech => (
      <li className='badge' key={tech}>
        {tech}
      </li>
    ))}
  </ul>
)

TechList.propTypes = {
  techs: arrayOf(string).isRequired
}

export default TechList
