import React from 'react'

type DetailWithLabelProps = {
    labelText: string;
    children: React.ReactNode | React.ReactNode[]
    containerClasses?: string
    title?: string;
}

const DetailWithLabel: React.FC<DetailWithLabelProps> = ({labelText, children, containerClasses = '', title = ''}) => {

  return (
        <div title={title} className={containerClasses}>
            <span className='text-secondary text-lg'>{labelText} </span>
            {children}
        </div>
    )
}

export default DetailWithLabel