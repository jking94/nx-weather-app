/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, {useEffect} from 'react'
import { getGeoCoderInfoByCity, getMultipleCityInfoByLatLon } from '../api/geo/geo-routes'
import { GeoCoderDataModel } from '../types/geo-coder-data-model'
import { GeoLocationData } from '../types/geo-location-data'
type SearchProps = {
    setGeoLocationData: (geoLocationDataArr: GeoLocationData[] | null) => void
}

const Search: React.FC<SearchProps> = ({setGeoLocationData}) => {

  const [cityNameSearch, setCityNameSearch] = React.useState<string>('')
  const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true)

  useEffect(() => {
    if(cityNameSearch !== ''){
        setSubmitDisabled(false)
    } else setSubmitDisabled(true)
  }, [cityNameSearch]); 

    const handleCitySearchChange = (event: any) => {
        setCityNameSearch(event.target.value);
    }

    const getCityCards = async () => {
        const cityData: GeoCoderDataModel = await getGeoCoderInfoByCity(cityNameSearch)
        const geoLocationDataArr = await getMultipleCityInfoByLatLon(cityData)
        setGeoLocationData(geoLocationDataArr)
        setCityNameSearch('')
    }

    const clearCityCards = async () => {
        setCityNameSearch('')
        setGeoLocationData(null)
    }

  return (
        <div id='search-city-input'>
            <div className='flex justify-center'>
                <input value={cityNameSearch} className='h-32 px-6 rounded-xl border' type='text' placeholder="Search by city name" id="myInput" onChange={handleCitySearchChange}></input>
                <button
                    disabled={submitDisabled}
                    className={`ml-12 px-6 rounded-xl border bg-grey-gradient-right ${submitDisabled ? '' : 'cursor-pointer'}`}
                    onClick={getCityCards}>Search
                </button>
                <button
                    className={`ml-12 px-6 rounded-xl border bg-grey-gradient-right}`}
                    onClick={clearCityCards}>Clear
                </button>
            </div>
        </div>
  )
}

export default Search