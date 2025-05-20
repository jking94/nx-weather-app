import { BadRequestException, HttpException, InternalServerErrorException, NotFoundException, UnauthorizedException } from "@nestjs/common";

  export const mapWeatherErrorToStandardException = (error: any): HttpException => {
    console.log('hotpink - error: ', error)
    const statusCode = error?.status;

    switch (statusCode) {
      case 400:
        return new BadRequestException();
      case 401:
        return new UnauthorizedException();
      case 404:
        return new NotFoundException();
      default:
        return new InternalServerErrorException();
    }
  }