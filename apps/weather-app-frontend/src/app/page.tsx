'use client'
import { getGeoCoderInfoByCity } from './api/geo/geo-route';
import {getUsers} from './api/users/users-route';
import React from 'react'

export default function Index() {

  const [users, setUsers] = React.useState<any[]>([])
  const [cityNameSearch, setCityNameSearch] = React.useState<string>('')
  const [cities, setCities] = React.useState<any>(null)

  const handlGetUsers = async () => {
    const users = await getUsers()
    setUsers(users)
  }

  const handleCitySearchChange = (event: any) => {
    setCityNameSearch(event.target.value);
  }

  const handleCitySearchSubmit = async () => {
    const cityData = await getGeoCoderInfoByCity(cityNameSearch)
    console.log('hotpink - cityData: ', cityData);
  }

  return (
    <>
      <h1>Weather App</h1>
      <div id="city-name-search-dropdown" className="dropdown-content">
        <input type='text' placeholder="Search by city name" id="myInput" onKeyUp={handleCitySearchChange}></input>
        {cities && cities.map((city: any) => {
          return <a key={city.lat}>{city.name}</a>
        })}
      </div>
      <p>Current Search: {cityNameSearch}</p>
      <button onClick={handleCitySearchSubmit}>Click to search city</button>

      {/* {users && <ul>
        {users.map((user: any) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>}
      <button onClick={handlGetUsers}>Get Users</button> */}
    </>
  )
}
