export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn AI Automation & Digital Business  
          <span className="block text-blue-600">Only in ₹9 Masterclass</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Build websites, automate business, create content, and learn how to
          earn using AI tools — even if you're starting from zero.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow">
            Book Seat ₹9
          </button>

          <button className="border border-gray-300 px-8 py-3 rounded-xl font-semibold">
            Watch Demo
          </button>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What You’ll Learn in This Masterclass
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-xl mb-2">AI Automation</h3>
            <p className="text-gray-600">
              WhatsApp auto-replies, lead tracking, email automation, and
              real business workflows.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Website with AI</h3>
            <p className="text-gray-600">
              Create landing pages, write copy, and launch a website using AI tools.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow-sm">
            <h3 className="font-semibold text-xl mb-2">Content Creation</h3>
            <p className="text-gray-600">
              Generate posts, ads, blogs, videos, and marketing scripts using AI.
            </p>
          </div>

        </div>
      </section>

      {/* LIVE PROJECT */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Live AI Project + Monetization Demo
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          During the masterclass, we will build a real project using AI and show
          how it can be monetized to generate income.
        </p>
      </section>

      {/* OFFER */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Join Today for Just ₹9
        </h2>

        <p className="text-gray-600 mb-8">
          Includes masterclass access, recording, AI tools guide, and certificate.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow">
          Reserve My Seat
        </button>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t">
        © {new Date().getFullYear()} Vaiket Academy. All rights reserved.
      </footer>

    </main>
  );
}
