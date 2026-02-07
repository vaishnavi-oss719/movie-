import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaUserCircle, FaSignOutAlt, FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const reviews =JSON.parse(localStorage.getItem("reviews")) || [];

  const handleLogout = () => {
  localStorage.removeItem("user");
  setOpen(false);
  window.location.href = "/login"; // 🔥 force reset
};


  return (
    <nav className="bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          🎬 MovieWorld
        </Link>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6 relative">
          
          {/* Home Icon */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-xl"
                : "hover:text-yellow-300 text-xl"
            }
          >
            <FaHome />
          </NavLink>

          <NavLink
  to="/reviews"
  className={({ isActive }) =>
    isActive
      ? "text-yellow-400 text-xl relative"
      : "hover:text-yellow-300 text-xl relative"
  }
>
  <FaStar />

  {/* Badge (review irundha mattum) */}
  {reviews.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
      {reviews.length}
    </span>
  )}
</NavLink>

          {/* Profile Icon */}
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl hover:text-yellow-300 cursor-pointer"
          >
            <FaUserCircle />
          </button>

          {/* Dropdown */}
          {open && (
             <div className="absolute right-0 top-14 z-50 bg-white text-black rounded-lg shadow-lg w-40">
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-400 cursor-pointer"
    >
      <FaSignOutAlt />
      Logout
    </button>
  </div>
          )}
        </div>
      </div>
    </nav>
  );
}
