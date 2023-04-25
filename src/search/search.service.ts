import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {
  all(): string {
    return 'Hello Search!';
  }
}
