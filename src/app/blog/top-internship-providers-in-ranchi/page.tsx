import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Internship Providers in Ranchi, Jharkhand | Student Opportunities Guide",
  description:
    "Looking for internships in Ranchi? Discover top internship providers, learning platforms, and opportunities for students in Jharkhand to build real skills and experience.",
  openGraph: {
    title: "Top Internship Providers in Ranchi, Jharkhand",
    description:
      "Explore internship opportunities in Ranchi and learn what students should look for when choosing the right program.",
    url: "https://academy.vaiket.com/blog/top-internship-providers-in-ranchi",
    siteName: "Vaiket Academy",
    type: "article",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-center">
        <p className="text-sm text-blue-600 font-semibold mb-3">
          Career Guide for Jharkhand Students
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Top Internship Providers in Ranchi, Jharkhand
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Internships are becoming essential for students in Ranchi.  
          Here’s what to look for — and where to find real learning opportunities.
        </p>
      </section>

      {/* ARTICLE */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <article className="text-lg text-gray-700 leading-relaxed space-y-6">

          <p>
            As Ranchi grows as an education and business hub, more students are
            searching for internships to gain practical experience. However,
            not all internship programs offer real learning value. Many focus
            on certificates rather than skill development.
          </p>

          <p>
            When choosing an internship in Ranchi, students should prioritize
            programs that provide real project exposure, mentorship, and
            execution-based learning rather than only theoretical assignments.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10">
            What Makes a Good Internship Program?
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Real project involvement instead of simulated tasks</li>
            <li>Opportunities to build a portfolio</li>
            <li>Guidance from experienced professionals</li>
            <li>Exposure to modern tools and workflows</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10">
            Internship Opportunities Students in Ranchi Explore
          </h2>

          <p>
            Students typically look for internships in web development, digital
            marketing, automation, design, and business operations. With remote
            work becoming common, learners in Ranchi now have access to both
            local and global opportunities.
          </p>

          {/* FEATURE BLOCK */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Vaiket Academy Internship Program
            </h2>

            <p className="text-gray-600 mb-4">
              Vaiket Academy is one of the emerging platforms focused on
              execution-based internships where students contribute to real
              websites and digital systems rather than completing only theory.
            </p>

            <Link
              href="/apply"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700"
            >
              → Explore the Vaiket Academy Internship
            </Link>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Looking for the Right Internship?
            </h2>

            <p className="text-gray-600 mb-6">
              Choose programs that help you build real skills, real projects,
              and real confidence.
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
