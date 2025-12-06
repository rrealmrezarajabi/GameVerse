import {api} from "../services/api"
import type { Game } from "../types/game";

interface GamesResponse {
  results: Game[];
}

export const getGames = async (genreId?: number): Promise<Game[]> => {
  const res = await api.get<GamesResponse>("/games", {
    params: {
      genres: genreId, 
    },
  });

  return res.data.results;
};
