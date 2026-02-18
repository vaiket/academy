import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Students in India Can Get Their First Job After Graduation",
  description:
    "A practical guide for students across India to land their first job after graduation. Learn what skills employers want and how to build real experience.",
  openGraph: {
    title: "How Students in India Can Get Their First Job After Graduation",
    description:
      "Discover how Indian graduates can build skills, gain experience, and secure their first job in today's competitive market.",
    url: "https://academy.vaiket.com/blog/how-students-in-india-get-first-job",
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
          Career Guide for Indian Students
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How Students in India Can Get Their First Job After Graduation
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Thousands of graduates enter the job market every year in India.  
          The ones who stand out aren’t always the most qualified —  
          they’re the most prepared.
        </p>
      </section>

      {/* ARTICLE */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <article className="text-lg text-gray-700 leading-relaxed space-y-6">

          <p>
            Many students across India finish college expecting to find a job
            quickly. Yet employers today look beyond degrees. They want people
            who can contribute, solve problems, and understand real workflows.
          </p>

          <p>
            The biggest gap between graduates and jobs is not knowledge — it is
            execution. Students often learn concepts but rarely get the chance
            to apply them in real environments.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10">
            Why Graduates Struggle to Get Their First Job
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>No portfolio or real project experience</li>
            <li>Limited exposure to industry tools</li>
            <li>Uncertainty about employer expectations</li>
            <li>Strong competition for entry-level roles</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10">
            What Actually Improves Job Chances
          </h2>

          <p>
            The fastest way to improve employability is to build something real.
            Projects, automation workflows, websites, or even small digital
            systems demonstrate capability far better than certificates alone.
          </p>

          <p>
            Internships that involve real tasks and execution help students
            develop confidence and problem-solving ability, which employers
            value most.
          </p>

          {/* BRAND BLOCK */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              A Practical Path for Students
            </h2>

            <p className="text-gray-600 mb-4">
              Vaiket Academy focuses on helping learners build real digital
              systems and execution skills through project-based internships
              rather than only theory.
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
              Ready to Improve Your Job Chances?
            </h2>

            <p className="text-gray-600 mb-6">
              Start building real skills and real projects today.
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
