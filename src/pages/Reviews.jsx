import { Link } from "react-router-dom";

export default function Reviews() {
  const reviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

  if (reviews.length === 0) {
    return (
      <p className="text-center mt-10 text-xl">
        No reviewed movies yet 😢
      </p>
    );
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {reviews.map((movie) => (
        <div
          key={movie.imdbID}
          className="bg-slate-800 text-white rounded-lg p-4"
        >
          <img
            src={movie.poster}
            className="h-[300px] w-full object-cover rounded"
          />

          <h2 className="mt-2 font-bold">
            {movie.title}
          </h2>

          <p>Year: {movie.year}</p>
          <p>⭐ {movie.rating}/5</p>

          <p className="text-sm text-gray-300">
            {movie.review}
          </p>

          <Link
            to={`/movie/${movie.imdbID}`}
            className="text-yellow-400 underline mt-2 inline-block"
          >
            View Movie
          </Link>
        </div>
      ))}
    </div>
  );
}
