import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useBookMark } from "../context/BookMarkContext";
import { FaTimes, FaTrash } from "react-icons/fa";

type Props = {
  open: boolean;
  onClose: () => void;
};

const BookmarkModal = ({ open, onClose }: Props) => {
  const { items, removeFromBookMark } = useBookMark();

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div
        className="absolute left-1/2 top-1/2 w-[92%] sm:w-[90%] max-w-2xl
        -translate-x-1/2 -translate-y-1/2
        rounded-xl sm:rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl max-h-[90vh] flex flex-col"
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h2 className="text-white text-lg font-semibold">
            Bookmarks ({items.length})
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-300 hover:bg-zinc-900 hover:text-white"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-3 sm:p-4 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <p className="text-zinc-400 text-sm">No bookmarked games yet.</p>
          ) : (
            <div className="space-y-3">
              {items.map((game) => (
                <div
                  key={game.id}
                  className="flex items-center gap-3 rounded-xl
                  border border-zinc-800 bg-zinc-900/50 p-3"
                >
                  <div className="h-14 w-20 rounded-lg overflow-hidden bg-zinc-800 shrink-0">
                    {game.background_image && (
                      <img
                        src={game.background_image}
                        alt={game.name}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold truncate">
                      {game.name}
                    </p>
                    <Link
                      to={`/games/${game.id}`}
                      onClick={onClose}
                      className="text-sm text-pink-400 hover:underline"
                    >
                      View details
                    </Link>
                  </div>

                  <button
                    onClick={() => removeFromBookMark(game.id)}
                    className="p-2 rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white"
                    aria-label="Remove bookmark"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg border border-pink-400 px-4 py-2
            text-sm text-white hover:bg-zinc-900"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookmarkModal;
