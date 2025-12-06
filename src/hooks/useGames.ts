import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api/getGames";
import type { Game } from "../types/game";

export const useGames = (genreId?: number , page:number = 1) => {
  return useQuery<Game[], Error>({
    queryKey: ["games", genreId,page],
    queryFn: () => getGames(genreId,page),
    
    
  });
};
