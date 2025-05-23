'use client'
import React from 'react'
import Card from './card';
import { GeoLocationData } from '../types/geo-location-data';
type DailyWeatherProps = {
    geoLocationData: GeoLocationData;
    setGeoLocationDataDetails: (geoLocationData: GeoLocationData | null) => void
}

const CurrentWeatherCard: React.FC<DailyWeatherProps> = ({setGeoLocationDataDetails, geoLocationData}) => {
  const {geoData} = geoLocationData
  const handleOnClick = () =>{
  setGeoLocationDataDetails(geoLocationData)
}
  return (
    <div className='flex-1 flex justify-center w-full' onClick={handleOnClick}>
      <Card>
          <div className='mb-2 font-bold'>{geoData.name}<span className='hidden md:inline font-normal'>,</span></div>
          <div className='mb-2'>{geoData.state},</div>
          <div className='hidden md:block mb-8'>{geoData.country}</div>
      </Card>
    </div>
  )
}

export default CurrentWeatherCard