'use client'
import React from 'react'
import Search from './components/search';
import DailyWeather from './components/daily-weather';

export default function Index() {
  const [cityWeatherData, setCityWeatherData] = React.useState<any>(null)

  return (
    <>
      <div className='flex justify-center'>
        <Search setCityWeatherData={setCityWeatherData} />
      </div>
      <br/>
      <br/>
      <div className='flex justify-center'>
        {cityWeatherData && <DailyWeather cityWeatherData={cityWeatherData} />}
      </div>
    </>

  )
}
