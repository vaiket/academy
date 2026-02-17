"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Is this internship really free?",
    a: "Yes. The internship program itself is free. Optional certificate printing or advanced services may have small fees."
  },
  {
    q: "Will I work on real projects?",
    a: "Yes. Interns contribute to real workflows, internal tools, and company processes instead of practice assignments."
  },
  {
    q: "Who issues the certificate?",
    a: "Certificates are issued by Vikas Web Development Pvt Ltd and include a verification ID that can be validated online."
  },
  {
    q: "Is this internship remote?",
    a: "Yes. The entire internship runs remotely so you can participate from anywhere."
  },
  {
    q: "Who should apply?",
    a: "Students who want real experience, portfolio work, and exposure to actual company workflows should apply."
  }
];

export default function FAQ() {

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 bg-gradient-to-b from-white via-blue-50 to-indigo-50">

      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600">
            Everything you need to know before applying.
          </p>
        </div>

        {/* FAQ list */}
        <div className="space-y-4">

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur border border-blue-100
                         rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex justify-between items-center"
              >
                <span className="font-medium text-gray-900">
                  {faq.q}
                </span>

                <span className="text-blue-600 text-xl">
                  {open === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
