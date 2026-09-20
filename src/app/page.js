"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import PetCard from "@/components/PetCard";
import { Heart, ShieldCheck, Smile, HelpCircle, Users } from "lucide-react";

export default function Home() {
  const [featuredPets, setFeaturedPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Backend API থেকে ৬টি পেট ফেচ করা
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/pets?limit=6`)
      .then((res) => {
        setFeaturedPets(res.data.slice(0, 6)); // নূন্যতম ৬টি পেট
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching pets:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="space-y-16 py-4">
      
      {/* 1. Banner / Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white overflow-hidden shadow-xl md:flex justify-between">
        <div className="max-w-2xl space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Find Your New Best Friend Today
          </h1>
          <p className="text-indigo-100 text-lg md:text-xl">
            Give a loving home to rescued pets. Browse through hundreds of dogs, cats, birds, and rabbits looking for a forever family.
          </p>
          <div>
            <Link
              href="/pets"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5"
            >
              Adopt Now 🐾
            </Link>
          </div>
        </div>
        <div className=" hidden md:block">
          <motion.div
          className="inline-block cursor-pointer"
          // ১. ভাসমান অ্যানিমেশন (Continuous Floating Effect)
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          // ২. মাউস নিলে অ্যানিমেট হবে (Hover Animation)
          whileHover={{ scale: 1.08, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20em"
            height="20em"
            viewBox="0 0 36 36"
            className="drop-shadow-lg"
          >
            <title>Dog</title>

            

            {/* কুকুরের শরীর ও অন্যান্য অংশ */}
            <path fill="#9d7265" d="M12.203 21.604s1.263 3.215 4.339 6.1c-3.174 2.721-1.395 4.884.261 5.508c-1.656.527-1.282 2.047-.731 2.047h2.646c.951 0 1.092-3.442.206-7.694c-.885-4.251-6.721-5.961-6.721-5.961" />
            <path fill="#9d7265" d="M9.635 21.739s.393 3.057.279 6.593c-.07 2.163-.384 3.93-.612 4.866c-1.812 0-1.652 2.064-1.268 2.064h2.902c.683 0 1.893-3.438 2.212-8.209c.317-4.771-3.513-5.314-3.513-5.314" />
            <path fill="#d99e82" d="M25.448 21.797c-2.407-3.139-4.928-5.403-8.368-8.165c-2.401-1.928-2.514-5.196-2.514-6.029c0-3.626-3.244-5.455-6.496-4.229c-.779.293-1.402 1.33-1.754 1.872c-1.978 3.037-4.659.015-4.918 2.822c-.313 3.395 1.721 4.534 5.051 4.821c1.892.163 2.425 1.069 2.838 5.018c.154 1.472-.433 3.802 1.411 5.822c.78 2.959.507 7.08-.091 9.756c-2.252.476-1.341 2.179-1.341 2.179s2.858-.043 3.543-.043c.814 0 2.146-5.639 1.849-9.067c.942 1.151 1.517 1.762 2.581 2.267c-1.116 1-1.081 2.512-.523 3.419c.467.759 1.326.872 2.147 1.22c-1.602.52-1.091 1.732-.909 2.122c1.083-.043 7.918-.043 8.197-.043c1.11 0 2.985-2.503 2.897-5.488c-.078-2.64-1.581-5.62-3.6-8.254" />
            <path fill="#f4c7b5" d="M18.114 28.212c-.145-.109-.374-.234-.7-.385c-.985-.456-2.076-1.517-2.791-2.18c.019.346.026.707.035.907c.942 1.151 1.517 1.762 2.581 2.267c.143-.192.461-.405.875-.609" />
            <path fill="#9d7265" d="M16.425 29.076c.93-1.419 3.988-1.93 6.081-1.686c0 0-5.452.086-6.058 2.663c-.371 1.582-.857.295-.023-.977" />
            <path fill="#9d7265" d="M16.52 32.572c.488.556 1.208 1.341 2.13.959c1.08-.449 2.235-.228 3.718-.245c0 0-.04-.248-.89-.227c-2.093.052-4.587.105-5.093-1.587c-.466-1.557-.868-.043.135 1.1" />
            <path fill="#f4c7b5" d="M10.665 23.689c-1.065-4.822.12-9.98-3.638-10.713c1.428.317 1.893 1.42 2.259 4.931c.154 1.463-.422 3.772 1.379 5.782" />
            <path fill="#272b2b" d="M2.503 8.326c-.109.762-.494 1.192-.879 1.133C.864 9.342.232 8.372.232 7.603s.624-.963 1.392-.928c1.043.048 1.002.788.879 1.651" />

            {/* ৪. কানের অংশ (Ear Animation) */}
            <motion.path
              fill="#662113"
              d="M15.167 9.495c.348 2.515-1.157 2.898-2.383 2.898s-3.054-1.25-2.748-3.77c.134-1.107.555-2.193.809-3.175c.336-1.303 1.199-1.732 1.894-1.367c1.665.873 2.203 3.796 2.428 5.414"
              animate={{ rotate: [0, -4, 4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ originX: "13px", originY: "4px" }}
            />

            <circle cx="8.069" cy="6.675" r=".928" fill="#292f33" />
            <circle cx="3.053" cy="10.503" r=".488" fill="#9d7265" />
            <circle cx="3.695" cy="9.804" r=".269" fill="#9d7265" />
            <circle cx="4.1" cy="10.503" r=".269" fill="#9d7265" />
            <path fill="#a0041e" d="M16.873 13.091c-.461 0-.746-.018-.797-.021a.5.5 0 0 1-.465-.533a.49.49 0 0 1 .532-.465c.056.002 5.985.36 10.488-2.668C31.069 6.42 31.472.979 31.476.925a.5.5 0 0 1 .998.063c-.016.243-.43 5.981-5.284 9.246c-3.833 2.576-8.477 2.857-10.317 2.857" />
            <path fill="#292f33" d="M8.588 14.077c1.116-.14 4.486-.19 7.023-2.093c.558-.419 1.326.913.93 1.163c-3.209 2.023-6.965 2.279-7.814 2.279c-.464-.001-.73-1.276-.139-1.349m.628 3.602c.844.244 2.594.28 3.39.235s6.165-.723 6.165-.723l.189 1.445s-5.659.826-6.554.943s-3.1.802-3.1.802s-.255-.615-.32-1.289c-.065-.684.23-1.413.23-1.413m10.929 4.999l1.377.958s-2.545 3.872-4.874 5.086l-1.249-1.237s1.303-.867 2.439-2.099a54 54 0 0 0 2.307-2.708" />
            <path fill="#a0041e" d="M19.472 14.821c1.485 1.412 4.14 4.233 5.953 6.558c.389.499-.791 1.488-1.349 2.14s-2.437 2.632-3.581 1.442c-1.163-1.209-3.256-3.163-4.791-4.698c-1.079-1.079-1.007-2.648-.093-3.349c.591-.453 1.302-1.349 1.256-2.465c-.019-.458.151-.964.558-.977c.453-.014 1.186.53 2.047 1.349" />
            <path fill="#f4abba" d="M16.109 16.439c2.116 1.975 5.568 5.504 7.386 7.695c.247-.239.451-.464.581-.615c.149-.174.343-.373.539-.58c-2.256-2.974-5.86-6.334-7.784-7.987c-.095.591-.386 1.1-.722 1.487" />
            <path fill="#f5f8fa" d="M16.684 15.494a3 3 0 0 1-.265.526c2.371 2.083 5.793 5.612 7.545 7.627l.113-.129c.082-.096.179-.2.281-.307c-2.134-2.582-6.124-6.373-7.674-7.717" />
          </svg>
        </motion.div>
        </div>
      </section>

      {/* 2. Featured Pets Section (Dynamic - Min 6 Pets) */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Featured Pets</h2>
            <p className="text-gray-500 text-sm mt-1">
              Meet some of our lovely friends waiting for adoption
            </p>
          </div>
          <Link
            href="/pets"
            className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm hover:underline"
          >
            View All Pets &rarr;
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : featuredPets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPets.map((pet) => (
              <PetCard key={pet._id} pet={pet} />
            ))}
          </div>
        ) : (
          <PetCard></PetCard>
        )}
      </section>

      {/* 3. Static Section 1: Why Adopt Pets */}
      <section className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Adopt From Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3 p-4">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto text-2xl">
              <Heart />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Save a Life</h3>
            <p className="text-gray-600 text-sm">
              Adopting gives homeless pets a second chance at life and a safe place to grow.
            </p>
          </div>

          <div className="text-center space-y-3 p-4">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-2xl">
              <ShieldCheck />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Health Checked</h3>
            <p className="text-gray-600 text-sm">
              All pets on our platform receive proper health checks and vaccination status tracking.
            </p>
          </div>

          <div className="text-center space-y-3 p-4">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto text-2xl">
              <Smile />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Unconditional Love</h3>
            <p className="text-gray-600 text-sm">
              Adopted pets bring immense joy, warmth, and lifelong companionship into your home.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Static Section 2: Success Stories */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800">Heartwarming Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col md:flex-row gap-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500"
              alt="Adopted Dog"
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div>
              <p className="text-gray-600 text-sm italic mb-3">
                "Adopting Bruno was the best decision we ever made. He settled into our family immediately!"
              </p>
              <p className="font-bold text-gray-800 text-sm">— Sarah & Family</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col md:flex-row gap-4 items-center">
            <img
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500"
              alt="Adopted Cat"
              className="w-24 h-24 rounded-xl object-cover"
            />
            <div>
              <p className="text-gray-600 text-sm italic mb-3">
                "Luna brought so much happiness into my small apartment. PetPals made adoption so easy."
              </p>
              <p className="font-bold text-gray-800 text-sm">— Rahim Ahmed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Static Section 3: Pet Care Tips */}
      <section className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <HelpCircle className="text-indigo-600" /> Essential Pet Care Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-bold text-indigo-900 mb-1">Regular Checkups</h4>
            <p className="text-gray-600">Schedule routine vet visits for vaccinations and general health checks.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-bold text-indigo-900 mb-1">Balanced Nutrition</h4>
            <p className="text-gray-600">Feed species-appropriate healthy meals and keep fresh water accessible.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-bold text-indigo-900 mb-1">Daily Exercise</h4>
            <p className="text-gray-600">Ensure daily walks or playtime to keep your pets active and energetic.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-bold text-indigo-900 mb-1">Safe Environment</h4>
            <p className="text-gray-600">Keep hazardous food, plants, and chemicals far out of their reach.</p>
          </div>
        </div>
      </section>

      {/* 6. Static Section 4: Volunteer & Shelter Network */}
      <section className="bg-white p-8 rounded-3xl border shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="text-indigo-600" /> Join Our Volunteer Network
          </h2>
          <p className="text-gray-600 text-sm">
            Don't have space to adopt right now? You can still help shelter pets by volunteering, fostering, or donating pet supplies.
          </p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition text-sm whitespace-nowrap">
          Become a Volunteer
        </button>
      </section>
    </div>
  );
}