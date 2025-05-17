'use client'
import {getUsers} from './api/users/users-route';
import InteractiveButton from './components/interactive-button';

export default function Index() {

  return (
    <>
      <h1>Weather App</h1>
      <InteractiveButton onClick={getUsers} />
    </>
  )
}
