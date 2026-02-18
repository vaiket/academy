"use client";
export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Welcome to Vaiket Academy 🚀
        </h1>

        <p className="text-gray-600 mb-6">
          Congratulations! You have been shortlisted for the Vaiket Academy Internship.
          Complete the steps below to activate your internship.
        </p>

        {/* Steps */}
        <div className="space-y-4 text-gray-700 text-sm">

          <div className="p-4 border rounded-lg">
            <strong>Step 1:</strong> Join the intern community to receive updates and tasks.
          </div>

          <div className="p-4 border rounded-lg">
            <strong>Step 2:</strong> Weekly tasks will be shared via email or group.
          </div>

          <div className="p-4 border rounded-lg">
            <strong>Step 3:</strong> Submit projects on time to receive your certificate.
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">

          <a
            href="https://whatsapp.com/channel/0029VbCDQS68kyyE7LlMXM3Y"
            target="_blank"
            className="flex-1 text-center bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Join Community
          </a>

          <button
            onClick={() => alert("Internship activated! You will receive tasks soon.")}
            className="flex-1 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black transition"
          >
            Activate My Internship
          </button>

        </div>

        {/* Support */}
        <div className="mt-8 pt-6 border-t text-sm text-gray-500">
          Need help? <br />
          📞 +91 7004614077 <br />
          📩 support@vaiket.com
        </div>

      </div>
    </div>
  );
}
