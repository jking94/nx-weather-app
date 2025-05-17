'use client'
import React from 'react'
type ButtonProps = {
    onClick: () => void
}

const InteractiveButton: React.FC<ButtonProps> = ({onClick}) => {
  return (
    <button onClick={onClick}>Click Here</button>
  )
}

export default InteractiveButton