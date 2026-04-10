"use client";

import { Globe, Users, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-20">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[70vh] w-full">

        <img
          src="/beach.jpg"
          className="absolute w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
          <div>
            <p className="text-yellow-500 tracking-widest mb-3">
              ABOUT US
            </p>

            <h1 className="text-5xl md:text-6xl font-serif font-bold">
              Your Trusted Travel Partner
            </h1>
          </div>
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