import { GeoCoderData } from "@/app/types/geo-coder-data-model";
import { LocationCardType } from "@/app/types/location-card";
import { LocationDataModel } from "@/app/types/location-data-model";

export const mapOpenWeatherDataToLocationCardType = (locationDataModel: LocationDataModel, geoCoderData: GeoCoderData): LocationCardType => {
        const baseData = {
            cityName: geoCoderData.name,
            stateName: geoCoderData.state,
            countryName: geoCoderData.country,
            currentTemp: locationDataModel.main.temp,
            feelsLikeTemp: locationDataModel.main.feels_like,
            dailyHigh: locationDataModel.main.temp_max,
            dailyLow: locationDataModel.main.temp_min,
        }
        const weatherDescriptions: string[] = locationDataModel.weather.map((weather) => {
            return weather.main
        })
        return {...baseData, weatherDesc: weatherDescriptions}
}