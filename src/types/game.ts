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

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

export interface Developer {
  id: number;
  name: string;
  slug: string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
}

export interface GameDetail {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  rating: number;
  metacritic: number;
  platforms: GamePlatform[];
  released: string;
  genres: Genre[];
  developers: Developer[];
  publishers: Publisher[];
  playtime: number;
  ratings_count: number;
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
