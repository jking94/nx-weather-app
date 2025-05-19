export type GeoCoderDataModel = GeoCoderData[]

export interface GeoCoderData {
  name: string
  lat: number
  lon: number
  country: string
  state: string
}