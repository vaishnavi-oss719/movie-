// import { useState } from "react";

// import MovieCard from "../components/MovieCard";
// import SearchBar from "../components/SearchBar";
// import Filter from "../components/Filter";

// export default function Home() {
//   const [search, setSearch] = useState("");
//   const [genre, setGenre] = useState("All");

//   const filteredMovies = movies.filter(movie => {
//     const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());
//     const matchGenre = genre === "All" || movie.genre === genre;
//     return matchSearch && matchGenre;
//   });

//   return (
//     <div className="p-4">
//       <div className="flex flex-col md:flex-row gap-3 mb-4">
//         <SearchBar setSearch={setSearch} />
//         <Filter setGenre={setGenre} />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
//         {filteredMovies.map(movie => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import MovieCard from "../components/MovieCard";
// import SearchBar from "../components/SearchBar";
// import Filter from "../components/Filter";

// export default function Home() {
//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("batman");
//   const [loading, setLoading] = useState(false);
//   const [year, setYear] = useState("");
//   const [type, setType] = useState("");

//   useEffect(() => {
//     fetchMovies();
//   }, [search]);

//   const fetchMovies = async () => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `https://www.omdbapi.com/?apikey=${
//           import.meta.env.VITE_OMDB_API_KEY
//         }&s=${search}`
//       );
//       const data = await res.json();
//       setMovies(data.Search || []);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//    useEffect(() => {
//     fetchMovies();
//   }, [search, year, type]);

//   return (
//     <div className="p-4 bg-gradient-to-r from-teal-400 to-yellow-200">
//       <SearchBar setSearch={setSearch} />

//       {loading && <p className="mt-4">Loading...</p>}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
//         {movies.map((movie) => (
//           <MovieCard key={movie.imdbID} movie={movie} />
//         ))}
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const [loading, setLoading] = useState(false);
  const [year, setYear] = useState("");
  const [type, setType] = useState("");

  // ✅ ONLY ONE useEffect (important)
  useEffect(() => {
    fetchMovies();
  }, [search, year, type]);

  const fetchMovies = async () => {
    setLoading(true);

    try {
      let url = `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&s=${search}`;

      // ✅ filter values API-la add pannrom
      if (year) url += `&y=${year}`;
      if (type) url += `&type=${type}`;

      const res = await fetch(url);
      const data = await res.json();

      setMovies(data.Search || []);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
  <div className="home-bg"></div>
  <div className="home-overlay"></div>

  <div className="relative z-10 px-4 py-6">
      
      {/* 🔍 Search + Filter */}
      <div className="flex flex-wrap gap-4 mb-6 text-white">
        <SearchBar setSearch={setSearch} />

        <Filter
          year={year}
          setYear={setYear}
          type={type}
          setType={setType}
        />
      </div>

      {/* ⏳ Loading */}
      {loading && <p className="mt-4">Loading...</p>}

      {/* 🎬 Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
    </div>
  );
}


// import { useEffect, useState } from "react";
// import MovieCard from "../components/MovieCard";
// import SearchBar from "../components/SearchBar";
// import Filter from "../components/Filter";

// export default function Home() {
//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState("batman");
//   const [loading, setLoading] = useState(false);
//   const [year, setYear] = useState("");
//   const [type, setType] = useState("");

//   useEffect(() => {
//     fetchMovies();
//   }, [search, year, type]);

//   const fetchMovies = async () => {
//     setLoading(true);
//     try {
//       let url = `https://www.omdbapi.com/?apikey=${
//         import.meta.env.VITE_OMDB_API_KEY
//       }&s=${search}`;

//       if (year) url += `&y=${year}`;
//       if (type) url += `&type=${type}`;

//       const res = await fetch(url);
//       const data = await res.json();
//       setMovies(data.Search || []);
//     } catch (err) {
//       console.error(err);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden">
      
//       {/* 🎥 ANIMATED BACKGROUND */}
//       <div className="fixed inset-0 bg-animated"></div>

//       {/* DARK OVERLAY */}
//       <div className="fixed inset-0 bg-black/60"></div>

//       {/* CONTENT */}
//       <div className="relative z-10 px-4 py-6 sm:px-8">

//         {/* Search + Filter */}
//         <div className="flex flex-wrap gap-4 mb-6">
//           <SearchBar setSearch={setSearch} />
//           <Filter
//             year={year}
//             setYear={setYear}
//             type={type}
//             setType={setType}
//           />
//         </div>

//         {/* Loading */}
//         {loading && (
//           <p className="text-center text-white mt-10 animate-pulse">
//             Loading movies 🎬...
//           </p>
//         )}

//         {/* No result */}
//         {!loading && movies.length === 0 && (
//           <p className="text-center text-white mt-10">
//             No movies found 😢
//           </p>
//         )}

//         {/* Movie Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {movies.map((movie) => (
//             <MovieCard key={movie.imdbID} movie={movie} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
