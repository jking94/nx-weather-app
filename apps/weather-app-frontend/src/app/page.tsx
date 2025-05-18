'use client'
import React from 'react'
import Search from './components/search';
import DailyWeather from './components/daily-weather';

export default function Index() {
  const [cityWeatherData, setCityWeatherData] = React.useState<any>(null)

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center'>
        <h1 className='font-light'>Current Weather</h1>
          <p className='font-light mt-0 text-grey'>Search for the current weather by city name</p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Search setCityWeatherData={setCityWeatherData} />
      </div>
      <br/>
      <hr/>
      <br/>
      <div className='flex justify-center'>
        {cityWeatherData && <DailyWeather cityWeatherData={cityWeatherData} />}
      </div>
    </>

  )
}
