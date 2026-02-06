// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import RatingStars from "../components/RatingStar";
// export default function MovieDetails() {
//   const { id } = useParams();

//   const [movie, setMovie] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [reviews, setReviews] = useState([]);

//   // 🎬 Fetch single movie
//   useEffect(() => {
//     fetchMovie();
//   }, [id]);

//   const fetchMovie = async () => {
//     const res = await fetch(
//       `https://www.omdbapi.com/?apikey=${
//         import.meta.env.VITE_OMDB_API_KEY
//       }&i=${id}`
//     );
//     const data = await res.json();
//     setMovie(data);
//   };

//   // 💾 Load reviews
//   useEffect(() => {
//     const saved = localStorage.getItem(`reviews-${id}`);
//     if (saved) setReviews(JSON.parse(saved));
//   }, [id]);

//   // 💾 Save reviews
//   useEffect(() => {
//     localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
//   }, [reviews, id]);

//   const addReview = () => {
//     if (rating === 0 || comment === "") return alert("Fill all fields");
//     setReviews([...reviews, { rating, comment }]);
//     setRating(0);
//     setComment("");
//   };

//   const avg =
//     reviews.reduce((s, r) => s + r.rating, 0) / reviews.length || 0;

//   if (!movie) return <p>Loading...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-4 bg-gradient-to-r from-slate-900 to-slate-700">
//       <div className="flex flex-col md:flex-row gap-6">
//         <img
//           src={
//             movie.Poster === "N/A"
//               ? "https://via.placeholder.com/300x450"
//               : movie.Poster
//           }
//           className="w-64 rounded"
//         />

//         <div>
//   <h1 className="text-3xl font-bold">{movie.Title}</h1>

//   <p className="text-gray-600">
//     {movie.Year} • {movie.Genre}
//   </p>

//   <p className="mt-2">{movie.Plot}</p>

//   <p className="mt-2">
//     <span className="font-semibold">Cast:</span> {movie.Actors}
//   </p>

//   <p className="mt-2 font-semibold">
//     Average Rating: ⭐ {avg.toFixed(1)}
//   </p>
// </div>
// </div>

//       {/* Review Section */}
//       <div className="mt-8">
//         <h2 className="text-xl font-bold">Add Review</h2>
//         <RatingStars rating={rating} setRating={setRating} />

//         <textarea
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className="border w-full p-2 mt-2"
//           placeholder="Write review..."
//         />

//         <button
//           onClick={addReview}
//           className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
//         >
//           Submit
//         </button>
//       </div>

//       {/* Reviews List */}
//       <div className="mt-6">
//         {reviews.map((r, i) => (
//           <div key={i} className="border p-2 rounded mb-2">
//             <div className="text-yellow-400">{"★".repeat(r.rating)}</div>
//             <p>{r.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import RatingStars from "../components/RatingStar";
// import { FaArrowLeft } from "react-icons/fa";

// export default function MovieDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [movie, setMovie] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetchMovie();
//   }, [id]);

//   const fetchMovie = async () => {
//     const res = await fetch(
//       `https://www.omdbapi.com/?apikey=${
//         import.meta.env.VITE_OMDB_API_KEY
//       }&i=${id}`
//     );
//     const data = await res.json();
//     setMovie(data);
//   };

//   useEffect(() => {
//     const saved = localStorage.getItem(`reviews-${id}`);
//     if (saved) setReviews(JSON.parse(saved));
//   }, [id]);

//   useEffect(() => {
//     localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
//   }, [reviews, id]);

//   const addReview = () => {
//     if (rating === 0 || comment.trim() === "") {
//       alert("Please add rating and review");
//       return;
//     }
//     setReviews([...reviews, { rating, comment }]);
//     setRating(0);
//     setComment("");
//   };
//   const updatedReviews = [...reviews, { rating, comment }];
//   setReviews(updatedReviews);

//   // 🔹 2. GLOBAL reviews (Navbar ⭐ ku)
//   const allReviews =
//     JSON.parse(localStorage.getItem("reviews")) || [];
//   const movieReview = {
//     imdbID: movie.imdbID,
//     title: movie.Title,
//     poster: movie.Poster,
//     year: movie.Year,
//     rating,
//     comment,
//   };

