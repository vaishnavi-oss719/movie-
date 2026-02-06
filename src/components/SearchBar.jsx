export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full"
    />
  );
}
