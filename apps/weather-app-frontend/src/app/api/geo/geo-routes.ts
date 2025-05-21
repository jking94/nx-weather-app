import { GeoCoderData, GeoCoderDataModel } from "@/app/types/geo-coder-data-model";
import { LocationDataModel } from "@/app/types/location-data-model";
// import { GeoLocationData } from "@/app/types/geo-location-data";
import { GeoLocationHandled } from "./types";


export async function getGeoCoderInfoByCity(cityName: string): Promise<GeoCoderDataModel | null> {
  const res = await fetch(`http://localhost:3001/api/${cityName}`)
  if(res.ok){
    return await res.json()
  } return null
}

export async function getMultipleCityInfoByLatLon(geoCoderDataModel: GeoCoderDataModel): Promise<GeoLocationHandled[] | null> {
    const locationUrl = 'http://localhost:3001/api/location/'

    const geoLocationHandledData: GeoLocationHandled[] = await Promise.all( geoCoderDataModel.map(async (geoData: GeoCoderData) => {
      const locationData = await fetch(`${locationUrl}${geoData.lat}/${geoData.lon}`)
      if(locationData.ok){
        const resolvedLocationData = await locationData.json();
        const pairedData: {geoData: GeoCoderData, locationData: LocationDataModel} = {
          geoData,
          locationData: resolvedLocationData
        }
        return pairedData;
      } else {
        return { error: true }
      }
    }));
    const isError = geoLocationHandledData.find((handledDataObj) => {
      return Object.hasOwn(handledDataObj, 'error')
    })
    if(isError){
      return null
    } else {
      return geoLocationHandledData
    }
}

