import { GeoCoderData } from "./geo-coder-data-model"
import { LocationDataModel } from "./location-data-model"

export type GeoLocationData = {
    location: LocationDataModel
    geoData: GeoCoderData
}