export interface GamePlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  rating: number;
  platforms: GamePlatform[];
  released: string;
}

export interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  rating: number;
  metacritic: number;
  platforms: GamePlatform[];
}
export interface Screenshot {
  id: number;
  image: string;
}
export interface Trailer {
  id: number;
  name: string;
  data: {
    max: string;
  };
}
