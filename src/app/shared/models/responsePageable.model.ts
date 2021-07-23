import { Character } from './character.model';
import { Comic } from './comic.model';

export class ResponsePageable {
  count: number;
  limit: number;
  offset: number;
  results: Character[] | Comic[];
  total: number;
}
