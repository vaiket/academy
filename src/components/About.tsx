"use client";

import { motion } from "framer-motion";

export default function About() {
  const points = [
    "Vikas Web Development Pvt Ltd — Registered Private Limited Company",
    "MSME Registered Technology & Automation Provider",
    "Helping MSMEs build digital systems & workflows",
    "1000+ Internship Certificates Issued",
    "Focused on real work, not theoretical training",
    "Students contribute to real internal and client workflows"
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-blue-50 to-indigo-50">

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-5 text-gray-900"
        >
          Who We Are
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Vaiket Academy is an initiative of{" "}
          <span className="font-medium text-blue-700">
            Vikas Web Development Pvt Ltd
          </span>
          , focused on building real-world skills through practical work,
          company workflows and verified outcomes.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-7 max-w-3xl mx-auto text-left">

          {points.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-white/80 backdrop-blur border border-blue-100
                         rounded-2xl p-7 shadow-sm hover:shadow-lg
                         hover:-translate-y-1 transition duration-300"
            >
              <div className="flex gap-4 items-start">

                {/* Icon bubble */}
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  ✓
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {p}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
