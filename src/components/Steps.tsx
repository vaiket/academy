"use client";

import { motion } from "framer-motion";

export default function Steps() {

  const steps = [
    {
      icon: "📝",
      title: "Apply Online",
      desc: "Fill a simple application form and tell us your interests."
    },
    {
      icon: "🚀",
      title: "Start Real Work",
      desc: "Receive tasks, mentorship and begin working on real projects."
    },
    {
      icon: "📜",
      title: "Get Verified Certificate",
      desc: "Complete internship and receive a verified certificate."
    }
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
          How the Internship Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-20 max-w-xl mx-auto"
        >
          A simple process designed to give you real experience without
          unnecessary complexity.
        </motion.p>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur border border-blue-100
                         rounded-2xl p-8 text-left shadow-sm
                         hover:shadow-xl hover:-translate-y-1
                         transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br
                              from-blue-600 to-indigo-600
                              flex items-center justify-center
                              text-white text-xl mb-6 shadow-md">
                {step.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}
     