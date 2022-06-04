import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 임의로 추가한 Get Route Handler
  @Get('/hi')
  getHi(): object {
    return { isSuccess: true, contents: 'Hi!', error: '' };
  }
}
