import { useGames } from "../hooks/useGames";
import { useGenre } from "../context/GenreContext";

const GameList = () => {
  const { selectedGenre } = useGenre();
  const { data: games, isLoading, error } = useGames(selectedGenre?.id);

  if (isLoading)
    return <p className="text-sm text-zinc-400">Loading games...</p>;

  if (error)
    return <p className="text-sm text-red-400">Failed to load games</p>;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {games?.map((game) => (
          <div
            key={game.id}
            className="overflow-hidden rounded-xl bg-zinc-900 hover:scale-[1.02] transition-transform"
          >
            {game.background_image && (
              <img
                src={game.background_image}
                alt={game.name}
                className="h-40 w-full object-cover"
              />
            )}

            <div className="p-4">
              <h3 className="text-white text-lg font-semibold">{game.name}</h3>
              <div className="flex gap-1 mb-2">
                <p className="text-sm text-zinc-400 mb-2">Rating : </p>
                <span className="text-pink-400"> {game.rating ?? "N/A"}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {game.platforms?.map(({ platform }) => (
                  <span
                    key={platform.id}
                    className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
                  >
                    {platform.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameList;
