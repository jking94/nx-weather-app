/* eslint-disable @typescript-eslint/no-explicit-any */
export async function getGeoCoderInfoByCity(cityName: string): Promise<any[]> {
  console.log(`hotpink - getting geodata for ${cityName}`);
  const res = await fetch(`http://localhost:3001/api/${cityName}`)
  return await res.json()
}
