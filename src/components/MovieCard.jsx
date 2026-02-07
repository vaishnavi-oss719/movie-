
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const FALLBACK_IMAGE =
    "https://via.placeholder.com/300x450?text=No+Image";

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : FALLBACK_IMAGE;

  return (
    <div
      className="relative h-[450px] rounded-xl overflow-hidden shadow-xl 
                 transition-transform duration-500 hover:scale-105"
      style={{
        backgroundImage: `url(${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 "></div>

      {/* content */}
      <div className="absolute bottom-0 w-full p-4 text-white z-10">
        <h2 className="font-bold text-lg truncate">
          {movie.Title}
        </h2>

        <p className="text-sm text-gray-300">
          Year: {movie.Year}
        </p>

        <Link to={`/movie/${movie.imdbID}`}>
          <button className="mt-3 w-full bg-gradient-to-r from-slate-900 to-slate-700 py-2 rounded-lg hover:opacity-90 cursor-pointer">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
