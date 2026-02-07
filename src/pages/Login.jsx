// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const user = JSON.parse(localStorage.getItem("user"));

//     if (user && user.email === email && user.password === password) {
//       localStorage.setItem("isAuth", "true");
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-6 rounded w-80"
//       >
//         <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="border p-2 w-full mb-3"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="border p-2 w-full mb-3"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="bg-blue-600 text-white w-full py-2 rounded">
//           Login
//         </button>

//         <p className="text-sm mt-3 text-center">
//           No account?{" "}
//           <Link to="/signup" className="text-blue-600">
//             Signup
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//  const handleLogin = (e) => {
//   e.preventDefault();
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (user && user.username === username && user.password === password) {
//     localStorage.setItem(
//       "user",
//       JSON.stringify({ username })
//     );
//     navigate("/", { replace: true });
//   } else {
//     alert("Invalid credentials");
//   }
// };


//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba)",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* Login Card */}
//       <form
//         onSubmit={handleLogin}
//         className="relative z-10 backdrop-blur-lg bg-white/20 p-6 rounded-xl w-80 text-white"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">
//           🎬 Movie Login
//         </h2>

//         <input
//           type="username"
//           placeholder="Username"
//           className="w-full mb-3 p-2 rounded bg-white/80 text-black outline-none"
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 rounded bg-white/80 text-black outline-none"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold">
//           Login
//         </button>

//         <p className="text-sm mt-4 text-center">
//           No account?{" "}
//           <Link to="/signup" className="text-yellow-400 underline">
//             Signup
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({ username })
      );
      window.location.href = "/";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba)",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 backdrop-blur-lg bg-white/20 p-6 rounded-xl w-80 text-white"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          🎬 Movie Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 rounded bg-white/80 text-black outline-none"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-white/80 text-black outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded font-semibold cursor-pointer">
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          No account?{" "}
          <Link to="/signup" className="text-yellow-400 underline cursor-pointer">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
