import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { articles } from './article';
import { Render, Param, ParseIntPipe } from '@nestjs/common';
@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return { articles };
  }

  @Get('articles/:id')
  @Render('article')
  getById(@Param('id', ParseIntPipe) id: number) {
    return articles.find((article) => article.id === id);
  }
}
