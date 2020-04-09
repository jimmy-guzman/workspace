import React from 'react'

export interface TechListProps {
  technologies: string[]
}

export const TechList = ({ technologies }: TechListProps) => (
  <ul style={{ textAlign: 'center' }}>
    {technologies.map(technology => (
      <li className='badge' key={technology}>
        {technology}
      </li>
    ))}
  </ul>
)
