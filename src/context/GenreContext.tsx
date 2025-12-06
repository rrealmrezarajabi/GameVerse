import { createContext, useContext, useState } from "react";
import type { Genre } from "../types/genre";

interface GenreContextType {
  selectedGenre: Genre | null;
  setSelectedGenre: (genre: Genre | null) => void;
}

const GenreContext = createContext<GenreContextType | undefined>(undefined);

export const GenreProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <GenreContext.Provider value={{ selectedGenre, setSelectedGenre }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => {
  const context = useContext(GenreContext);
  if (!context) {
    throw new Error("useGenre must be used within GenreProvider");
  }
  return context;
};
