const GameCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 animate-pulse aspect-16/11">
      <div className="h-40 w-full bg-zinc-800" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-zinc-800 rounded w-3/4" />
        <div className="h-3 bg-zinc-800 rounded w-1/2" />
        <div className="h-3 bg-zinc-800 rounded w-2/3" />
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="h-6 w-16 bg-zinc-800 rounded" />
          <span className="h-6 w-20 bg-zinc-800 rounded" />
          <span className="h-6 w-14 bg-zinc-800 rounded" />
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;

