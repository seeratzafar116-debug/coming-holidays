"use client";
import { Plane } from "lucide-react";
import { Globe, Zap, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {

const [current, setCurrent] = useState(0);
const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

const slides = [
    {
  title: "Walk the",
  highlight: "Great Wall",
  desc: "Explore imperial palaces, misty mountains, and millennia of history in the heart of Asia.",
  img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d"
    },
    {
      title: "Explore the World",
      highlight: "with Confidence",
      desc: "Premium visas, flights, and luxury holidays.",
      img: "./greece.jpg"
    },
    {
      title: "Luxury Travel",
      highlight: "Starts Here",
      desc: "Discover Europe, Morocco, and beyond.",
      img: "./moro.jpg"
    }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="pt-20">


      {/* PREMIUM SLIDER */}
      
<section
  className="relative h-screen w-full overflow-hidden"
  onTouchStart={(e) => setTouchStart(e.targetTouches[0].clientX)}
  onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
  onTouchEnd={() => {
    if (touchStart - touchEnd > 50) {
      setCurrent((current + 1) % slides.length);
    }
    if (touchStart - touchEnd < -50) {
      setCurrent((current - 1 + slides.length) % slides.length);
    }
  }}
>
{/* LEFT ARROW */}
<button
  onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition z-20"
>
  <span className="text-white text-xl">‹</span>
</button>

{/* RIGHT ARROW */}
<button
  onClick={() => setCurrent((current + 1) % slides.length)}
  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/40 transition z-20"
>
  <span className="text-white text-xl">›</span>
</button>
  {/* IMAGE WITH ZOOM */}
  <div className="absolute inset-0">

  {slides.map((slide, i) => (
    <img
      key={i}
      src={slide.img}
      className={`absolute w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out 
      ${i === current ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
    />
  ))}

</div>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* TEXT CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 transition-all duration-700">

  <p className="text-yellow-500 tracking-widest mb-3 opacity-90">
    PREMIUM TRAVEL AGENCY
  </p>

  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
    {slides[current].title} <br />
    <span className="text-yellow-500">
      {slides[current].highlight}
    </span>
  </h1>

  <p className="mt-6 max-w-xl text-gray-200 text-lg">
    {slides[current].desc}
  </p>

  <div className="mt-10 flex gap-4">
    <button className="flex items-center gap-2 bg-yellow-600 px-7 py-3 rounded-full hover:bg-yellow-700 transition">
      <ShieldCheck className="w-5 h-5" />
      Apply for Visa
    </button>

    <button className="flex items-center gap-2 border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition">
      <Plane className="w-5 h-5" />
      Book Your Trip
    </button>
  </div>

</div>

  {/* DOTS */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {slides.map((_, i) => (
      <div
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-3 h-3 rounded-full cursor-pointer transition ${
          current === i ? "bg-yellow-500 w-6" : "bg-white/50"
        }`}
      />
    ))}
  </div>

</section>

      {/* STATS */}
      <section className="py-20 bg-white text-center" data-aos="fade-up">
        <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold">10K+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">50+</h2>
            <p>Destinations</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold">99%</h2>
            <p>Success Rate</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-10 bg-gray-100">
        <h2 className="text-3xl text-center mb-10" data-aos="fade-up">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Visa Services",
            "Flight Booking",
            "Holiday Packages"
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              data-aos="zoom-in"
            >
              <h3 className="font-bold text-lg">{item}</h3>
              <p className="text-gray-500 mt-2">
                Premium travel solutions tailored for you.
              </p>
            </div>
          ))}

        </div>
      </section>
      {/* HOLIDAY PACKAGES */}
