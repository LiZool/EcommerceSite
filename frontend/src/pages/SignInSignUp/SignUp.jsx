import React, { useState } from "react";
import Logo from "../../assets/images/gundamhead.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
  };

  return (
    <div className="flex lg:flex-row min-h-screen bg-gray-50">
      {/* Left: Welcome */}
      <div
        className="lg:flex-1 flex items-center justify-center bg-blue-800 rounded-l-3xl relative overflow-hidden px-12"
        style={{ backgroundColor: "#2b6cb0", height: "100vh" }}
      >
        <div className="text-center flex flex-col justify-center items-center p-8">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "200px", height: "auto" }}
            className="drop-shadow-2xl mb-4"
          />
          <h3 className="text-white text-xl font-semibold">Welcome Aboard!</h3>
          <p className="text-blue-100 mt-2 text-sm max-w-xs mx-auto">
            Start your journey with us — create an account and explore new possibilities.
          </p>
        </div>
      </div>

      {/* Right: Signup Form/ Login Form */}
      <div className="lg:flex-1 flex items-center justify-center px-8 lg:px-20 py-12"
            style={{ backgroundColor: "#Ff0000", height: "100vh" }}>
        <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-2">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Join us and get started today.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full px-4 py-2.5 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition mb-2"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2.5 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition mb-2"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full px-4 py-2.5 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition mb-2"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2.5 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
            <button
              type="submit"
              style={{ padding: "5px" }}
              className="w-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 mt-4"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;