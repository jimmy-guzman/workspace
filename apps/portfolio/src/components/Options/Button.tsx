import React from 'react'

import './Button.scss'

interface ButtonProps {
  className?: string
  onClick: () => void
  children: React.ReactNode
}

export const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button className={className} type='button' onClick={onClick}>
      {children}
    </button>
  )
}
