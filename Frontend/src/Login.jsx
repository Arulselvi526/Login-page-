import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import background from "./assets/image/background.jpg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Login Card */}
      <div className="relative z-10 'w-[450px]' bg-black/80 p-10 rounded-xl shadow-2xl">
        <h1 className="text-red-600 text-5xl font-bold mb-8">
          StreamVerse
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full bg-zinc-800 text-white p-4 rounded mb-4 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full bg-zinc-800 text-white p-4 rounded mb-6 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold"
        >
          Sign In
        </button>

        <div className="flex justify-between mt-5 text-gray-400 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#" className="hover:underline">
            Need Help?
          </a>
        </div>

        <p className="text-gray-400 mt-8">
          New to StreamVerse?{" "}
          <span className="text-white cursor-pointer hover:underline">
            Sign up now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;