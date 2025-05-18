import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

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

  async getGeoCoderInfoByCity(cityName: string) {
    const ApiKey = this.configService.get<string>('OPEN_WEATHER_API_KEY');
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${ApiKey}`
    const response = await firstValueFrom(this.httpService.get(url));
    console.log('test')
    return response.data;
  }
}
