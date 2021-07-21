import { Character } from './character.model';

export class ResponsePageable {
  count: number;
  limit: number;
  offset: number;
  results: Character[];
  total: number;
}
