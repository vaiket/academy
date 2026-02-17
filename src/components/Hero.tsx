"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-indigo-100">

      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-400/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">

        {/* Trust label */}
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-blue-700 font-medium mb-5"
        >
          Initiative of Vikas Web Development Pvt Ltd
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight"
        >
          Work on{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Real Projects
          </span>
          .<br className="hidden md:block" />
          Build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Real Skills
          </span>
          .
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-7 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Join Vaiket Academy and contribute to real workflows using industry
          tools, mentorship and verified certification — not simulation tasks.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/apply"
            className="px-9 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
          >
            Apply for Internship
          </Link>

          <Link
            href="/verify"
            className="px-9 py-4 rounded-xl border border-blue-200 bg-white/80 backdrop-blur text-blue-700 font-medium hover:bg-blue-50 transition"
          >
            Verify Certificate
          </Link>
        </motion.div>

        {/* Bottom trust */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-7 text-sm text-gray-500"
        >
          Limited seats • Remote • 1000+ interns certified
        </motion.p>

      </div>
    </section>
  );
}
