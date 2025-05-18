import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData() {
    return this.appService.getData();
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get(':cityName')
  getGeoCoderInfoByCity(@Param('cityName') cityName: string) {
    return this.appService.getGeoCoderInfoByCity(cityName);
  }

  @Get('location/:lat/:lon')
  getLocationInfoByLatLon(@Param('lat') latitude: number, @Param('lon') longitude: number) {
    return this.appService.getLocationInfoByLatLon(latitude, longitude);
  }
}
