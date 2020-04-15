import React from 'react'

import { Styled as StyledBadge } from '../Badge'
import { Styled } from '../List'

export interface TechListProps {
  technologies: string[]
}

export const TechList = ({ technologies }: TechListProps) => (
  <Styled.List centered>
    {technologies.map(technology => (
      <Styled.ListItem key={technology}>
        <StyledBadge.Badge>{technology}</StyledBadge.Badge>
      </Styled.ListItem>
    ))}
  </Styled.List>
)
