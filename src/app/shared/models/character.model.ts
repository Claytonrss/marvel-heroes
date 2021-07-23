import { Thumbnail } from './thumbnail.model';

export class Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  stories: Container;
  series: Container;
  events: Container;
  comics: Container;
}

class Container {
  available: number;
  collectionURI: string;
  items: Item[];
}

class Item {
  resourceURI: string;
  name: string;
}
