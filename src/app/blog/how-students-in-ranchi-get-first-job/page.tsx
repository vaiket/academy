import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Students in Ranchi Can Get Their First Job After College | Career Guide",
  description:
    "A practical guide for students in Ranchi, Jharkhand to land their first job after college. Learn what skills matter, how to build experience, and how to stand out in the job market.",
  openGraph: {
    title: "How Students in Ranchi Can Get Their First Job After College",
    description:
      "Discover how students in Ranchi can build skills, gain experience, and secure their first job in today's competitive market.",
    url: "https://academy.vaiket.com/blog/how-students-in-ranchi-get-first-job",
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
          Career Guide for Ranchi Students
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How Students in Ranchi Can Get Their First Job After College
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Many graduates feel stuck after college. The problem isn’t lack of degrees —
          it’s lack of real experience and execution skills.
        </p>
      </section>

      {/* ARTICLE */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <article className="text-lg text-gray-700 leading-relaxed space-y-6">

          <p>
            Every year, thousands of students graduate from colleges in Ranchi
            hoping to find a job quickly. Yet many struggle for months, not
            because they lack potential, but because employers look for
            practical ability, not just academic results.
          </p>

          <p>
            Today, companies want candidates who can contribute from day one.
            That means students must focus on building skills, projects, and
            real-world exposure before they start applying.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10">
            Why Fresh Graduates Struggle to Get Jobs
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>No portfolio or real project experience</li>
            <li>Only theoretical knowledge from college</li>
            <li>Lack of exposure to real tools and workflows</li>
            <li>Uncertainty about what employers actually want</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10">
            What Students Should Do Instead
          </h2>

          <p>
            The fastest way to improve job chances is to build something real.
            Whether it’s a website, automation workflow, design portfolio,
            or small digital project — execution proves ability better than
            certificates.
          </p>

          <p>
            Internships that focus on real tasks can help students gain the
            confidence and practical thinking required in professional
            environments. Even small projects can significantly improve
            employability.
          </p>

          {/* BRAND SECTION */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              A Practical Path for Students in Ranchi
            </h2>

            <p className="text-gray-600 mb-4">
              Platforms like Vaiket Academy focus on helping students gain
              execution-based experience by contributing to real websites and
              digital workflows, rather than completing only theory.
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
              Want to Improve Your Job Chances?
            </h2>

            <p className="text-gray-600 mb-6">
              Start building real skills, real projects, and real confidence.
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
