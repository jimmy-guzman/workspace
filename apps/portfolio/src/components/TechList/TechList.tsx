import React from 'react'

import { Styled } from '../Badge'
import { Styled as TechListStyles } from './Techlist.styles'

export interface TechListProps {
  technologies: string[]
}

export const TechList = ({ technologies }: TechListProps) => (
  <TechListStyles.List
    className='TechList'
    style={{ textAlign: 'center', listStyle: 'none', padding: 0 }}
  >
    {technologies.map(technology => (
      <li key={technology}>
        <Styled.Badge>{technology}</Styled.Badge>
      </li>
    ))}
  </TechListStyles.List>
)
