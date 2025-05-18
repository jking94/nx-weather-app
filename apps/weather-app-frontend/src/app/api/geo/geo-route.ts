/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getGeoCoderInfoByCity(cityName: string): Promise<any[]> {
  console.log(`hotpink - getting geodata for ${cityName}`);
  const res = await fetch(`http://localhost:3001/api/${cityName}`)
  return await res.json()
}

export async function getCityInfoByLatLon(lat: number, lon: number): Promise<any[]> {
  console.log(`hotpink - getting weather data for lat: ${lat}, long: ${lon}`);
  const res = await fetch(`http://localhost:3001/api/location/${lat}/${lon}`)
  return await res.json()
}

