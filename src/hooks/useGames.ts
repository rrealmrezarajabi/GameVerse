import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api/getGames";
import type { Game } from "../types/game";

export const useGames = (genreId?: number) => {
  return useQuery<Game[], Error>({
    queryKey: ["games", genreId],
    queryFn: () => getGames(genreId),
  });
};
