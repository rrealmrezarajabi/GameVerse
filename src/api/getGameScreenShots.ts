import {api} from "../services/api";
import type { Screenshot } from "../types/game";

interface ScreenshotResponse {
  results: Screenshot[];
}

export const getScreenshots = async (
  gameId: number
): Promise<Screenshot[]> => {
  const res = await api.get<ScreenshotResponse>(
    `/games/${gameId}/screenshots`
  );
  return res.data.results;
};
