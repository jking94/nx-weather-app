'use client'
import React from 'react'
import Search from './components/search';
import CurrentWeatherCard from './components/current-weather-card';
import { v4 as uuidv4 } from 'uuid';
import { GeoLocationData } from './types/geo-location-data';
import { LocationDataModel } from './types/location-data-model';
import CurrentWeatherDetails from './components/current-weather-details';

export default function Index() {
  const [geoLocationData, setGeoLocationData] = React.useState<GeoLocationData[] | null>(null)
  const [currentWeatherDetails, setCurrentWeatherDetails] = React.useState<LocationDataModel | null>(null)

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center'>
        <h1 className='font-light'>Current Weather</h1>
          <p className='font-light mt-0 text-grey'>Search for the current weather by city name</p>
        </div>
      </div>
      <hr/>
      <div className='flex justify-center pt-12'>
        <Search setGeoLocationData={setGeoLocationData} />
      </div>
      {geoLocationData &&
      <>
        <div className='flex justify-center pt-12'>
          <h3 className='font-light'>Select a tile below to see more details</h3>
        </div>
        <div className="flex flex-row gap-24 pt-12">
          {geoLocationData.map((geoLocationData) => {
            return <CurrentWeatherCard key={uuidv4()} geoLocationData={geoLocationData} setCurrentWeatherDetails={setCurrentWeatherDetails}/>
          })}
        </div>
      </>}
      {currentWeatherDetails && <CurrentWeatherDetails location={currentWeatherDetails} />}
    </>

  )
}
