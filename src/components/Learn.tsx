"use client";

import { motion } from "framer-motion";

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

const items: FeatureItem[] = [
  {
    icon: "💻",
    title: "Work on Live Projects",
    desc: "Build real solutions instead of watching lectures.",
  },
  {
    icon: "🛠",
    title: "Use Industry Tools",
    desc: "Work with GitHub, AI tools, automation and real stacks.",
  },
  {
    icon: "📁",
    title: "Build Your Portfolio",
    desc: "Finish internship with projects ready for resume & LinkedIn.",
  },
  {
    icon: "🤝",
    title: "Learn Team Workflow",
    desc: "Understand deadlines, tasks and real company processes.",
  },
  {
    icon: "📜",
    title: "Get Verified Certificate",
    desc: "Issued by Vikas Web Development Pvt Ltd with verification ID.",
  },
  {
    icon: "🧑‍💼",
    title: "Get Guidance & Feedback",
    desc: "Work with mentors and improve your skills with real feedback.",
  },
];

export default function Learn() {
  return (
    <section className="py-32 bg-gradient-to-b from-white via-blue-50 to-indigo-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          <span className="text-sm font-medium text-blue-700 bg-blue-100 px-4 py-2 rounded-full inline-block mb-5">
            What You'll Actually Do
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5 tracking-tight">
            Real Work. Real Growth.
          </h2>

          <p className="text-lg text-gray-600">
            This is not a course. You'll work on real tasks, tools and projects
            just like a real company environment.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="bg-white/80 backdrop-blur border border-blue-100
                         rounded-2xl p-8 shadow-sm hover:shadow-xl
                         hover:-translate-y-1 transition duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br
                              from-blue-600 to-indigo-600
                              flex items-center justify-center
                              text-white text-xl mb-6 shadow-md">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-20">

          <a
            href="/apply"
            className="inline-flex items-center justify-center
                       px-10 py-4 text-base font-medium text-white
                       bg-gradient-to-r from-blue-600 to-indigo-600
                       rounded-xl shadow-lg hover:shadow-xl
                       hover:-translate-y-0.5 transition"
          >
            Apply for Internship
            <svg
              className="ml-3 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

        </div>

      </div>

    </section>
  );
}
