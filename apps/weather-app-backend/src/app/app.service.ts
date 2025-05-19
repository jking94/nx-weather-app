import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { LocationDataModel } from './types/location-data-model';
import { GeoCoderDataModel } from './types/geo-coder-data-model';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService, private configService: ConfigService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  async getUsers() {
    const response = await firstValueFrom(this.httpService.get('https://jsonplaceholder.typicode.com/users'));
    return response.data;
  }

  async getGeoCoderInfoByCity(cityName: string): Promise<GeoCoderDataModel> {
    const ApiKey = this.configService.get<string>('OPEN_WEATHER_API_KEY');
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${ApiKey}`
    const response = await firstValueFrom(this.httpService.get(url));
    const geoCoderDataModel: GeoCoderDataModel = response.data;
    return geoCoderDataModel;
  }

    async getLocationInfoByLatLon(lat: number, lon: number): Promise<LocationDataModel> {
    const ApiKey = this.configService.get<string>('OPEN_WEATHER_API_KEY');
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${ApiKey}`
    const response = await firstValueFrom(this.httpService.get(url));
    const locationDataModel: LocationDataModel = response.data;
    return locationDataModel;
  }
}
