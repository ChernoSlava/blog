import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
import { articles } from './article';
import { Render, Param, ParseIntPipe } from '@nestjs/common';
import { Article } from './article.model';
@Controller()
export class AppController {
  @Get()
  @Render('index')
  index() {
    return { articles };
  }

  @Get('create')
  @Render('createArticle')
  getCreateForm(): void {
    return;
  }

  @Post('articles')
  @Redirect('/', 301)
  create(@Body() body: any): void {
    const id = articles.length + 1;
    const article = new Article(body.title, body.content, id);
    articles.push(article);
  }

  @Get(':id')
  @Render('article')
  getById(@Param('id', ParseIntPipe) id: number) {
    return articles.find((article) => article.id === id);
  }
}
