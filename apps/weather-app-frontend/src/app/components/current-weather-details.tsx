'use client'
import React from 'react'
import { LocationDataModel } from '../types/location-data-model'
import { roundToWholeNumber } from './helpers'
import { GeoLocationData } from '../types/geo-location-data'

type CurrentWeatherDetailsProps = {
    location: LocationDataModel | null
}

const CurrentWeatherDetails: React.FC<CurrentWeatherDetailsProps> = ({location}) => {

  return (
        <div className='
        rounded-xl
        mt-36
        p-6
        border
        border-primary
        border-solid
        h-full' 
        id='current-weather-details'>
            <section id='weather-descriptions'></section>
            <section id='tempurature-details'>
                <div>
                    <div className='font-bold text-lg'>{roundToWholeNumber(location!.main.temp)}</div>
                </div>
            </section>
            <section id='additional-details'></section>
            <section id ='sunrise-and-set-details'></section>
        </div>
  )
}

export default CurrentWeatherDetails