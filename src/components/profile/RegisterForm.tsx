"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaUnlock } from "react-icons/fa";


export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let errors = [];

    if (username === "" || email === "" || password === "" || passwordConfirmation === "") {
      errors.push("Please fill in all fields");
    }

    if (username.length < 3) {
      errors.push("Username must be at least 8 characters long");
    }

    if (email.length < 8 || !email.includes("@") || !email.includes(".")) {
      errors.push("Enter a valid email address");
    }

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if (password !== passwordConfirmation) {
      errors.push("Passwords do not match");
    }

    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    try {
      const resUserExists = await fetch("/api/auth/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      });

      const { userExists } = await resUserExists.json();

      if (userExists) {
        setErrors(["User already exists"]);
        return;
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, passwordConfirmation }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrors([data.message]);

        router.push("/profile/login");
      }
    } catch (error) {
      setErrors(["An error occurred. Please try again."]);
      console.log("Error occurred during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-[80vh] sm:h-[90vh] lg:h-[100vh]">
      <div className="shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-500 p-5 rounded-lg border-t-4 border-t-blue-500 bg-gray-900 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3 items-center">
          {/* Username */}
          <div className="relative w-full">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="login-input pl-10 w-full py-2 px-4 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500 text-white"
              type="text"
              placeholder="User Name"
            />
          </div>

          {/* Email */}
          <div className="relative w-full">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="login-input pl-10 w-full py-2 px-4 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500 text-white"
              type="text"
              placeholder="Email"
            />
          </div>

          {/* Password */}
          <div className="relative w-full">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="login-input pl-10 w-full py-2 px-4 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500 text-white"
              type="password"
              placeholder="Password"
            />
          </div>

          {/* Confirm Password */}
          <div className="relative w-full">
            <FaUnlock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="login-input pl-10 w-full py-2 px-4 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500 text-white"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          {/* Register Button */}
          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 hover:text-slate-300 border border-blue-700 active:opacity-30 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
            Register
          </button>

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}

          {/* Sign In Link */}
          <Link legacyBehavior href="/profile/login">
            <span className="text-sm mt-3 text-right">
              Already have an account? <a className="text-blue-500 hover:underline cursor-pointer">Sign-In</a>
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
}
