

import { Link, useNavigate } from "react-router-dom";

export default function Reviews() {
  const navigate = useNavigate();
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-700 cursor-pointer"
      >
        ← Back
      </button>

      {reviews.length === 0 ? (
        <div className="flex items-center justify-center h-[70vh]">
          <p className="text-xl font-semibold">
            No reviewed movies yet 😢
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-slate-800 text-white rounded-lg p-4"
            >
              <img
                src={movie.poster}
                className="h-[300px] w-full object-cover rounded"
                alt={movie.title}
              />

              <h2 className="mt-2 font-bold">{movie.title}</h2>
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
      )}
    </div>
  );
}
