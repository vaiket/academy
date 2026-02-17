"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    city: "",
    field: "",
    role: "",
    laptop: "",
    internet: "",
    time: "",
    skills: "",
    reason: "",
    portfolio: "",
    confirm: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const next = () => setStep((s) => Math.min(s + 1, 4));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("applications").insert([form]);

    if (error) {
      alert("Error saving application");
      console.log(error);
      setLoading(false);
      return;
    }

    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, email: form.email }),
    });

    setLoading(false);
    alert("Application submitted successfully! Check your email.");
  };

  const steps = [
    { number: 1, label: "Personal" },
    { number: 2, label: "Interest" },
    { number: 3, label: "Resources" },
    { number: 4, label: "Final" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-5xl">
            Vaiket Academy
          </h1>
          <p className="mt-3 text-xl text-gray-600">Internship Application</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((s) => (
              <div key={s.number} className="flex-1 text-center">
                <div
                  className={`mx-auto flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                    step === s.number
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-110"
                      : step > s.number
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step > s.number ? "✓" : s.number}
                </div>
                <p
                  className={`mt-2 text-sm font-medium ${
                    step === s.number ? "text-indigo-600" : "text-gray-500"
                  }`}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="relative mt-2">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full bg-gray-200 rounded-full h-2"></div>
            </div>
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div
                className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full h-2 transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Personal Information
                </h2>
                <input
                  name="name"
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all"
                />
                <input
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all"
                />
                <input
                  name="whatsapp"
                  required
                  placeholder="WhatsApp Number"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all"
                />
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Your Interests
                </h2>
                <input
                  name="city"
                  placeholder="City / State"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all"
                />
                <input
                  name="field"
                  placeholder="Your field of study / interest"
                  value={form.field}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all"
                />
                <select
                  name="role"
                  required
                  value={form.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Which area are you interested in?</option>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>Design</option>
                  <option>Business / Sales</option>
                  <option>Not sure, want to explore</option>
                </select>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Resources & Commitment
                </h2>
                <select
                  name="laptop"
                  required
                  value={form.laptop}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Do you have a laptop?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select
                  name="internet"
                  required
                  value={form.internet}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Do you have daily internet access?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <select
                  name="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="">Can you give 1–2 hours daily?</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <div className="space-y-4 animate-fadeIn">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Final Details
                </h2>
                <textarea
                  name="skills"
                  placeholder="Tell us about your skills"
                  value={form.skills}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all resize-none"
                />
                <textarea
                  name="reason"
                  placeholder="Why do you want to join Vaiket Internship?"
                  value={form.reason}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all resize-none"
                />
                <input
                  name="portfolio"
                  placeholder="Portfolio link (optional)"
                  value={form.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all"
                />
                <input
                  name="confirm"
                  required
                  placeholder="Type YES to confirm this is a real workflow internship"
                  value={form.confirm}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-all"
                />
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={back}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300"
                >
                  ← Back
                </button>
              )}
              {step < 4 && (
                <button
                  type="button"
                  onClick={next}
                  className="ml-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md"
                >
                  Next →
                </button>
              )}
              {step === 4 && (
                <button
                  type="submit"
                  disabled={loading}
                  className="ml-auto px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:from-green-600 hover:to-emerald-600 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-sm text-gray-500">
          All information is kept confidential.
        </p>
      </div>

      {/* Add a simple fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}