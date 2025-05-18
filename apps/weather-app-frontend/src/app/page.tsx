'use client'
import { getCityInfoByLatLon, getGeoCoderInfoByCity } from './api/geo/geo-route';
import {getUsers} from './api/users/users-route';
import React from 'react'
import Search from './components/search';

export default function Index() {

  const [cityNameSearch, setCityNameSearch] = React.useState<string>('')
  const [cities, setCities] = React.useState<any>(null)
  const [cityWeatherData, setCityWeatherData] = React.useState<any>(null)

  const handleCitySearchChange = (event: any) => {
    setCityNameSearch(event.target.value);
  }

  const getCityGeoCoderData = async () => {
    const cityData = await getGeoCoderInfoByCity(cityNameSearch)
    setCities(cityData);
  }
  const getCityWeatherData = async (city: any) => {
    const cityWeatherData = await getCityInfoByLatLon(city.lat, city.lon);
    console.log('hotpink - cityWeatherData: ', cityWeatherData);
    setCityWeatherData(cityWeatherData);
  }

  return (
    <>
      {/* <div className='flex justify-center'>
        <div id='city-search'>
          <h1>Weather App</h1>
          <div id="city-name-search-dropdown" className="dropdown-content">
            <input type='text' placeholder="Search by city name" id="myInput" onKeyUp={handleCitySearchChange}></input>
            {cities && cities.map((city: any) => {
              return <div className='cursor-pointer m-2 border-2' onClick={() => {getCityWeatherData(city)}} key={city.lat}><b>City:</b> {city.name}, <b>Country:</b> {city.country}, <b>State:</b> {city.state} </div>
            })}
          </div>
          <button onClick={getCityGeoCoderData}>Click to search city</button>
        </div>
      </div> */}
      <Search setCityWeatherData={setCityWeatherData} />
      <br/>
      <br/>
      <div className='flex justify-center'>
        {cityWeatherData &&
        <div id="weather-data">
          <div>
            <h1>Temp: {cityWeatherData.main.temp}</h1>
            <div>Feels Like: {cityWeatherData.main.feels_like}</div>
            <hr/>
            <div>Daily High: {cityWeatherData.main.temp_max}</div>
            <div>Daily Low: {cityWeatherData.main.temp_min}</div>
            {cityWeatherData.weather.map((weather: any) => {
              return <div key={weather.id}>{weather.main} - {weather.description}</div>
            })}
          </div>
        </div>}
      </div>
    </>

  )
}
