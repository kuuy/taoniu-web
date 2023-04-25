import {Controller, Get, Render} from '@nestjs/common';
import {SearchService} from "../search/search.service";

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @Render('search/index')
  index() {
    return {
      message: this.searchService.all(),
    };
  }
}
