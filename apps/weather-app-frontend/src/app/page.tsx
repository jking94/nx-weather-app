'use client'
import {getUsers} from './api/users/users-route';
import React from 'react'

export default function Index() {

  const [users, setUsers] = React.useState<any[]>([])

  const handlGetUsers = async () => {
    const users = await getUsers()
    setUsers(users)
  }

  return (
    <>
      <h1>Weather App</h1>
      {users && <ul>
        {users.map((user: any) => {
          return <li key={user.id}>{user.name}</li>
        })}
      </ul>}
      <button onClick={handlGetUsers}>Get Users</button>
    </>
  )
}
