/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, {useEffect} from 'react'
import { getLocationDataByCityName, getLocationsDetailsByLatLon } from '../api/geo/geo-routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GeoLocationData } from '../types/geo-location-data'
type SearchProps = {
    setGeoLocationData: (geoLocationDataArr: GeoLocationData[] | null) => void
    setGeoLocationDataDetails: (geoLocationDeatils: GeoLocationData | null) => void
}

//OpenWeather API does not support pagination, in the future include more fine grained filtering functionality
//within the search and populate dropdown from search bar instead of card UI
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
        setGeoLocationDataDetails(null)
        const cityData = await getLocationDataByCityName(cityNameSearch)
        if('error' in cityData){
            toast.error('Failed to retrieve geo data')
        } else {
            const geoLocationDataArr = await getLocationsDetailsByLatLon(cityData.data)
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
                    <input
                        data-testid="search-input"
                        value={cityNameSearch}
                        className='h-32 px-6 rounded-xl border'
                        type='text'
                        placeholder="Search by city name"
                        id="myInput"
                        onChange={handleCitySearchChange}
                        onKeyDown={(event) => {if (event.key === 'Enter') {getCityCards()}
                    }}>
                    </input>
                    <button
                        data-testid="submit-button"
                        disabled={submitDisabled}
                        className={`ml-12 px-6 rounded-xl border text-secondary bg-primary shadow-md hover:shadow-lg transition-shadow duration-100 ${submitDisabled ? '' : 'cursor-pointer'}`}
                        onClick={getCityCards}>Search
                    </button>
                    <button
                        data-testid="clear-button"
                        className='ml-12 px-6 rounded-xl border text-primary bg-secondary cursor-pointer'
                        onClick={clearCityCards}>Clear
                    </button>
                </div>
            </div>
        </>
  )
}

export default Search