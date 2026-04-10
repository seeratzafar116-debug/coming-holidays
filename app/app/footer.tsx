export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white py-16 px-10 mt-20">

      <div className="grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <img src="/logo.png" className="h-12 mb-4" />
          <p className="text-gray-300 leading-relaxed">
            Your trusted partner for international travel visas, flight bookings,
            and luxury holiday packages worldwide.
          </p>
        </div>

        {/* VISA */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Visa Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Japan Visa</li>
            <li>China Visa</li>
            <li>Morocco Visa</li>
            <li>Schengen Visa</li>
            <li>Turkey Visa</li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Holiday Packages</li>
            <li>Flights</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li>📧 manager@comingholidays.info</li>
            <li>📞 +44 7476 625837</li>
            <li>📍 United Kingdom</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-400 mt-12 text-sm">
        © {new Date().getFullYear()} Coming Holidays. All rights reserved.
      </div>

    </footer>
  );
}