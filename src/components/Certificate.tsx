export default function Certificate() {
  return (
    <section className="py-28 bg-gradient-to-b from-blue-50 to-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* Certificate Preview */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <div className="aspect-[4/3] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
            Certificate Preview
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Verified Internship Certificate
          </h2>

          <p className="text-gray-500 mb-8 max-w-md">
            Receive an industry-style certificate issued by Vikas Web Development Pvt Ltd after completing your internship.
          </p>

          <ul className="space-y-4 text-gray-700">

            <li className="flex items-start gap-3">
              <span className="text-blue-600">✔</span>
              Issued by Vikas Web Development Pvt Ltd
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600">✔</span>
              Unique certificate ID for verification
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600">✔</span>
              Recruiter-verifiable authenticity
            </li>

            <li className="flex items-start gap-3">
              <span className="text-blue-600">✔</span>
              Shareable on LinkedIn and resumes
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}
