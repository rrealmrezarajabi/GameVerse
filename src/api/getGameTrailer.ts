import {api} from "../services/api";
import type { Trailer } from "../types/game";

interface TrailerResponse {
  results: Trailer[];
}

export const getTrailers = async (gameId: number): Promise<Trailer[]> => {
  const res = await api.get<TrailerResponse>(
    `/games/${gameId}/movies`
  );
  return res.data.results;
};
