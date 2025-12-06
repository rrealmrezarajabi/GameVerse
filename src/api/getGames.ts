import {api} from "../services/api"
import type { Game } from "../types/game";

interface GamesResponse {
  results: Game[];
}

export const getGames = async (genreId?: number , page:number = 1): Promise<Game[]> => {
  const res = await api.get<GamesResponse>("/games", {
    params: {
      genres: genreId, 
      page,
      page_size:12
    },
  });

  return res.data.results;
};
