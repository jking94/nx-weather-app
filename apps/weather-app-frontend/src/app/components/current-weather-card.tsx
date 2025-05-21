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
    <div className='flex-1' onClick={handleOnClick}>
      <Card>
          <div className='mb-2 font-bold'>{geoData.name},</div>
          <div className='mb-2'>{geoData.state},</div>
          <div className='mb-8'>{geoData.country}</div>
      </Card>
    </div>
  )
}

export default CurrentWeatherCard