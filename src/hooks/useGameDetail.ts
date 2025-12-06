import { useQuery } from "@tanstack/react-query";
import {getGameDetails} from "../api/getGameDetail"
import type { GameDetail } from "../types/game";



export const useGameDetail = (id: number) =>
  useQuery<GameDetail, Error>({
    queryKey: ["games", id],
    queryFn: () => getGameDetails(id),
  });