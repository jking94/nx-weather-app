'use client'
import React from 'react'
import Card from './card';
import { v4 as uuidv4 } from 'uuid';
import { LocationDataModel } from '../types/location-data-model';
import { GeoLocationData } from '../types/geo-location-data';
import Tempurature from './tempurature';
type DailyWeatherProps = {
    geoLocationData: GeoLocationData;
    setCurrentWeatherDetails: (locationDataModel: LocationDataModel) => void
}

const CurrentWeatherCard: React.FC<DailyWeatherProps> = ({setCurrentWeatherDetails, geoLocationData}) => {
  const {geoData, locationData} = geoLocationData;
  const handleOnClick = () =>{
  setCurrentWeatherDetails(locationData)
}
  return (
    <div className='flex-1' onClick={handleOnClick}>
      <Card>
          <div className='mb-2 font-bold'>{geoData.name},</div>
          <div className='mb-2'>{geoData.state},</div>
          <div className='mb-8'>{geoData.country}</div>
          <hr/>
          <h1 className='my-0'>
            <span className='font-bold'>Temp:</span>
            <Tempurature temp={locationData.main.temp}/>
          </h1>
          <div className='mt-4'>
            <span className='font-bold'>Feels Like:</span>
            <Tempurature temp={locationData.main.feels_like}/>
          </div>
          <hr/>
          <div>
            <span className='font-bold'>Max Temp:</span>
            <Tempurature classes='font-light' temp={locationData.main.temp_max}/>
          </div>
          <div>
            <span className='font-bold'>Minimum Temp:</span>
            <Tempurature temp={locationData.main.temp_min}/>
          </div>
          <div className='mt-6'>
              {locationData.weather.map((weather) => {
                return <div key={uuidv4()}>{weather.main} - {weather.description}</div>
              })}
          </div>
      </Card>
    </div>
  )
}

export default CurrentWeatherCard