export class Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  series: Container;
  events: Container;
}

class Thumbnail {
  path: string;
  extension: string;
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
