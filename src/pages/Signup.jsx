
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({  username,email, password })
    );

    alert("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Signup Card */}
      <form
        onSubmit={handleSignup}
        className="relative z-10 backdrop-blur-lg bg-white/20 p-6 rounded-xl w-80 text-white cursor-pointer"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          🎥 Create Account
        </h2>
        <input
          type="username"
          placeholder="Username"
          className="border p-2 w-full mb-3 rounded bg-white/80 text-black outline-none"
          onChange={(e) => setUsername(e.target.value)}
       />


        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-white/80 text-black outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-white/80 text-black outline-none"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded font-semibold cursor-pointer">
          Signup
        </button>

        <p className="text-sm mt-4 text-center">
          Already have account?{" "}
          <Link to="/login" className="text-yellow-400 underline cursor-pointer">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
