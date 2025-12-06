import {api} from "../services/api";
import type { GameDetail } from "../types/game";

export const getGameDetails = async (id: number): Promise<GameDetail> => {
  const res = await api.get(`/games/${id}`);
  return res.data;
};
