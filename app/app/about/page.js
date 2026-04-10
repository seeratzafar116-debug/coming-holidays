"use client";

import { Globe, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-20">

      <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">

  {/* 🔥 BACKGROUND IMAGE */}
  <img 
    src="/air1.jpg"
    className="absolute w-full h-full object-cover top-0 left-0 scale-105"
  />

  {/* 🔥 STRONGER OVERLAY (for clarity) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

  {/* 🔥 CONTENT */}
  <div className="relative z-10 max-w-3xl px-6">

    <p className="text-yellow-500 tracking-[3px] mb-4 text-sm">
      ABOUT US
    </p>

    <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
      Your Trusted <span className="text-yellow-500">Travel</span> Partner
    </h1>

    <p className="mt-4 text-gray-200 text-lg drop-shadow-md">
      Delivering premium visa services, flight deals, and luxury holidays worldwide.
    </p>

  </div>

</section>

      {/* 🔥 WHO WE ARE */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">

        <h2 className="text-4xl font-serif mb-6">
          Who We Are
        </h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Coming Holidays is a premium travel agency specializing in international visa processing,
          flight bookings, and luxury holiday packages. With years of industry experience,
          we’ve helped thousands of travelers explore the world with confidence and ease.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Our team of dedicated travel experts understands that every journey is unique.
          Whether you're applying for a complex visa, searching for the best flight deal,
          or planning a dream vacation, we provide personalized service that makes travel stress-free.
        </p>

      </section>

      {/* 🔥 VALUES SECTION */}
      <section className="py-20 px-10 bg-[#f8fafc] text-center">

        <p className="text-yellow-500 tracking-widest mb-3">
          OUR VALUES
        </p>

        <h2 className="text-4xl font-serif mb-12">
          What Drives Us
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Globe className="mx-auto mb-4 text-yellow-600" size={28}/>
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-500 text-sm">
              We serve clients across 50+ countries with local expertise and global connections.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Users className="mx-auto mb-4 text-yellow-600" size={28}/>
            <h3 className="font-semibold mb-2">Client-First Approach</h3>
            <p className="text-gray-500 text-sm">
              Every trip is personalized. We listen, plan, and deliver experiences that exceed expectations.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Award className="mx-auto mb-4 text-yellow-600" size={28}/>
            <h3 className="font-semibold mb-2">Industry Excellence</h3>
            <p className="text-gray-500 text-sm">
              Recognized for our high visa approval rates and premium service standards.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Heart className="mx-auto mb-4 text-yellow-600" size={28}/>
            <h3 className="font-semibold mb-2">Passion for Travel</h3>
            <p className="text-gray-500 text-sm">
              We’re travelers ourselves. We recommend only what we’d book for our own families.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}