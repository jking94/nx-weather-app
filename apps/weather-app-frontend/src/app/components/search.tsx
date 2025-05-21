/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, {useEffect} from 'react'
import { getGeoCoderInfoByCity, getMultipleCityInfoByLatLon } from '../api/geo/geo-routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GeoLocationData } from '../types/geo-location-data'
type SearchProps = {
    setGeoLocationData: (geoLocationDataArr: GeoLocationData[] | null) => void
    setGeoLocationDataDetails: (geoLocationDeatils: GeoLocationData | null) => void
}

const Search: React.FC<SearchProps> = ({ setGeoLocationData, setGeoLocationDataDetails }) => {

  const [cityNameSearch, setCityNameSearch] = React.useState<string>('')
  const [submitDisabled, setSubmitDisabled] = React.useState<boolean>(true)

  useEffect(() => {
    if(cityNameSearch !== ''){
        setSubmitDisabled(false)
    } else {
        setSubmitDisabled(true)
    }
  }, [cityNameSearch]); 

    const handleCitySearchChange = (event: any) => {
        setCityNameSearch(event.target.value);
    }

    const getCityCards = async () => {
        const cityData = await getGeoCoderInfoByCity(cityNameSearch)
        if('error' in cityData){
            toast.error('Failed to retrieve geo data')
        } else {
            const geoLocationDataArr = await getMultipleCityInfoByLatLon(cityData.data)
            if('error' in geoLocationDataArr) {
                toast.error('Failed to retrieve location data')
  
            } else {
                setGeoLocationData(geoLocationDataArr.data)
                setCityNameSearch('')
            }
        }
    }

    const clearCityCards = async () => {
        setCityNameSearch('')
        setGeoLocationData(null)
        setGeoLocationDataDetails(null)
    }

  return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />
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
        </>
  )
}

export default Search