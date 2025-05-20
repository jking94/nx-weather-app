'use client'
import React from 'react'

type DetailSectionProps = {
    children: React.ReactNode | React.ReactNode[]
    classes?: string;
    id: string;
}

const DetailSection: React.FC<DetailSectionProps> = ({children, classes = '', id}) => {

  return (
        <div id={id} className={`${classes} bg-white rounded-xl p-6 shadow-md`}>
            {children}
        </div>
  )
}

export default DetailSection