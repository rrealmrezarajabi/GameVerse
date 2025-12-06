import { useGenres } from "../hooks/useGenres";

const GenresList = () => {
  const { data: genres, isLoading, error } = useGenres();

  if (isLoading)
    return <p className="text-xs text-pink-400/70 animate-pulse">Loading...</p>;

  if (error) return <p className="text-xs text-red-400">Failed to load</p>;

  return (
    <div className="space-y-1">
      {genres?.map((genre) => (
        <div
          key={genre.id}
          className="group flex items-center gap-3 rounded-lg px-3 py-3 cursor-pointer
                     transition-all duration-300
                     hover:bg-zinc-800/80 hover:shadow-lg hover:shadow-pink-500/10"
        >
          <img
            src={genre.image_background}
            alt={genre.name}
            className="h-10 w-10 rounded-md object-cover ring-1 ring-zinc-700 group-hover:ring-pink-500/50 transition-all duration-300"
            loading="lazy"
          />

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-zinc-100 truncate group-hover:text-pink-300 transition-colors">
              {genre.name}
            </p>
            <p className="text-xs text-zinc-500 group-hover:text-pink-400/70 transition-colors">
              {genre.games_count.toLocaleString()} games
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenresList;