//   // same movie review irundha replace
//   const filtered = allReviews.filter(
//     (r) => r.imdbID !== movie.imdbID
//   );

//   localStorage.setItem(
//     "reviews",
//     JSON.stringify([...filtered, movieReview])
//   );

//   setRating(0);
//   setComment("");
// };


//   // const avg =
//   //   reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length || 0;

//   if (!movie) return <p className="text-white p-6">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      
//       {/* 🔙 Back Button */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white transition"
//       >
//         <FaArrowLeft />
//         Back
//       </button>

//       {/* 🪟 Glass Card */}
//       <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
        
//         <div className="flex flex-col md:flex-row gap-8">
//           <img
//             src={
//               movie.Poster === "N/A"
//                 ? "https://via.placeholder.com/300x450"
//                 : movie.Poster
//             }
//             alt={movie.Title}
//             className="w-full md:w-72 rounded-xl shadow-lg"
//           />

//           <div>
//             <h1 className="text-4xl font-bold">{movie.Title}</h1>

//             <p className="text-gray-300 mt-1">
//               {movie.Year} • {movie.Genre}
//             </p>

//             <p className="mt-4 text-gray-200 leading-relaxed">
//               {movie.Plot}
//             </p>

//             <p className="mt-3">
//               <span className="font-semibold">Cast:</span>{" "}
//               <span className="text-gray-300">{movie.Actors}</span>
//             </p>

//             <p className="mt-4 text-lg font-semibold">
//               ⭐ Average Rating: {avg.toFixed(1)}
//             </p>
//           </div>
//         </div>

//         {/* ✍️ Review Section */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-3">Add Your Review</h2>

//           <RatingStars rating={rating} setRating={setRating} />

//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Write your review..."
//             className="w-full mt-4 p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           <button
//             onClick={addReview}
//             className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition"
//           >
//             Submit Review
//           </button>
//         </div>

//         {/* 🗂️ Reviews */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-4">User Reviews</h2>

//           {reviews.length === 0 && (
//             <p className="text-gray-400">No reviews yet</p>
//           )}

//           {reviews.map((r, i) => (
//             <div
//               key={i}
//               className="mb-4 p-4 rounded-xl bg-black/40 border border-white/10"
//             >
//               <div className="text-yellow-400 text-lg">
//                 {"★".repeat(r.rating)}
//               </div>
//               <p className="mt-2 text-gray-200">{r.comment}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );

// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import RatingStars from "../components/RatingStar";
// import { FaArrowLeft } from "react-icons/fa";

// export default function MovieDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [movie, setMovie] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetchMovie();
//   }, [id]);

//   const fetchMovie = async () => {
//     const res = await fetch(
//       `https://www.omdbapi.com/?apikey=${
//         import.meta.env.VITE_OMDB_API_KEY
//       }&i=${id}`
//     );
//     const data = await res.json();
//     setMovie(data);
//   };

//   // movie specific reviews
//   useEffect(() => {
//     const saved = localStorage.getItem(`reviews-${id}`);
//     if (saved) setReviews(JSON.parse(saved));
//   }, [id]);

//   useEffect(() => {
//     localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
//   }, [reviews, id]);

//   const addReview = () => {
//     if (rating === 0 || comment.trim() === "") {
//       alert("Please add rating and review");
//       return;
//     }

//     // 1️⃣ movie page reviews
//     const updated = [...reviews, { rating, comment }];
//     setReviews(updated);

//     // 2️⃣ GLOBAL reviews (⭐ icon)
//     const allReviews =
//       JSON.parse(localStorage.getItem("reviews")) || [];

//     const movieReview = {
//       imdbID: movie.imdbID,
//       title: movie.Title,
//       poster: movie.Poster,
//       year: movie.Year,
//       rating,
//       comment,
//     };

//     const filtered = allReviews.filter(
//       (r) => r.imdbID !== movie.imdbID
//     );

//     localStorage.setItem(
//       "reviews",
//       JSON.stringify([...filtered, movieReview])
//     );

//     setRating(0);
//     setComment("");
//   };

//   const avg =
//     reviews.reduce((s, r) => s + r.rating, 0) /
//       reviews.length || 0;

