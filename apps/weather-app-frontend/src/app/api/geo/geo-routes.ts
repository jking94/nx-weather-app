/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeoCoderData, GeoCoderDataModel } from "@/app/types/geo-coder-data-model";
import { LocationDataModel } from "@/app/types/location-data-model";
import { mapOpenWeatherDataToLocationCardType, matchLocationDataToCorrespondingGeoData } from "./helpers";
import { LocationCardType } from "@/app/types/location-card";


export async function getGeoCoderInfoByCity(cityName: string): Promise<GeoCoderDataModel> {
  const res = await fetch(`http://localhost:3001/api/${cityName}`)
  return await res.json()
}

export async function getCityInfoByLatLon(lat: number, lon: number): Promise<LocationDataModel> {
  const res = await fetch(`http://localhost:3001/api/location/${lat}/${lon}`)
  return await res.json()
}

export async function getMultipleCityInfoByLatLon(geoCoderDataModel: GeoCoderDataModel): Promise<LocationCardType[]> {
  const locationUrl = 'http://localhost:3001/api/location/'

  const formattedUrls = geoCoderDataModel.map((geoData: GeoCoderData) => {
    return `${locationUrl}${geoData.lat}/${geoData.lon}`
  })

  const locationData = await Promise.all(
    formattedUrls.map((url) => {
      return fetch(url)
    }
  ));

  const resolvedLocationData: LocationDataModel[] = await Promise.all(locationData.map(location => location.json()))

  const geoLocationData = matchLocationDataToCorrespondingGeoData(resolvedLocationData, geoCoderDataModel)

  const cards: LocationCardType[] = mapOpenWeatherDataToLocationCardType(geoLocationData)

  return cards
}

