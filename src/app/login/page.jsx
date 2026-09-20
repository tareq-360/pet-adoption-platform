"use client";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn.email({
        email,
        password,
      });
      toast.success("Successfully logged in!");
      router.push("/");
    } catch (err) {
      toast.error(err.message || "Invalid credentials!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error(err.message || "Google Sign-In failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto my-12 bg-white p-8 rounded-2xl shadow-lg border">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-gray-600">Email Address</label>
          <input
            type="email"
            required
            className="w-full border p-2.5 rounded-lg text-sm mt-1 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-600">Password</label>
          <input
            type="password"
            required
            className="w-full border p-2.5 rounded-lg text-sm mt-1 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-sm transition"
        >
          Login
        </button>
      </form>

      <div className="relative my-6 text-center">
        <span className="bg-white px-2 text-xs text-gray-500 relative z-10">OR</span>
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full border py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition text-sm font-medium"
      >
        Continue with Google
      </button>

      <p className="text-xs text-center text-gray-500 mt-6">
        Don't have an account? <Link href="/register" className="text-indigo-600 font-semibold">Register</Link>
      </p>
    </div>
  );
}