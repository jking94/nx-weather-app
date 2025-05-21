'use client'
import React from 'react'
import { roundToWholeNumber } from './helpers'
import { DEGREESF } from './constants'

type TempuratureProps = {
    temp?: number
    classes?: string;
    title?: string;
}

const Tempurature: React.FC<TempuratureProps> = ({temp, classes = '', title = ''}) => {

  return (
    <span className={`${classes} text-secondary`}>{temp ? `${roundToWholeNumber(temp)}${DEGREESF}` : '--'}</span>
  )
}

export default Tempurature