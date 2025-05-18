/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import Card from './card';
type DailyWeatherProps = {
    cityWeatherData: any;
}

const DailyWeather: React.FC<DailyWeatherProps> = ({cityWeatherData}) => {

  return (
    <div id="weather-data">
        <Card>
            <div>{cityWeatherData.name}</div>
            <h1 className='mt-0'>Temp: {cityWeatherData.main.temp}</h1>
            <div>Feels Like: {cityWeatherData.main.feels_like}</div>
            <hr/>
            <div>Daily High: {cityWeatherData.main.temp_max}</div>
            <div>Daily Low: {cityWeatherData.main.temp_min}</div>
            {cityWeatherData.weather.map((weather: any) => {
                return <div key={weather.id}>{weather.main} - {weather.description}</div>
            })}
        </Card>
    </div>
  )
}

export default DailyWeather