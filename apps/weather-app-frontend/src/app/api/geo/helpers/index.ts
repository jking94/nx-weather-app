import { GeoCoderData, GeoCoderDataModel } from "@/app/types/geo-coder-data-model";
import { GeoLocationData } from "@/app/types/geo-location-data";
import { LocationCardType } from "@/app/types/location-card";
import { LocationDataModel } from "@/app/types/location-data-model";

export const mapOpenWeatherDataToLocationCardType = (geoLocationData: GeoLocationData[]): LocationCardType[] => {
    return geoLocationData.map((geoLocationData) => {
            const {geoData, location} = geoLocationData;
            const baseData = {
                cityName: geoData.name,
                stateName: geoData.state,
                countryName: geoData.country,
                currentTemp: location.main.temp,
                feelsLikeTemp: location.main.feels_like,
                dailyHigh: location.main.temp_max,
                dailyLow: location.main.temp_min,
            }
        const weatherDescriptions: string[] = location.weather.map((weather) => {
            return weather.main
        })
        return {...baseData, weatherDesc: weatherDescriptions}
    })
}

export const matchLocationDataToCorrespondingGeoData = (locationDataModels: LocationDataModel[], geoCoderDataModel: GeoCoderDataModel): GeoLocationData[] => {
    return locationDataModels.map((location) => {
        return {
            location: location,
            geoData: geoCoderDataModel.find((geoCoderData: GeoCoderData)=> {
                return parseFloat(geoCoderData.lat.toFixed(4)) === location.coord.lat && parseFloat(geoCoderData.lon.toFixed(4)) === location.coord.lon
            }) as GeoCoderData
        }
    })
}