//   if (!movie) return <p className="text-white p-6">Loading...</p>;

//   return (
//     <div className="min-h-screen bg-black text-white p-6">
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6"
//       >
//         <FaArrowLeft /> Back
//       </button>

//       <div className="max-w-5xl mx-auto bg-gray-900 p-6 rounded-xl">
//         <div className="flex gap-6">
//           <img
//             src={
//               movie.Poster === "N/A"
//                 ? "https://via.placeholder.com/300x450"
//                 : movie.Poster
//             }
//             className="w-72 rounded"
//           />

//           <div>
//             <h1 className="text-3xl font-bold">{movie.Title}</h1>
//             <p className="text-gray-300 mt-1">
//               {movie.Year} •{" "}
//               {movie.Genre !== "N/A"
//                 ? movie.Genre
//                 : "Genre not available"}
//             </p>

//             <p className="mt-4 text-gray-200">
//               {movie.Plot}
//             </p>

//             <p className="mt-3">
//               <span className="font-semibold">Cast:</span>{" "}
//               <span className="text-gray-300">
//                 {movie.Actors !== "N/A"
//                   ? movie.Actors
//                   : "Cast info not available"}
//               </span>
//             </p>
//             <p className="mt-3 font-semibold">
//               ⭐ Avg Rating: {avg.toFixed(1)}
//             </p>
//           </div>
//         </div>

//         {/* Review add */}
//         <div className="mt-8">
//           <h2 className="text-xl font-bold">Add Rating</h2>
//           <RatingStars rating={rating} setRating={setRating} />

//           <textarea
//             className="w-full mt-4 p-3 h-18 rounded-lg bg-white/90 text-black outline-none resize-none"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//           />

//           <button
//             onClick={addReview}
//             className="mt-3 bg-blue-600 px-4 py-2 rounded"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import RatingStars from "../components/RatingStar";
// import { FaArrowLeft } from "react-icons/fa";

// export default function MovieDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [movie, setMovie] = useState(null);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState("");
//   const [reviews, setReviews] = useState([]);

//   /* 🎬 Fetch Movie */
//   useEffect(() => {
//     const fetchMovie = async () => {
//       const res = await fetch(
//         `https://www.omdbapi.com/?apikey=${
//           import.meta.env.VITE_OMDB_API_KEY
//         }&i=${id}&plot=full`
//       );
//       const data = await res.json();
//       setMovie(data);
//     };
//     fetchMovie();
//   }, [id]);

//   /* 🗂️ Load reviews */
//   useEffect(() => {
//     const saved = localStorage.getItem(`reviews-${id}`);
//     if (saved) setReviews(JSON.parse(saved));
//   }, [id]);

//   /* 💾 Save reviews */
//   useEffect(() => {
//     localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
//   }, [reviews, id]);

//   /* ⭐ Add review */
//   const addReview = () => {
//     if (!rating || !comment.trim()) {
//       alert("Add rating & review");
//       return;
//     }

//     const newReview = { rating, comment };
//     setReviews([...reviews, newReview]);

//     /* Navbar ⭐ ku */
//     const allReviews =
//       JSON.parse(localStorage.getItem("reviews")) || [];

//     const movieReview = {
//       imdbID: movie.imdbID,
//       title: movie.Title,
//       poster: movie.Poster,
//       year: movie.Year,
//       rating,
//       comment,
//     };

//     const filtered = allReviews.filter(
//       (r) => r.imdbID !== movie.imdbID
//     );

//     localStorage.setItem(
//       "reviews",
//       JSON.stringify([...filtered, movieReview])
//     );

//     setRating(0);
//     setComment("");
//   };

//   const avg =
//     reviews.reduce((s, r) => s + r.rating, 0) /
//       reviews.length || 0;

//   if (!movie) return <p className="text-white">Loading...</p>;

//   /* 🎞️ Trailer URL (YouTube embed) */
//   const trailerURL = `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
//     movie.Title + " trailer"
//   )}`;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      
//       {/* 🔙 Back */}
//       <button
//         onClick={() => navigate(-1)}
//         className="flex items-center gap-2 mb-6 text-gray-300 hover:text-white"
//       >
//         <FaArrowLeft /> Back
//       </button>

