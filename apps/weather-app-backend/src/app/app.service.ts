import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  async getUsers() {
     const response = await firstValueFrom(this.httpService.get('https://jsonplaceholder.typicode.com/users'));
     return response.data;
  }
}
