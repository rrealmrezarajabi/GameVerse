import { getScreenshots } from "../api/getGameScreenShots";
import type { Screenshot } from "../types/game";
import { useQuery } from "@tanstack/react-query";

export const useScreenshots = (gameId: number) => {
  return useQuery<Screenshot[], Error>({
    queryKey: ["screenshots", gameId],
    queryFn: () => getScreenshots(gameId),
    enabled: !!gameId,
  });
};