//       {/* 🪟 Glass Card */}
//       <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        
//         <div className="grid md:grid-cols-2 gap-8">
          
//           {/* 🎞️ Poster */}
//           <img
//             src={
//               movie.Poster === "N/A"
//                 ? "https://via.placeholder.com/300x450"
//                 : movie.Poster
//             }
//             className="rounded-xl w-98 h-100"
//           />

//           {/* 🎬 Details */}
//           <div>
//             <h1 className="text-4xl font-bold">
//               {movie.Title}
//             </h1>

//             <p className="text-gray-300 mt-2">
//               📅 <b>Release:</b>{" "}
//               {movie.Released || "N/A"}
//             </p>

//             <p className="text-gray-300">
//               🎭 <b>Genre:</b>{" "}
//               {movie.Genre || "N/A"}
//             </p>

//             <p className="text-gray-300">
//               👥 <b>Cast:</b>{" "}
//               {movie.Actors || "N/A"}
//             </p>

//             <p className="text-gray-300 mt-3">
//               📝 {movie.Plot}
//             </p>

//             <p className="mt-4 text-lg font-semibold">
//               ⭐ Avg Rating: {avg.toFixed(1)}
//             </p>
//           </div>
//         </div>

//         {/* ▶️ Trailer
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold mb-3">
//             Movie Trailer
//           </h2>
//           <iframe
//             className="w-full h-[250px] rounded-xl"
//             src={trailerURL}
//             allowFullScreen
//           />
//         </div> */}

//         {/* ✍️ Review */}
//         <div className="mt-10">
//           <h2 className="text-2xl font-bold">
//             Add Review
//           </h2>

//           <RatingStars rating={rating} setRating={setRating} />

//           <textarea
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Write review..."
//             className="w-full mt-3 p-3 rounded bg-black/50 border border-white/20"
//           />

//           <button
//             onClick={addReview}
//             className="mt-4 bg-blue-600 px-6 py-2 rounded"
//           >
//             Submit
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }


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
  const [reviews, setReviews] = useState([]);

  // fetch movie
  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&i=${id}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  // load reviews
  useEffect(() => {
    const saved = localStorage.getItem(`reviews-${id}`);
    if (saved) setReviews(JSON.parse(saved));
  }, [id]);

  // save reviews
  useEffect(() => {
    localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
  }, [reviews, id]);

  // add review
  const addReview = () => {
    if (rating === 0 || comment.trim() === "") {
      alert("Please add rating and review");
      return;
    }

    const newReview = { rating, comment };
    setReviews([...reviews, newReview]);

    setRating(0);
    setComment("");
  };

  // average rating
  const avg =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length || 0;

  if (!movie) return <p className="text-white p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-4 text-gray-300"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        
      <div className="grid md:grid-cols-2 ">
        <img
          src={
            movie.Poster === "N/A"
              ? "https://via.placeholder.com/300x450"
              : movie.Poster
          }
          className="w-[480px] h-[450px] object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold">{movie.Title}</h1>
          <p className="text-gray-400">
            {movie.Year} • {movie.Genre}
          </p>
          <p className="mt-3">{movie.Plot}</p>
          <p className="mt-2 text-sm text-gray-300">
            Cast: {movie.Actors}
          </p>

          <p className="mt-4 text-yellow-400 font-semibold">
            ⭐ Avg Rating: {avg.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Add Review */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">Add Review</h2>
        <RatingStars rating={rating} setRating={setRating} />

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full mt-3 p-2 bg-gray-800 rounded"
          placeholder="Write your review..."
        />

        <button
          onClick={addReview}
          className="mt-3 bg-blue-600 px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>

      {/* Reviews List */}
      <div className="mt-6">
        <h2 className="text-xl font-bold">User Reviews</h2>

        {reviews.length === 0 && (
          <p className="text-gray-400">No reviews yet</p>
        )}

        {reviews.map((r, i) => (
          <div
            key={i}
            className="mt-3 p-3 bg-gray-900 rounded"
          >
            <p className="text-yellow-400">
              {"★".repeat(r.rating)}
            </p>
            <p>{r.comment}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
