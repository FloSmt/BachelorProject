import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dummyfill/:amount')
  dummyFill(@Param('amount') amount: number) {
    return this.appService.dummyFill(amount);
  }
}
