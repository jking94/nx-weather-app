'use client'
import React from 'react'

type CardProps = {
    children: React.ReactNode | React.ReactNode[]
}

const Card: React.FC<CardProps> = ({children}) => {

  return (
        <div className='
        bg-grey-gradient-down
        rounded-xl
        p-6
        shadow-md
        hover:shadow-lg
        transition-shadow
        duration-300
        hover:border
        hover:border-primary
        hover:border-solid
        cursor-pointer
        max-w-card' 
        id='card'>
            {children}
        </div>
  )
}

export default Card