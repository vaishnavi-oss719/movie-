


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
