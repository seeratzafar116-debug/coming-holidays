import "./globals.css";
import Header from "./header";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";



const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

export const metadata = {
  title: "Coming Holidays",
  description: "Premium Travel Agency",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>

        {/* ✅ WHATSAPP BUTTON */}
        <a 
          href="https://wa.me/447476625837" 
          target="_blank"
          className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.8 11.8 0 0012.02 0C5.38 0 .02 5.36.02 12c0 2.11.55 4.17 1.6 6L0 24l6.24-1.63a11.93 11.93 0 005.78 1.47h.01c6.63 0 12-5.36 12-12 0-3.2-1.25-6.2-3.51-8.36z"/>
          </svg>
          Chat Now
        </a>

        {/* ✅ HEADER */}
        <Header />

        {/* ✅ PAGE CONTENT */}
        <main>
          {children}
        </main>

        {/* ✅ FOOTER (THIS WAS MISSING) */}
        <Footer />

      </body>
    </html>
  );
}