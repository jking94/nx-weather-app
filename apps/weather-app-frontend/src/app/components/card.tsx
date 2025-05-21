'use client'
import React from 'react'

type CardProps = {
    children: React.ReactNode | React.ReactNode[]
}

const Card: React.FC<CardProps> = ({children}) => {

  return (
        <div className='
        rounded-lg
        md:rounded-xl
        p-4
        md:p-6
        shadow-md
        hover:shadow-xl
        transition-shadow
        duration-300
        border
        border-primary
        border-solid
        cursor-pointer
        w-full
        text-center
        md:text-left' 
        id='card'>
            {children}
        </div>
  )
}

export default Card