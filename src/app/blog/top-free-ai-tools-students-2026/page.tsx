import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Free AI Tools Students Should Learn in 2026 | Career Guide",
  description:
    "Discover the best free AI tools students in India should learn in 2026 to improve productivity, build projects, and prepare for future tech jobs.",
  openGraph: {
    title: "Top Free AI Tools Students Should Learn in 2026",
    description:
      "A practical guide to the most useful free AI tools students can use to learn faster and build real skills.",
    url: "https://academy.vaiket.com/blog/top-free-ai-tools-students-2026",
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
          Future Skills Guide
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Top Free AI Tools Students Should Learn in 2026
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          AI is no longer optional. Students who learn how to use AI tools
          today will have a major advantage in tomorrow’s job market.
        </p>
      </section>

      {/* ARTICLE */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <article className="text-lg text-gray-700 leading-relaxed space-y-8">

          <p>
            Across India, students are beginning to realize that traditional
            learning alone is not enough. Employers now value productivity,
            problem solving, and the ability to use modern tools efficiently.
            AI tools are helping students learn faster, build projects quicker,
            and stand out in competitive job markets.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            1. ChatGPT – Idea Generation & Learning Support
          </h2>
          <p>
            ChatGPT helps students brainstorm ideas, understand complex
            concepts, generate code snippets, and improve writing. It’s one of
            the fastest ways to learn and build.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            2. Notion AI – Study Planning & Notes
          </h2>
          <p>
            Notion AI can summarize notes, create study plans, and organize
            projects. Students can manage learning workflows like professionals.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            3. Canva AI – Design & Presentations
          </h2>
          <p>
            Canva’s AI tools help create resumes, presentations, and visuals
            quickly, allowing students to present their ideas professionally.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            4. GitHub Copilot (Free for Students) – Coding Assistant
          </h2>
          <p>
            GitHub Copilot helps students write code faster, understand syntax,
            and build projects without getting stuck on basics.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            5. Google Gemini – Research & Information
          </h2>
          <p>
            Gemini helps students research topics, generate summaries, and
            explore new ideas with AI-assisted search.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            Why Learning AI Tools Matters
          </h2>
          <p>
            Students who learn AI tools gain productivity advantages that
            translate directly into job readiness. Instead of spending hours on
            repetitive tasks, they can focus on building real outcomes.
          </p>

          {/* BRAND SECTION */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Build Real Skills Using AI
            </h2>

            <p className="text-gray-600 mb-4">
              At Vaiket Academy, students use modern tools and real project
              workflows to gain execution experience instead of theoretical
              learning alone.
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
              Want to Stay Ahead in the AI Era?
            </h2>

            <p className="text-gray-600 mb-6">
              Start learning tools, building projects, and gaining practical
              experience today.
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
