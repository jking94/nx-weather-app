import { GeoCoderDataModel } from "../types/geo-coder-data-model";
import { LatLonPair } from "../types/lat-lon-pairs";

export const createLatLonPairs = (geoCoderData: GeoCoderDataModel): LatLonPair[] => {
    return geoCoderData.map((cityData) => {
        return {
            lat: cityData.lat,
            lon: cityData.lon
        }
    })
}