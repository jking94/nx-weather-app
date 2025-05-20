import { GeoCoderData, GeoCoderDataModel } from "@/app/types/geo-coder-data-model";
import { LocationDataModel } from "@/app/types/location-data-model";
import { GeoLocationData } from "@/app/types/geo-location-data";


export async function getGeoCoderInfoByCity(cityName: string): Promise<GeoCoderDataModel> {
  const res = await fetch(`http://localhost:3001/api/${cityName}`)
  return await res.json()
}

export async function getCityInfoByLatLon(lat: number, lon: number): Promise<LocationDataModel> {
  const res = await fetch(`http://localhost:3001/api/location/${lat}/${lon}`)
  return await res.json()
}

export async function getMultipleCityInfoByLatLon(geoCoderDataModel: GeoCoderDataModel): Promise<GeoLocationData[]> {
  const locationUrl = 'http://localhost:3001/api/location/'

  const geoLocationDataArr: GeoLocationData[] = await Promise.all( geoCoderDataModel.map(async (geoData: GeoCoderData) => {
      const locationData = await fetch(`${locationUrl}${geoData.lat}/${geoData.lon}`)
      const resolvedLocationData = await locationData.json();
      const pairedData: {geoData: GeoCoderData, locationData: LocationDataModel} = {
        geoData,
        locationData: resolvedLocationData
      }
      return pairedData;
  }));

  return geoLocationDataArr;
}

