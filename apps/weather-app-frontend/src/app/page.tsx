'use client'
import React from 'react'
import Search from './components/search';
import CurrentWeatherCard from './components/current-weather-card';
import { v4 as uuidv4 } from 'uuid';
import CurrentWeatherDetails from './components/current-weather-details/current-weather-details';
import { GeoLocationData } from './types/geo-location-data';

export default function Index() {
  const [geoLocationData, setGeoLocationData] = React.useState<GeoLocationData[] | null>(null)
  const [geoLocationDataDetails, setGeoLocationDataDetails] = React.useState<GeoLocationData | null>(null)

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center'>
        <h1 className='font-light'>Current Weather</h1>
          <p className='font-light mt-0 text-tertiary'>Search for the current weather by city name</p>
        </div>
      </div>
      <div className='flex justify-center pt-12'>
        <Search setGeoLocationData={setGeoLocationData} setGeoLocationDataDetails={setGeoLocationDataDetails} />
      </div>
      {geoLocationData && geoLocationData.length < 1 && 
      <div className='flex justify-center pt-12'>
        <p>No results found</p>
      </div>
      }
      {geoLocationData &&
      <>
        {geoLocationData && geoLocationData.length > 0 &&
        <div className='flex justify-center'>
          <p className='font-light text-tertiary'>Select a tile below to see more details</p>
        </div>}
        <div className="flex flex-col md:flex-row gap-24 pt-12">
          {geoLocationData.map((geoLocationData) => {
            return <CurrentWeatherCard key={uuidv4()} geoLocationData={geoLocationData} setGeoLocationDataDetails={setGeoLocationDataDetails}/>
          })}
        </div>
      </>}
      {geoLocationDataDetails &&
      <div className='flex justify-center'>
        <CurrentWeatherDetails geoLocationData={geoLocationDataDetails} />
      </div>
      }
    </>
  )
}
