import { useGenres } from "../hooks/useGenres";
import { useGenre } from "../context/GenreContext";

const GenresList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const { selectedGenre, setSelectedGenre } = useGenre();

  if (isLoading)
    return <p className="text-xs text-pink-400/70 animate-pulse">Loading...</p>;

  if (error) return <p className="text-xs text-red-400">Failed to load</p>;

  return (
    <div className="space-y-1 ">
      {genres?.map((genre) => {
        const isActive = selectedGenre?.id === genre.id;

        return (
          <div
            key={genre.id}
            onClick={() => setSelectedGenre(genre)} 
            className={`
              group flex items-center gap-3 rounded-lg px-3 py-3 cursor-pointer
              transition-all duration-300
              ${
                isActive
                  ? "bg-zinc-800/90 shadow-lg shadow-pink-500/20"
                  : "hover:bg-zinc-800/80 hover:shadow-lg hover:shadow-pink-500/10"
              }
            `}
          >
            <img
              src={genre.image_background}
              alt={genre.name}
              className={`
                h-10 w-10 rounded-md object-cover ring-1 transition-all duration-300
                ${
                  isActive
                    ? "ring-pink-500/70"
                    : "ring-zinc-700 group-hover:ring-pink-500/50"
                }
              `}
              loading="lazy"
            />

            <div className="flex-1 min-w-0">
              <p
                className={`
                  text-sm font-medium truncate transition-colors
                  ${
                    isActive
                      ? "text-pink-300"
                      : "text-zinc-100 group-hover:text-pink-300"
                  }
                `}
              >
                {genre.name}
              </p>

              <p
                className={`
                  text-xs transition-colors
                  ${
                    isActive
                      ? "text-pink-400/80"
                      : "text-zinc-500 group-hover:text-pink-400/70"
                  }
                `}
              >
                {genre.games_count.toLocaleString()} games
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GenresList;
