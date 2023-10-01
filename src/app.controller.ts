import { Controller, Get } from '@nestjs/common';
import { articles } from './article';
import { Render, Param, ParseIntPipe } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  @Render('index')
  index() {
    return { articles };
  }

  @Get(':id')
  @Render('article')
  getById(@Param('id', ParseIntPipe) id: number) {
    return articles.find((article) => article.id === id);
  }
}
