"use client"
export default function Domains() {

  const items = [
    "Web Development",
    "AI Tools",
    "Digital Marketing",
    "Automation",
    "Business Operations",
    "Research"
  ];

  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl text-center mb-14 font-semibold">
        Internship Domains
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {items.map((d,i)=>(
          <div key={i} className="border rounded-xl p-6 text-center">
            {d}
          </div>
        ))}
      </div>
    </section>
  );
}
