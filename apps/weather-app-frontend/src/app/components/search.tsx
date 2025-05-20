/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, {useEffect} from 'react'
import { getGeoCoderInfoByCity, getMultipleCityInfoByLatLon } from '../api/geo/geo-routes'
import { GeoCoderDataModel } from '../types/geo-coder-data-model'
import { LocationCardType } from '../types/location-card'
type SearchProps = {
    setCityCards: (cityCards: LocationCardType[]) => void
}

const Search: React.FC<SearchProps> = ({setCityCards}) => {

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
        const cityCards = await getMultipleCityInfoByLatLon(cityData)
        setCityCards(cityCards)
        setCityNameSearch('')
    }

  return (
        <div id='search-city-input'>
            <div className='flex justify-center'>
                <input value={cityNameSearch} className='h-32 px-6 rounded-xl border' type='text' placeholder="Search by city name" id="myInput" onChange={handleCitySearchChange}></input>
                <button
                    disabled={submitDisabled}
                    className={`ml-12 px-6 rounded-xl border bg-grey-gradient-right ${submitDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={getCityCards}>Search
                </button>
            </div>
        </div>
  )
}

export default Search