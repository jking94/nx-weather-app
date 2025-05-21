/* eslint-disable @typescript-eslint/no-explicit-any */
import { GeoCoderDataModel } from "@/app/types/geo-coder-data-model";
import { ApiResponse } from "./types";
import { GeoLocationData } from "@/app/types/geo-location-data";


export async function getGeoCoderInfoByCity(cityName: string): ApiResponse<GeoCoderDataModel> {
  try{
    const res = await fetch(`http://localhost:3001/api/${cityName}`)
    if(!res.ok) {
      throw new Error(`Failed to fetch geo data for ${cityName}`);
    }
    const geoCoderData = await res.json();
    return {data: geoCoderData}
  } catch (error: any) {
    return { error: error.message }
  }
}


export async function getMultipleCityInfoByLatLon(
  geoCoderDataModel: GeoCoderDataModel
): ApiResponse<GeoLocationData[]> {
  const locationUrl = 'http://localhost:3001/api/location/';
  try {
    const geoLocationData = await Promise.all(
      geoCoderDataModel.map(async (geoData) => {
        try {
          const res = await fetch(`${locationUrl}${geoData.lat}/${geoData.lon}`);
          if (!res.ok) {
            throw new Error();
          }

          const locationData = await res.json();
          return { geoData, locationData };
        } catch (error) {
          throw new Error(`Failed to fetch location for ${geoData.lat},${geoData.lon}`);
        }
      })
    );

    return { data: geoLocationData };
  } catch (error: any) {
    return { error: error.message };
  }
}
