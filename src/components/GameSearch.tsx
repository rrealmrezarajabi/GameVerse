interface Props {
  value: string;
  onChange: (value: string) => void;
}

const GameSearch = ({ value, onChange }: Props) => {
  return (
    <input
      type="text"
      placeholder="Search games..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full sm:max-w-sm rounded-lg bg-zinc-900 border border-zinc-700 px-3 sm:px-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-pink-400"
    />
  );
};

export default GameSearch;
