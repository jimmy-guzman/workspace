import React from 'react'

import './TechList.scss'

export interface TechListProps {
  technologies: string[]
}

export const TechList = ({ technologies }: TechListProps) => (
  <ul
    className='TechList'
    style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}
  >
    {technologies.map(technology => (
      <li className='badge' key={technology}>
        {technology}
      </li>
    ))}
  </ul>
)
