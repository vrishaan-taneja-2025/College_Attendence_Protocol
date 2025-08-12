import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as", role, "with", username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <div className="w-full max-w-[300px] bg-white rounded-2xl shadow-lg p-8">
        
        {/* Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setRole("student")}
            className={`px-4 py-2 rounded-l-full transition ${
              role === "student"
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-500"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`px-4 py-2 rounded-r-full transition ${
              role === "admin"
                ? "bg-orange-500 text-white"
                : "bg-orange-100 text-orange-500"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          {role === "student" ? "Student Login" : "Admin Login"}
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-orange-600 font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <div>
            <label className="block text-orange-600 font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
