
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RatingStars from "../components/RatingStar";
import { FaArrowLeft } from "react-icons/fa";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // 🎬 Fetch movie details
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&i=${id}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  // ⭐ Add Review (GLOBAL STORAGE)
  const addReview = () => {
    if (rating === 0 || comment.trim() === ""){
      alert("Please add rating and review");
      return;
    }

    const existing =
      JSON.parse(localStorage.getItem("reviews")) || [];

    const newReview = {
      imdbID: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster:
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/300x450",
      rating,
      review: comment,
    };

    localStorage.setItem(
      "reviews",
      JSON.stringify([...existing, newReview])
    );

    setRating(0);
    setComment("");
    alert("Review added ✅");
  };

  if (!movie) {
    return <p className="text-white p-6">Loading...</p>;
  }

  // 🎯 Filter reviews for this movie
  const allReviews =
    JSON.parse(localStorage.getItem("reviews")) || [];

  const movieReviews = allReviews.filter(
    (r) => r.imdbID === movie.imdbID
  );

  // ⭐ Average rating
  const avg =
    movieReviews.reduce((sum, r) => sum + r.rating, 0) /
      movieReviews.length || 0;

  const bgImage =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/1200x800";

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* 🎥 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT */}
      <div className="relative z-10 p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-gray-300 hover:text-white cursor-pointer"
        >
          <FaArrowLeft /> Back
        </button>

        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-l rounded-2xl p-6">
          {/* Movie Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={
                movie.Poster === "N/A"
                  ? "https://via.placeholder.com/300x450"
                  : movie.Poster
              }
              className="w-full h-[450px] object-cover rounded-xl"
            />

            <div>
              <h1 className="text-3xl font-bold">
                {movie.Title}
              </h1>
              <p className="text-gray-300 mt-1">
                {movie.Year} • {movie.Genre}
              </p>

              <p className="mt-4">{movie.Plot}</p>

              <p className="mt-2 text-sm text-gray-300">
                Cast: {movie.Actors}
              </p>

              <p className="mt-4 text-yellow-400 font-semibold">
                ⭐ Avg Rating: {avg.toFixed(1)}
              </p>
            </div>
          </div>

          {/* ➕ Add Review */}
          <div className="mt-8">
            <h2 className="text-xl font-bold">
              Add Review
            </h2>

            <RatingStars
              rating={rating}
              setRating={setRating}
            />

            <textarea
              value={comment}
              onChange={(e) =>
                setComment(e.target.value)
              }
              className="w-full mt-3 p-3 bg-gray-900 rounded outline-none"
              placeholder="Write your review..."
            />

            <button
              onClick={addReview}
              className="mt-3 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded"
            >
              Submit
            </button>
          </div>

          {/* 📢 User Reviews */}
          <div className="mt-8">
            <h2 className="text-xl font-bold">
              User Reviews
            </h2>

            {movieReviews.length === 0 && (
              <p className="text-gray-400">
                No reviews yet
              </p>
            )}

            {movieReviews.map((r, i) => (
              <div
                key={i}
                className="mt-3 p-3 bg-gray-900 rounded"
              >
                <p className="text-yellow-400">
                  {"★".repeat(r.rating)}
                </p>
                <p>{r.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
