/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import Card from './card';
import { LocationCardType } from '../types/location-card';
import { v4 as uuidv4 } from 'uuid';
type DailyWeatherProps = {
    cityWeatherData: LocationCardType;
}

const DailyWeather: React.FC<DailyWeatherProps> = ({cityWeatherData}) => {
  const {cityName, stateName, countryName, currentTemp, feelsLikeTemp, dailyHigh, dailyLow, weatherDesc} = cityWeatherData;
  return (
    <Card>
        <div className='mb-2'>{cityName},</div>
        <div className='mb-2'>{stateName},</div>
        <div className='mb-12'>{countryName}</div>
        <h1 className='mt-0'>Temp: {currentTemp}</h1>
        <div>Feels Like: {feelsLikeTemp}</div>
        <hr/>
        <div>Daily High: {dailyHigh}</div>
        <div>Daily Low: {dailyLow}</div>
        {weatherDesc.map((weather, i) => {
          if(i !== weatherDesc.length -1){
            return <span key={uuidv4()}>{weather} - </span>
          } else return <span key={uuidv4()}>{weather}</span>
        })}
    </Card>
  )
}

export default DailyWeather