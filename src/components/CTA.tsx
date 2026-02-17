export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-blue-50 text-center">

      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Start Your Internship Journey Today
      </h2>

      <p className="text-gray-500 mb-10 max-w-lg mx-auto">
        Apply now and start working on real projects with industry tools and mentorship.
      </p>

      <a
        href="/apply"
        className="inline-block px-10 py-4 bg-black text-white rounded-xl text-lg
                   hover:bg-gray-800 transition duration-300 shadow-md"
      >
        Apply for Internship
      </a>

      <p className="mt-6 text-sm text-gray-400">
        Limited seats • Remote • Verified Certificate
      </p>

    </section>
  );
}
