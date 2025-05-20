import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { LocationDataModel } from './types/location-data-model';
import { GeoCoderDataModel } from './types/geo-coder-data-model';
import { mapWeatherErrorToStandardException } from './helpers';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name)

  constructor(private httpService: HttpService, private configService: ConfigService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async getUsers() {
    const response = await firstValueFrom(this.httpService.get('https://jsonplaceholder.typicode.com/users'));
    return response.data;
  }

  async getGeoCoderInfoByCity(cityName: string): Promise<GeoCoderDataModel> {
    try {
      const startTime = new Date().getTime();
      const ApiKey = this.configService.get<string>('OPEN_WEATHER_API_KEY');
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${ApiKey}`
      const response = await firstValueFrom(this.httpService.get(url));
      const geoCoderDataModel: GeoCoderDataModel = response.data;
      const endTime = new Date().getTime();
      const callDuration = endTime - startTime;
      //Log callDuration of API call to external service such as DataDog for metrics purposes
      return geoCoderDataModel;
    } catch (error) {
      this.logger.error('Failed to GET GeoCoder data by cityName')
      //Log to external service such as DataDog
        throw mapWeatherErrorToStandardException(error)
    }
  }

  async getLocationInfoByLatLon(lat: number, lon: number) {
    try {
      const startTime = new Date().getTime();
      const ApiKey = this.configService.get<string>('OPEN_WEATHER_API_KEY');
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${ApiKey}`
      const response = await firstValueFrom(this.httpService.get(url));
      const locationDataModel: LocationDataModel = response.data;
      const endTime = new Date().getTime();
      const callDuration = endTime - startTime;
      //Log callDuration of API call to external service such as DataDog for metrics purposes
      return locationDataModel;
    } catch (error) {
        this.logger.error('Failed to GET GeoCoder data by cityName')
        throw mapWeatherErrorToStandardException(error)
    }
  }
}
