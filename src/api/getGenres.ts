import { api } from "../services/api";
import type { Genre } from "../types/genre";

interface GenreRes {
  count: number;
  results: Genre[];
}

export const getGenres = async (): Promise<Genre[]> => {
  const res = await api.get<GenreRes>("/genres");
  return res.data.results;
};
