import { useGameDetail } from "../hooks/useGameDetail";
import { useParams } from "react-router-dom";
import { useScreenshots } from "../hooks/useScreenShots";
import { useTrailers } from "../hooks/useGameTrailer";

const GameDetail = () => {
  const { id } = useParams();
  const gameId = Number(id);

  const { data: game, isLoading, error } = useGameDetail(gameId);
  const { data: screenshots } = useScreenshots(gameId);
  const { data: trailers } = useTrailers(gameId);
  const mainTrailer = trailers?.[0];

  if (isLoading)
    return <p className="text-zinc-400 text-center py-20">Loading...</p>;
  if (error || !game)
    return (
      <p className="text-red-400 text-center py-20">Failed to load game</p>
    );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <div className="relative">
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-96 object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <h1 className="absolute bottom-8 left-8 text-5xl font-black tracking-tight">
          {game.name}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Rating + Metacritic */}
        <div className="flex flex-wrap gap-6">
          <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-2xl px-8 py-5">
            <p className="text-sm text-zinc-500 uppercase tracking-wider">
              Rating
            </p>
            <p className="text-3xl font-bold text-pink-400 mt-1">
              {game.rating.toFixed(1)}
            </p>
          </div>

          {game.metacritic && (
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-2xl px-8 py-5">
              <p className="text-sm text-zinc-500 uppercase tracking-wider">
                Metacritic
              </p>
              <p
                className={`text-3xl font-bold mt-1 ${
                  game.metacritic >= 75
                    ? "text-green-400"
                    : game.metacritic >= 50
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {game.metacritic}
              </p>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="max-w-4xl">
          <p className="text-lg leading-relaxed text-zinc-300 whitespace-pre-line">
            {game.description_raw}
          </p>
        </div>

        {/* Trailer */}
        {mainTrailer && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-zinc-100">Trailer</h2>
            <video
              controls
              src={mainTrailer.data.max}
              className="w-full max-w-5xl rounded-2xl shadow-2xl"
            />
          </div>
        )}

        {/* Screenshots */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-zinc-100">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {screenshots?.map((shot) => (
              <div
                key={shot.id}
                className="overflow-hidden rounded-xl border border-zinc-800 shadow-lg hover:border-pink-500/50 transition-all duration-300"
              >
                <img
                  src={shot.image}
                  alt="screenshot"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
