// import { Link } from "react-router-dom";

// export default function MovieCard({ movie }) {
//   const poster =
//     movie.Poster === "N/A"
//       ? "https://via.placeholder.com/300x450?text=No+Image"
//       : movie.Poster;

//   return (
   
//       <div className="bg-gradient-to-r from-slate-500 to-slate-800 shadow rounded hover:scale-105 transition">
//         <img
//           src={poster}
//           className="w-108 h-100 object-cover rounded-t"
//         />
//          <div className="p-3">
//         <h2 className="font-bold text-lg">{movie.Title}</h2>

//         <p className="text-sm text-gray-900 mt-1">
//           Year: {movie.Year}
//         </p>

//         <Link to={`/movie/${movie.imdbID}`}>
//           <button className="mt-3 w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white py-1 rounded hover:bg-blue-700 cursor-pointer">
//             View More
//           </button>
//         </Link>
//       </div>
//       </div>
 
//   );
// }


import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const FALLBACK_IMAGE =
    "https://via.placeholder.com/300x450?text=No+Image";

  const poster =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : FALLBACK_IMAGE;

  return (
    <div className="bg-gradient-to-r from-slate-600 to-slate-900 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
      
      {/* Poster */}
      <img
        src={poster}
        alt={movie.Title}
        className="w-full h-[350px] object-cover"
        onError={(e) => {
          e.target.src = FALLBACK_IMAGE;
        }}
      />

      {/* Content */}
      <div className="p-3 text-white">
        <h2 className="font-bold text-lg truncate">
          {movie.Title}
        </h2>
         <h2 className="font-bold text-lg truncate">
          {movie.cast}
        </h2>
        <h2 className="font-bold text-lg truncate">
          {movie.gener}
        </h2>
        <p className="text-sm text-gray-300 mt-1">
          Year: {movie.Year}
        </p>

        <Link to={`/movie/${movie.imdbID}`}>
          <button className="mt-3 w-full bg-gradient-to-r from-slate-900 to-slate-700 py-2 rounded hover:opacity-90">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}

