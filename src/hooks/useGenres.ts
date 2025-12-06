import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../api/getGenres";

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });
