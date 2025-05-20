/* eslint-disable @next/next/no-img-element */
import React from 'react'

type IconProps = {
    iconCode: string
    size?: string
}

const Icon: React.FC<IconProps> = ({iconCode, size = '2x'}) => {

  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@${size}.png`}
      alt='Open Weather API Icon'
    />
  )
}

export default Icon