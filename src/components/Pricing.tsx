import React from "react";

const PricingSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Section heading */}
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Join the AI Masterclass Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Limited‑time offer: learn AI automation and digital business skills
          for just ₹9 — unlock the tools to build, scale, and earn.
        </p>

        {/* Pricing card – centered, with subtle glow */}
        <div className="relative mt-12">
          {/* Optional subtle glow effect (light purple shadow) */}
          <div className="absolute inset-0 -z-10 rounded-3xl bg-indigo-100/30 blur-2xl filter" />

          <div className="mx-auto max-w-md transform rounded-2xl bg-white p-8 shadow-2xl transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
            {/* Limited time badge */}
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-indigo-800">
              Limited Time Offer
            </span>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              AI Business Masterclass
            </h3>

            {/* Price area */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="text-2xl text-gray-500 line-through">₹999</span>
              <span className="text-5xl font-extrabold text-gray-900">₹9</span>
            </div>

            {/* Bullet points */}
            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Live masterclass access</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Recording included</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">AI tools guide</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Certificate of completion</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Live project demonstration</span>
              </li>
            </ul>

            {/* CTA Button with hover animation */}
            <button className="mt-8 w-full rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Reserve My Seat for ₹9
            </button>

            {/* Urgency text */}
            <p className="mt-4 text-sm text-gray-500">
              ⏳ Next batch filling fast — secure your spot now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;