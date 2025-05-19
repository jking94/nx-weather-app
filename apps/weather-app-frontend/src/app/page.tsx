'use client'
import React from 'react'
import Search from './components/search';
import DailyWeather from './components/daily-weather';
import { LocationCardType } from './types/location-card';
import { LocationDataModel } from './types/location-data-model';
import { v4 as uuidv4 } from 'uuid';

export default function Index() {
  const [cityWeatherData, setCityWeatherData] = React.useState<LocationDataModel | null>(null)
  const [cityCards, setCityCards] = React.useState<LocationCardType[]>([])

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center'>
        <h1 className='font-light'>Current Weather</h1>
          <p className='font-light mt-0 text-grey'>Search for the current weather by city name</p>
        </div>
      </div>
      <hr/>
      <br/>
      <div className='flex justify-center'>
        <Search setCityWeatherData={setCityWeatherData} setCityCards={setCityCards} />
      </div>
      <br/>
      <br/>
      {/* <div className='flex justify-center'>
        {cityWeatherData && <DailyWeather cityWeatherData={cityWeatherData} />}
      </div> */}
      {cityCards &&<div className="flex flex-row">
        {cityCards.map((cityCard) => {
          return <DailyWeather key={uuidv4()} cityWeatherData={cityCard}/>
        })}
      </div>}
    </>

  )
}
