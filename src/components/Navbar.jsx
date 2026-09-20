"use client";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import toast from "react-hot-toast";

export default function Navbar() {
  const { data: session, isPending } = useSession();
  const { theme, toggleTheme } = useTheme();
  const user = session?.user;

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error(err.message || "Logout failed!");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50 border-b dark:border-gray-700 transition-colors duration-300">
      <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
        🐾 PetPals
      </Link>

      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">Home</Link>
        <Link href="/pets" className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">All Pets</Link>

        {user && (
          <>
            <Link href="/dashboard/my-requests" className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">My Requests</Link>
            <Link href="/dashboard/add-pet" className="hover:text-indigo-600 dark:hover:text-indigo-400 font-medium">Add Pet</Link>
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} className="text-amber-400" />}
        </button>

        {/* User Profile / Auth Actions */}
        {isPending ? (
          <div className="text-sm text-gray-400">Loading...</div>
        ) : user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.image || "https://i.ibb.co/mJR454d/user.png"}
              alt={user.name}
              className="w-10 h-10 rounded-full border border-indigo-500 object-cover"
            />
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}