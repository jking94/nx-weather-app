import { Controller, Get, Param, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './filters/http-exception-filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':cityName')
  @UseFilters(HttpExceptionFilter)
  getLocationDataByCityName(@Param('cityName') cityName: string) {
    return this.appService.getLocationDataByCityName(cityName);
  }

  @Get('location/:lat/:lon')
  @UseFilters(HttpExceptionFilter)
  getLocationDetailsByLatLon(@Param('lat') latitude: number, @Param('lon') longitude: number) {
    return this.appService.getLocationDetailsByLatLon(latitude, longitude);
  }
}
