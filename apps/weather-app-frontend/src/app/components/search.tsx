/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { getCityInfoByLatLon, getGeoCoderInfoByCity } from '../api/geo/geo-route'
type SearchProps = {
    setCityWeatherData: (cityWeatherData: any) => void
}

const Search: React.FC<SearchProps> = ({setCityWeatherData}) => {

  const [cityNameSearch, setCityNameSearch] = React.useState<string>('')
  const [cities, setCities] = React.useState<any>(null)

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
    <div className='flex justify-center'>
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
    </div>
  )
}

export default Search