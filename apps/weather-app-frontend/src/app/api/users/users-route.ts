/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getUsers(): Promise<any[]> {
  console.log('hotpink - hitting get users');
  const res = await fetch('http://localhost:3001/api/users')
  return await res.json()
}
