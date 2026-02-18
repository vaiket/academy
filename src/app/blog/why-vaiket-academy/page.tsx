import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Vaiket Academy Exists | Real Project Internship Platform",
  description:
    "Vaiket Academy is built to help learners worldwide gain real execution experience through project-based internships instead of theory-only learning.",
  openGraph: {
    title: "Why Vaiket Academy Exists",
    description:
      "Discover how Vaiket Academy helps students build real skills through execution-driven internships.",
    url: "https://academy.vaiket.com/blog/why-vaiket-academy",
    siteName: "Vaiket Academy",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-14 text-center">
        <p className="text-sm text-blue-600 font-semibold tracking-wide mb-3">
          Initiative of Vikas Web Development Pvt Ltd
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
          Why Vaiket Academy Exists
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Most internships teach theory.  
          <span className="text-blue-600 font-semibold"> We built one that teaches execution.</span>
        </p>
      </section>

      {/* ARTICLE */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <article className="text-lg leading-relaxed text-gray-700 space-y-6">

          <p>
            Across the world, thousands of students complete internships hoping
            to gain practical experience. Yet many programs still rely on
            simulated assignments, reports, and theoretical exercises that do
            not reflect real industry workflows.
          </p>

          <p>
            Vaiket Academy was created to change that. Instead of teaching
            concepts in isolation, our platform focuses on execution-first
            learning. Participants work on website components, automation
            workflows, and digital systems similar to those used in real
            businesses.
          </p>

          <p>
            The goal is simple — help learners move from watching tutorials to
            building outcomes. When students contribute to real workflows, they
            gain confidence, practical thinking, and the ability to solve
            problems in real environments.
          </p>

          <p>
            Vaiket Academy is part of Vaiket, a platform focused on automation,
            web systems, and digital infrastructure for businesses. By
            connecting learners directly with execution-driven work, we aim to
            bridge the gap between education and implementation.
          </p>

          {/* HIGHLIGHT BLOCK */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Learn More About Vaiket Academy
            </h2>

            <p className="text-gray-600 mb-4">
              You can explore the full story and connect with our journey here:
            </p>

            <div className="space-y-3">

              <a
                href="https://medium.com/@vaiket/why-we-built-vaiket-academy-and-why-its-different-141bac0a8fc5"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 font-semibold hover:text-blue-700 transition"
              >
                → Read the full article on Medium
              </a>

              <a
                href="https://www.linkedin.com/in/vaiket-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 font-semibold hover:text-blue-700 transition"
              >
                → Connect with the founder on LinkedIn
              </a>

            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Ready to Build Real Skills?
            </h2>

            <p className="text-gray-600 mb-6">
              Join Vaiket Academy and start learning by building real digital
              systems, not simulations.
            </p>

            <Link
              href="/apply"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold shadow-lg hover:opacity-95 transition"
            >
              Apply for Internship
            </Link>
          </div>

        </article>
      </section>
    </main>
  );
}
