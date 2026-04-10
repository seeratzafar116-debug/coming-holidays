"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plane, Shield, Clock, CreditCard } from "lucide-react";

export default function FlightsPage() {

  const slides = [
    {
      img: "/turkishair.jpg",
      tag: "TURKISH AIRLINES",
      title: "Best International",
      highlight: "Flight Deals",
      desc: "Gateway between East and West with unmatched hospitality",
    },
    {
      img: "/emiratesair.jpg",
      tag: "EMIRATES",
      title: "Fly in Comfort",
      highlight: "Across Continents",
      desc: "Luxury travel experience with world-class service",
    },
    {
      img: "/qatarair.jpg",
      tag: "QATAR AIRWAYS",
      title: "Experience",
      highlight: "Premium Flights",
      desc: "Award-winning airline with global connectivity",
    },
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE (SMOOTH)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className="pt-20">

      {/* 🔥 HERO SLIDER */}
      <section className="relative h-[85vh] overflow-hidden">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
              index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* IMAGE */}
            <img
              src={slide.img}
              className="w-full h-full object-cover animate-zoom"
            />

            {/* 🔥 OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex items-center px-10 md:px-20 z-10">
              <div className="max-w-2xl text-white">

                <p className="text-yellow-500 tracking-widest mb-3">
                  {slide.tag}
                </p>

                <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight">
                  {slide.title} <br />
                  <span className="text-yellow-500">{slide.highlight}</span>
                </h1>

                <p className="mt-4 text-gray-200">
                  {slide.desc}
                </p>

                <div className="flex gap-4 mt-6">
                  <button className="bg-yellow-600 px-6 py-3 rounded-full font-medium hover:bg-yellow-700 transition">
                    Book Flight
                  </button>

                  <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                    View Deals
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* 🔥 ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full backdrop-blur hover:bg-white/40 z-20"
        >
          <ChevronLeft className="text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full backdrop-blur hover:bg-white/40 z-20"
        >
          <ChevronRight className="text-white" />
        </button>

      </section>

      {/* 🔥 WHY BOOK */}
      <section className="py-20 px-10 bg-[#f8fafc] text-center">
        <p className="text-yellow-500 tracking-widest mb-3">WHY BOOK WITH US</p>

        <h2 className="text-4xl font-serif mb-12">
          Fly Smarter, Save More
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <CreditCard className="mx-auto mb-4 text-yellow-600" size={28}/>
            <h3 className="font-semibold mb-2">Best Price Guarantee</h3>
            <p className="text-gray-500 text-sm">We match or beat any competitor’s price.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Clock className="mx-auto mb-4 text-yellow-600" size={28}/>
            <h3 className="font-semibold mb-2">Instant Confirmation</h3>
            <p className="text-gray-500 text-sm">Get tickets delivered instantly.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Shield className="mx-auto mb-4 text-yellow-600" size={28}/>
            <h3 className="font-semibold mb-2">Flexible Booking</h3>
            <p className="text-gray-500 text-sm">Free cancellation options available.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Plane className="mx-auto mb-4 text-yellow-600" size={28}/>
            <h3 className="font-semibold mb-2">Premium Airlines</h3>
            <p className="text-gray-500 text-sm">Access top-rated global airlines.</p>
          </div>

        </div>
      </section>

      {/* 🔥 TRENDING DEALS */}
      <section className="py-20 px-10">

        <p className="text-center text-yellow-500 tracking-widest mb-2">
          POPULAR ROUTES
        </p>

        <h2 className="text-4xl font-serif text-center mb-12">
          Trending Flight Deals
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["Dubai", "Tokyo", "$489"],
            ["London", "Beijing", "$499"],
            ["Istanbul", "Marrakech", "$249"],
            ["Riyadh", "Paris", "$399"],
            ["Doha", "Osaka", "$449"],
            ["Abu Dhabi", "Shanghai", "$479"],
            ["Jeddah", "Istanbul", "$199"],
            ["Dubai", "Santorini", "$349"],
          ].map((item, i) => (
            <div key={i} className="border rounded-xl p-5 hover:shadow-lg transition">
              <div className="flex justify-between mb-3 font-medium">
                <span>{item[0]}</span>
                <span>→</span>
                <span>{item[1]}</span>
              </div>

              <p className="text-yellow-600 text-xl font-bold">
                {item[2]}
              </p>

              <p className="text-xs text-gray-400 mt-1">
                round trip
              </p>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}