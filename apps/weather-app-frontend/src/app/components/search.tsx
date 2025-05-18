/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, {useEffect} from 'react'
import { getCityInfoByLatLon, getGeoCoderInfoByCity } from '../api/geo/geo-route'
type SearchProps = {
    setCityWeatherData: (cityWeatherData: any) => void
}

const Search: React.FC<SearchProps> = ({setCityWeatherData}) => {

  const [cityNameSearch, setCityNameSearch] = React.useState<string>('')
  const [cities, setCities] = React.useState<any>([])
  const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true)

  useEffect(() => {
    if(cityNameSearch !== ''){
        setSubmitDisabled(false)
    }
  }, [cityNameSearch]); 

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
        <div id='search-city-input'>
            <div className='flex justify-center'>
                <input className='h-32 px-6 rounded-xl border' type='text' placeholder="Search by city name" id="myInput" onKeyUp={handleCitySearchChange}></input>
                <button disabled={submitDisabled} className={`ml-12 px-6 rounded-xl border bg-grey-gradient-right ${submitDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={getCityGeoCoderData}>Search City</button>
            </div>
            <div className="pt-6" id="search-city-names">
                {cities && cities.map((city: any) => {
                    return <div className='cursor-pointer m-2 py-4' onClick={() => {getCityWeatherData(city)}} key={city.lat}><b>City:</b> {city.name}, <b>Country:</b> {city.country}, <b>State:</b> {city.state} </div>
                })}
            </div>
        </div>
  )
}

export default Search