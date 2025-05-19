'use client'
import React from 'react'
import Search from './components/search';
import DailyWeather from './components/daily-weather';
import { LocationCardType } from './types/location-card';
import { v4 as uuidv4 } from 'uuid';

export default function Index() {
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
      <div className='flex justify-center pt-12'>
        <Search setCityCards={setCityCards} />
      </div>
      {cityCards && <div className="grid grid-cols-5 gap-24 pt-36">
        {cityCards.map((cityCard) => {
          return <DailyWeather key={uuidv4()} cityWeatherData={cityCard}/>
        })}
      </div>}
    </>

  )
}
