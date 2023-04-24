import {Controller, Get, Render} from "@nestjs/common";
import { ArticlesService } from "../articles/articles.service";

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getHello(): string {
    return this.articlesService.getHello();
  }

  @Get('/:id([a-z0-9]{20})')
  @Render('articles/detail')
  detail() {
    return {
      message: this.articlesService.detail(),
    };
  }
}
