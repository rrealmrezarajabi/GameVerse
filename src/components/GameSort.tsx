interface Props {
  value: string;
  onChange: (value: string) => void;
}

const GameSort = ({ value, onChange }: Props) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full sm:w-auto rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-pink-400"
    >
      <option value="">Relevance</option>
      <option value="-rating">Rating</option>
      <option value="-released">Newest</option>
      <option value="name">Name (A-Z)</option>
    </select>
  );
};

export default GameSort;
