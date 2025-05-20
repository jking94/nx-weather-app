'use client'
import React from 'react'
import { roundToWholeNumber } from './helpers'
import { DEGREESF } from './constants'

type TempuratureProps = {
    temp: number
    classes?: string;
}

const Tempurature: React.FC<TempuratureProps> = ({temp, classes = ''}) => {

  return (
    <span className={classes}>{`${roundToWholeNumber(temp)}${DEGREESF}`}</span>
  )
}

export default Tempurature