<section className="py-20 px-10 bg-gray-100">

  <h2 className="text-3xl text-center mb-12">
    Luxury Holiday Packages
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {/* JAPAN */}
    <div className="bg-white rounded-xl overflow-hidden shadow hover:-translate-y-2 transition">
      <img 
        src="./japan.png"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="font-bold text-lg">Japan</h3>
        <p className="text-gray-500 text-sm mt-2">
          Cherry blossoms, temples, and modern city life.
        </p>
        <p className="text-yellow-600 mt-3 font-semibold">Starting from $1,200</p>
      </div>
    </div>

    {/* CHINA */}
    <div className="bg-white rounded-xl overflow-hidden shadow hover:-translate-y-2 transition">
      <img 
        src="./china.jpg"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="font-bold text-lg">China</h3>
        <p className="text-gray-500 text-sm mt-2">
          Walk the Great Wall and explore ancient wonders.
        </p>
        <p className="text-yellow-600 mt-3 font-semibold">Starting from $1,100</p>
      </div>
    </div>

    {/* MOROCCO */}
    <div className="bg-white rounded-xl overflow-hidden shadow hover:-translate-y-2 transition">
      <img 
        src="./morocco.jpg"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="font-bold text-lg">Morocco</h3>
        <p className="text-gray-500 text-sm mt-2">
          Vibrant souks, deserts, and cultural heritage.
        </p>
        <p className="text-yellow-600 mt-3 font-semibold">Starting from $950</p>
      </div>
    </div>

    {/* PARIS */}
    <div className="bg-white rounded-xl overflow-hidden shadow hover:-translate-y-2 transition">
      <img 
        src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h3 className="font-bold text-lg">Paris</h3>
        <p className="text-gray-500 text-sm mt-2">
          Romantic city, Eiffel Tower, and luxury lifestyle.
        </p>
        <p className="text-yellow-600 mt-3 font-semibold">Starting from $1,300</p>
      </div>
    </div>

  </div>

</section>
      {/* WHY CHOOSE US */}
<section className="py-20 px-10 bg-white">

  <h2 className="text-3xl text-center mb-12">
    Why Choose Coming Holidays
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* CARD 1 */}
    <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition text-center">
      <div className="flex justify-center mb-4">
        <Globe className="w-10 h-10 text-yellow-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Trusted Expertise
      </h3>
      <p className="text-gray-600">
        Years of experience in visa processing and international travel.
      </p>
    </div>

    {/* CARD 2 */}
    <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition text-center">
      <div className="flex justify-center mb-4">
        <Zap className="w-10 h-10 text-yellow-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Fast Processing
      </h3>
      <p className="text-gray-600">
        Quick turnaround on visa applications and flight bookings.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition text-center">
      <div className="flex justify-center mb-4">
        <ShieldCheck className="w-10 h-10 text-yellow-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">
        Global Network
      </h3>
      <p className="text-gray-600">
        Partners across the world for seamless travel experiences.
      </p>
    </div>

  </div>

</section>
      {/* AIRLINES */}
<section className="bg-gray-100 py-16 text-center">
  <p className="text-gray-500 tracking-widest mb-10">
    WE PARTNER WITH LEADING AIRLINES
  </p>

  <div className="flex flex-wrap justify-center items-center gap-10 opacity-80">

    <img src="./emirates.jpg" className="h-10" />
    <img src="./qatar.jpg" className="h-8" />
    <img src="./turkish.jpg" className="h-7" />
    <img src="./british.jpg" className="h-23" />
    <img src="./Etihad.jpg" className="h-10" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Lufthansa_Logo_2018.svg" className="h-8" />

    <img src="./Air.jpg" className="h-5" />
    <img src="./wizz.jpg" className="h-10" />

  </div>
</section>
      <section className="py-20 px-10 bg-white">
  <h2 className="text-3xl text-center mb-12">What Our Clients Say</h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* CARD */}
    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <p className="text-yellow-500 mb-2">★★★★★</p>
      <p className="text-gray-600">
        Coming Holidays made my Schengen visa process completely stress-free.
        Highly professional team!
      </p>
      <div className="mt-4 font-semibold">Sarah Mitchell</div>
      <div className="text-sm text-gray-500">London, UK</div>
    </div>

    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <p className="text-yellow-500 mb-2">★★★★★</p>
      <p className="text-gray-600">
        Best travel agency I've ever used. My Morocco holiday package was
        absolutely incredible.
      </p>
      <div className="mt-4 font-semibold">Ahmed Al-Hassan</div>
      <div className="text-sm text-gray-500">Dubai, UAE</div>
    </div>

    <div className="bg-gray-50 p-6 rounded-xl shadow">
      <p className="text-yellow-500 mb-2">★★★★★</p>
      <p className="text-gray-600">
        Their flight deals saved me hundreds of dollars. Excellent service
        from start to finish.
      </p>
      <div className="mt-4 font-semibold">Maria Chen</div>
      <div className="text-sm text-gray-500">Singapore</div>
    </div>

  </div>
</section>

      {/* DESTINATIONS */}
      <section className="py-20 px-10">
        <h2 className="text-3xl text-center mb-10" data-aos="fade-up">
          Top Destinations
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {["Japan","China","Morocco","Europe"].map((d,i)=>(
            <div 
              key={i} 
              className="bg-white p-5 rounded-xl shadow"
              data-aos="fade-up"
            >
              <h3 className="font-bold">{d}</h3>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}