"use client";
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
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-16 text-white overflow-hidden shadow-xl">
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
          <p className="text-center text-gray-500 py-8">
            No featured pets available right now.
          </p>
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