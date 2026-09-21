"use client";
import { useState } from "react";
import { signUp, signIn, authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, image, password, confirmPassword } = formData;

    // Password Validations (Assignment Requirements)
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter!");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter!");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password must match!");
      return;
    }

    try {
      const { data, error } = await authClient.signUp.email({
        name: name, 
        email: email, 
        password: password, 
        image:image || "https://example.com/image.png", 
      });
      toast.success("Account created successfully!");
      router.push("/");
    } catch (err) {
      toast.error(err.message || "Registration failed!");
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
    <div className="max-w-md mx-auto my-10 p-8 rounded-2xl shadow-lg border">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Register on PetPals</h2>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-white">Full Name</label>
          <input
            type="text"
            required
            className="w-full border p-2.5 rounded-lg text-sm mt-1 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-white">Email Address</label>
          <input
            type="email"
            required
            className="w-full border p-2.5 rounded-lg text-sm mt-1 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-white">Photo URL</label>
          <input
            type="url"
            className="w-full border p-2.5 rounded-lg text-sm mt-1 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-white">Password</label>
          <input
            type="password"
            required
            className="w-full border p-2.5 rounded-lg text-sm mt-1 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-white">Confirm Password</label>
          <input
            type="password"
            required
            className="w-full border p-2.5 rounded-lg text-sm mt-1 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold text-sm transition"
        >
          Register
        </button>
      </form>

      <div className="relative my-6 text-center">
        <span className="bg-white px-2 text-xs text-gray-500 relative z-10">OR</span>
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200"></div></div>
      </div>

      <button
        onClick={handleGoogleLogin}
        className="w-full border py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-400 transition text-sm font-medium"
      >
        Continue with Google
      </button>

      <p className="text-xs text-center text-gray-500 mt-6">
        Already have an account? <Link href="/login" className="text-indigo-600 font-semibold">Login</Link>
      </p>
    </div>
  );
}