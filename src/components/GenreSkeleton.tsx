const GenreSkeleton = () => {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-3 bg-zinc-900/60 border border-zinc-800 animate-pulse">
      <div className="h-10 w-10 rounded-md bg-zinc-800" />
      <div className="flex-1 space-y-2">
        <div className="h-3.5 w-2/3 bg-zinc-800 rounded" />
        <div className="h-3 w-1/2 bg-zinc-800 rounded" />
      </div>
    </div>
  );
};

export default GenreSkeleton;



