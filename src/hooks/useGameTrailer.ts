import { useQuery } from "@tanstack/react-query";
import {getTrailers} from "../api/getGameTrailer"
import type  { Trailer } from "../types/game";

export const useTrailers = (gameId: number) => {
  return useQuery<Trailer[], Error>({
    queryKey: ["trailers", gameId],
    queryFn: () => getTrailers(gameId),
    enabled: !!gameId,
  });
};
