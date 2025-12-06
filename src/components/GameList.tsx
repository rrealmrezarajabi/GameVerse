import { useGames } from "../hooks/useGames";
import { useGenre } from "../context/GenreContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GameSort from "./GameSort";

const GameList = () => {
  const { selectedGenre } = useGenre();
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const [searchText, setSearchText] = useState("");

  const {
    data: games,
    isLoading,
    error,
  } = useGames(selectedGenre?.id, page, sortOrder, );
  useEffect(() => {
    setPage(1);
  }, [selectedGenre]);


  let temp = games?.filter((game)=>{
    return game.name.toLowerCase().includes(searchText.toLowerCase())
  })

  if (isLoading)
    return <p className="text-sm text-zinc-400">Loading games...</p>;

  if (error)
    return <p className="text-sm text-red-400">Failed to load games</p>;

  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <input
          type="text"
          placeholder="Search games..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="
        w-full max-w-sm
        rounded-lg bg-zinc-900 border border-zinc-700
        px-4 py-2 text-sm text-white
        placeholder:text-zinc-500
        focus:outline-none focus:ring-1 focus:ring-pink-400
      "
        />

        <GameSort value={sortOrder} onChange={(value) => setSortOrder(value)} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {temp?.map((game) => (
          <Link key={game.id} to={`/games/${game.id}`} className="block">
            <div
              className="overflow-hidden rounded-xl bg-zinc-900
                 hover:scale-[1.02] transition-transform cursor-pointer"
            >
              {game.background_image && (
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="h-40 w-full object-cover"
                />
              )}

              <div className="p-4">
                <h3 className="text-white text-lg font-semibold">
                  {game.name}
                </h3>

                <div className="flex gap-1 mb-2">
                  <p className="text-sm text-zinc-400">Rating :</p>
                  <span className="text-pink-400">{game.rating ?? "N/A"}</span>
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
          </Link>
        ))}
      </div>
      <div className="mb-4 text-white flex items-center justify-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="
      flex items-center gap-1 rounded-lg px-4 py-2
      text-sm font-medium
      border border-pink-400
      transition-all
      hover:bg-zinc-800 hover:border-zinc-600
      disabled:opacity-40 disabled:cursor-not-allowed
    "
        >
          ← Prev
        </button>

        <div className="flex items-center gap-2 rounded-lg border border-pink-400 px-4 py-2">
          <span className="text-xs text-white">Page</span>
          <span className="text-sm font-semibold text-white">{page}</span>
        </div>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="
      flex items-center gap-1 rounded-lg px-4 py-2
      text-sm font-medium
      border border-pink-400
      transition-all
      hover:bg-zinc-800 hover:border-zinc-600
    "
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default GameList;
