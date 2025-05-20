'use client'
import React from 'react'

type CardProps = {
    children: React.ReactNode | React.ReactNode[]
}

const Card: React.FC<CardProps> = ({children}) => {

  return (
        <div className='
        rounded-xl
        p-6
        shadow-md
        hover:shadow-xl
        transition-shadow
        duration-300
        border
        border-primary
        border-solid
        cursor-pointer
        max-w-card' 
        id='card'>
            {children}
        </div>
  )
}

export default Card