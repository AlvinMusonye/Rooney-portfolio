
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./components/ui/Card";



const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen p-6 bg-white text-black"
        key="portfolio-page"
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        <header className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center gap-4 cursor-pointer">
              <img src="/brand.png" alt="Logo" className="h-12" />
              <h1 className="text-2xl sm:text-3xl font-bold">
                <strong className="text-black">Paper</strong>
              </h1>
            </div>

            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          <nav
            className={`flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0 ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            <a href="#about" className="hover:underline">About</a>
            <a href="#showcase" className="hover:underline">Showcase</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>

        <section className="relative text-center py-20">
          <img
            src="/GoPro HERO4 SILVER.jpeg"
            alt="Hero"
            className="w-full h-[400px] object-cover grayscale"
          />

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.0 }}
              className="text-5xl font-extrabold mb-4 drop-shadow-lg"
            >
              Capturing Moments That Matter
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg max-w-xl mx-auto drop-shadow-md"
            >
              Photography & Videography by Paper
            </motion.p>
          </motion.div>
        </section>

        <section id="about" className="py-16 flex flex-col md:flex-row items-center">
          <div className="text-section max-w-2xl mb-8 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-6">About Me</h3>
            <p className="text-gray-700">
              I'm Paper, a passionate photographer and videographer based in Nairobi. I specialize in event, portrait, and commercial shoots, capturing the beauty of every moment through my lens.
            </p>
          </div>
          <div className="image-section w-full md:w-1/2">
            <img src="/profile.jpeg" alt="Alvin" className="w-full grayscale rounded-xl" />
          </div>
        </section>

        <section id="showcase" className="py-16">
          <h3 className="text-2xl font-bold mb-6">Showcase</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <img
                  src="/001A7739.jpg"
                  alt="Portfolio 1"
                  className="rounded-2xl mb-4 grayscale"
                />
                <h4 className="text-xl font-semibold">Weddings</h4>
                <p className="text-sm text-gray-700">
                  Capturing love stories with elegance and emotion, creating timeless wedding memories.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <img
                  src="/001A7733.jpg"
                  alt="Portfolio 2"
                  className="rounded-2xl mb-4 grayscale"
                />
                <h4 className="text-xl font-semibold">Documentaries</h4>
                <p className="text-sm text-gray-700">
                  Visual storytelling for brands and causes, filmed and edited with cinematic flair.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <img
                  src="/001A7856.jpg"
                  alt="Portfolio 3"
                  className="rounded-2xl mb-4 grayscale"
                />
                <h4 className="text-xl font-semibold">Portraits</h4>
                <p className="text-sm text-gray-700">
                  Personal and professional portraits that highlight authenticity and style.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-gray-700 mb-6">
            Reach out to book a session or inquire about projects.
          </p>
          <button className="bg-black text-white rounded p-3 cursor-pointer hover:bg-gray-800 transition">
            Book a Session
          </button>
        </section>

        <footer className="mt-20 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Rooney Lens. All rights reserved.
        </footer>
      </motion.div>
    </AnimatePresence>
  );
}
