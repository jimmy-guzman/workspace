import React from 'react'

import { Styled } from './Card.styles'

interface StyleCardProps {
  className?: string
  children: React.ReactNode
}

/**
 * - Use a `<Card />` to contain content and actions targeting one subject.
 **/
export const Card = ({ children, className }: StyleCardProps) => (
  <Styled.Card className={className}>{children}</Styled.Card>
)
