"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="font-semibold text-lg tracking-tight text-gray-900">
          Vaiket <span className="text-blue-600">Academy</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link href="#about" className="hover:text-gray-900 transition">
            About
          </Link>
          <Link href="#internship" className="hover:text-gray-900 transition">
            Internship
          </Link>
          <Link href="#certificate" className="hover:text-gray-900 transition">
            Certificate
          </Link>
          <Link href="#faq" className="hover:text-gray-900 transition">
            FAQ
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">

          <Link
            href="/verify"
            className="hidden sm:inline-block px-4 py-2 text-sm rounded-lg border border-gray-300 hover:bg-gray-50 transition"
          >
            Verify
          </Link>

          <Link
            href="/apply"
            className="px-5 py-2.5 text-sm rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow hover:shadow-md hover:-translate-y-0.5 transition"
          >
            Apply Now
          </Link>

        </div>
      </div>
    </motion.header>
  );
}
