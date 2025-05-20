import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('articles')
  getArticles() {
    return this.appService.getArticlesWithoutImageUrl();
  }

  @Get('articles/:id')
  getArticleById(@Param('id') id: number) {
    return this.appService.getArticleById(id);
  }

  @Get('dummyfill/:amount')
  dummyFill(@Param('amount') amount: number) {
    return this.appService.dummyFill(amount);
  }
}
