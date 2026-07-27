import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to StreamVerse 🎉
      </h1>

      <button
        onClick={() => navigate("/")}
        className="bg-red-600 px-6 py-3 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;