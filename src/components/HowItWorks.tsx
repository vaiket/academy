"use client"
export default function HowItWorks() {
  return (
    <section className="py-24 text-center px-6">
      <h2 className="text-3xl mb-12 font-semibold">
        How Internship Works
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
        <div>
          <h3 className="font-semibold mb-2">Apply</h3>
          <p className="text-gray-500">Submit your application online.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Work on Real Projects</h3>
          <p className="text-gray-500">Get tasks and mentorship.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Get Certificate</h3>
          <p className="text-gray-500">Receive verified internship certificate.</p>
        </div>
      </div>
    </section>
  );
}
