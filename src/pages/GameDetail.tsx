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
    return (
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="animate-pulse">
          <div className="h-64 md:h-96 bg-zinc-900" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8">
            <div className="h-12 bg-zinc-900 rounded w-3/4" />
            <div className="flex flex-wrap gap-4">
              <div className="h-24 bg-zinc-900 rounded-xl w-32" />
              <div className="h-24 bg-zinc-900 rounded-xl w-32" />
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-zinc-900 rounded w-full" />
              <div className="h-4 bg-zinc-900 rounded w-5/6" />
              <div className="h-4 bg-zinc-900 rounded w-4/6" />
            </div>
          </div>
        </div>
      </div>
    );

  if (error || !game)
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <p className="text-red-400 text-center text-lg">Failed to load game</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="relative">
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-48 sm:h-64 md:h-96 object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
        <h1 className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
          {game.name}
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 space-y-8 md:space-y-12">
        <div className="flex flex-wrap gap-4 md:gap-6">
          <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 flex-1 min-w-[140px]">
            <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
              Rating
            </p>
            <p className="text-2xl md:text-3xl font-bold text-pink-400 mt-1">
              {game.rating?.toFixed(1) || "N/A"}
            </p>
            {game.ratings_count && (
              <p className="text-xs text-zinc-500 mt-1">
                {game.ratings_count.toLocaleString()} ratings
              </p>
            )}
          </div>

          {game.metacritic && (
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 flex-1 min-w-[140px]">
              <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
                Metacritic
              </p>
              <p
                className={`text-2xl md:text-3xl font-bold mt-1 ${
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

          {game.released && (
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 flex-1 min-w-[140px]">
              <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
                Released
              </p>
              <p className="text-lg md:text-xl font-bold text-pink-400 mt-1">
                {game.released}
              </p>
            </div>
          )}

          {game.playtime && (
            <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl md:rounded-2xl px-6 md:px-8 py-4 md:py-5 flex-1 min-w-[140px]">
              <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-wider">
                Playtime
              </p>
              <p className="text-lg md:text-xl font-bold text-blue-400 mt-1">
                {game.playtime}h
              </p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-6">
            {game.description_raw && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-zinc-100">
                  About
                </h2>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed text-zinc-300 whitespace-pre-line">
                  {game.description_raw}
                </p>
              </div>
            )}

            {game.platforms && game.platforms.length > 0 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-zinc-100">
                  Platforms
                </h2>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map(({ platform }) => (
                    <span
                      key={platform.id}
                      className="rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2 text-xs md:text-sm text-zinc-300 hover:border-pink-500/50 transition-colors"
                    >
                      {platform.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {game.genres && game.genres.length > 0 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-zinc-100">
                  Genres
                </h2>
                <div className="flex flex-wrap gap-2">
                  {game.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="rounded-lg bg-pink-500/20 border border-pink-500/30 px-3 py-2 text-xs md:text-sm text-pink-300 hover:bg-pink-500/30 transition-colors"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {game.developers && game.developers.length > 0 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-zinc-100">
                  Developers
                </h2>
                <div className="flex flex-wrap gap-2">
                  {game.developers.map((developer) => (
                    <span
                      key={developer.id}
                      className="rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2 text-xs md:text-sm text-zinc-300 hover:border-blue-500/50 transition-colors"
                    >
                      {developer.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {game.publishers && game.publishers.length > 0 && (
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-zinc-100">
                  Publishers
                </h2>
                <div className="flex flex-wrap gap-2">
                  {game.publishers.map((publisher) => (
                    <span
                      key={publisher.id}
                      className="rounded-lg bg-zinc-800 border border-zinc-700 px-3 py-2 text-xs md:text-sm text-zinc-300 hover:border-purple-500/50 transition-colors"
                    >
                      {publisher.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {mainTrailer && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-zinc-100">
              Trailer
            </h2>
            <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-zinc-900">
              <video
                controls
                src={mainTrailer.data.max}
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {screenshots && screenshots.length > 0 && (
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-zinc-100">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {screenshots.map((shot) => (
                <div
                  key={shot.id}
                  className="overflow-hidden rounded-lg md:rounded-xl border border-zinc-800 shadow-lg hover:border-pink-500/50 transition-all duration-300 cursor-pointer group"
                >
                  <img
                    src={shot.image}
                    alt="screenshot"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetail;
