import { createContext,useContext, useState, type ReactNode } from "react";

export interface BookMarkItem {
  id: number;
  name: string;
  background_image: string;
}

interface BookMarkContextType {
  items: BookMarkItem[];
  addToBookMark: (game: BookMarkItem) => void;
  removeFromBookMark: (id: number) => void;
  toggleBookMark: (game: BookMarkItem) => void;
  isBookMarked: (id: number) => boolean;
}

interface Props {
  children: ReactNode;
}

export const BookMarkContext = createContext<BookMarkContextType | undefined>(
  undefined
);

export const BookMarkProvider = ({ children }: Props) => {
  const [items, setItems] = useState<BookMarkItem[]>([]);

  const addToBookMark = (game: BookMarkItem) => {
    setItems((prev) => {
      if (prev.some((x) => x.id === game.id)) return prev;
      return [...prev, game];
    });
  };

  const removeFromBookMark = (id: number) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  };

  const isBookMarked = (id: number) => items.some((x) => x.id === id);

  const toggleBookMark = (game: BookMarkItem) => {
    setItems((prev) => {
      const exists = prev.some((x) => x.id === game.id);
      return exists ? prev.filter((x) => x.id !== game.id) : [...prev, game];
    });
  };

  return (
    <BookMarkContext.Provider
      value={{
        items,
        addToBookMark,
        removeFromBookMark,
        toggleBookMark,
        isBookMarked,
      }}
    >
      {children}
    </BookMarkContext.Provider>
  );
};
export const useBookMark = () => {
  const context = useContext(BookMarkContext);

  if (!context) {
    throw new Error("useBookMark must be used within a BookMarkProvider");
  }

  return context;
};