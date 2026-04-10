"use client";
import { CheckCircle } from "lucide-react";

export default function VisaPage() {
  return (
    <main className="pt-24 px-10">

      <h1 className="text-4xl text-center mb-16 font-bold">
        Choose Your Destination
      </h1>

      <div className="space-y-20">

        {/* JAPAN */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="/tokyo.jpg" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-3">Japan Visa</h2>
            <p className="text-gray-600 mb-3">
              Tourist, business, and transit visas for Japan.
            </p>
            <p className="text-yellow-600 mb-4">⏱ Processing: 5–10 days</p>
          </div>
        </div>

        {/* CHINA */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">China Visa</h2>
            <p className="text-gray-600 mb-3">Explore the Great Wall & cities.</p>
            <p className="text-yellow-600 mb-4">⏱ Processing: 7–14 days</p>
          </div>
          <img src="/chi.jpg" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
        </div>
            

        {/* MOROCCO */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="/m.jpg" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-3">Morocco Visa</h2>
            <p className="text-gray-600">Visit deserts & culture.</p>
            <p className="text-yellow-600 mb-4">⏱ Processing: 7–14 days</p>
          </div>
        </div>

        {/* SCHENGEN */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-3">Schengen Visa</h2>
            <p className="text-gray-600">Travel across Europe.</p>
            <p className="text-yellow-600 mb-4">⏱ Processing: 13–15 days</p>
          </div>
          <img src="/schengen.jpg" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
        </div>

        {/* TURKEY */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src="/turkey.jpg" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-3">Turkey Visa</h2>
            <p className="text-gray-600">Visit Istanbul & Cappadocia.</p>
            <p className="text-yellow-600 mb-4">⏱ Processing: 10–15 days</p>
          </div>
        </div>
      </div>
    </main>
  );
}