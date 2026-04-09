"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HolidaysPage() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // smooth
      easing: "ease-in-out",
      once: true, // animation only once (premium feel)
    });
  }, []);

  return (
    <main className="pt-20">

      {/* 🔥 HERO SECTION */}
      <section 
        className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white text-center py-24 px-6"
        data-aos="fade-up"
      >
        <p className="text-yellow-500 tracking-widest mb-3">
          HOLIDAY PACKAGES
        </p>

        <h1 className="text-5xl font-serif font-bold mb-4">
          Luxury Travel Experiences
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Curated travel packages with premium accommodations, guided tours, and unforgettable experiences.
        </p>
      </section>

      {/* 🔥 PACKAGES SECTION */}
      <section className="py-20 px-10">

        <p 
          className="text-center text-yellow-500 tracking-widest mb-2"
          data-aos="fade-up"
        >
          OUR PACKAGES
        </p>

        <h2 
          className="text-4xl font-serif text-center mb-12"
          data-aos="fade-up"
        >
          Choose Your Dream Getaway
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* CARD TEMPLATE */}
          {[
            {
              img: "/japan2.jpg",
              title: "Enchanting Japan",
              price: "From $899",
              details: "10 Days / 9 Nights ⭐ 4.9 👥 2–12",
              list: [
                "Tokyo City Tour",
                "Mount Fuji Excursion",
                "Kyoto Temple Trail",
                "Osaka Street Food Tour"
              ]
            },
            {
              img: "/ath.jpg",
              title: "Mediterranean Dream",
              price: "From $599",
              details: "12 Days / 11 Nights ⭐ 4.8 👥 2–15",
              list: [
                "Santorini Sunset Cruise",
                "Athens Acropolis",
                "Italian Riviera",
                "Barcelona City Tour"
              ]
            },
            {
              img: "/m.jpg",
              title: "Magical Morocco",
              price: "From $699",
              details: "8 Days / 7 Nights ⭐ 4.7 👥 2–10",
              list: [
                "Marrakech Markets",
                "Sahara Desert Camp",
                "Atlas Mountains",
                "Casablanca Tour"
              ]
            },
            {
              img: "/chi.jpg",
              title: "Discover China",
              price: "From $799",
              details: "9 Days / 8 Nights ⭐ 4.6 👥 2–12",
              list: [
                "Great Wall Visit",
                "Forbidden City",
                "Shanghai Skyline",
                "Cultural Shows"
              ]
            }
          ].map((pkg, i) => (
            
            <div 
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150} // stagger effect (premium feel)
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition duration-500"
            >

              <div className="relative">
                <img src={pkg.img} className="h-64 w-full object-cover" />

                <span className="absolute top-4 right-4 bg-yellow-600 text-white px-4 py-1 rounded-full text-sm">
                  {pkg.price}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {pkg.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  {pkg.details}
                </p>

                <ul className="text-gray-600 text-sm space-y-2 mb-5">
                  {pkg.list.map((item, idx) => (
                    <li key={idx}>📍 {item}</li>
                  ))}
                </ul>

                <button className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition">
                  Inquire Now
                </button>
              </div>

            </div>
          ))}

        </div>

      </section>

    </main>
  );
}