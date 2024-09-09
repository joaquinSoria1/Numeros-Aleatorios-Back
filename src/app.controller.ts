import { Controller, Post, UseInterceptors } from '@nestjs/common';
import { TimestampInterceptor } from './timestamp.interceptor';

@Controller()
export class AppController {
  @Post('random')
  @UseInterceptors(TimestampInterceptor)
  getRandomNumber(): { value: number } {
    return { value: Math.floor(Math.random() * 100) + 1 };
  }
}