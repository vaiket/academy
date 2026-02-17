"use client";

export default function Home() {

  const logos = [
    "google","openai","meta","microsoft","amazon","apple",
    "github","gitlab","vercel","firebase","supabase",
    "react","nextdotjs","nodedotjs","typescript","javascript",
    "mongodb","postgresql","redis",
    "wordpress","shopify",
    "amazonaws","cloudflare","digitalocean",
    "docker","kubernetes","linux",
    "figma","canva",
    "stripe","paypal",
    "slack","notion","zoom",
    "html5","css","tailwindcss"
  ];

  const chunkSize = Math.ceil(logos.length / 3);
  const rows = [
    logos.slice(0, chunkSize),
    logos.slice(chunkSize, chunkSize * 2),
    logos.slice(chunkSize * 2)
  ];

  return (
    <main className="relative overflow-hidden py-28 bg-gradient-to-b from-white to-slate-50 text-center">

      <h1 className="text-3xl md:text-4xl font-medium mb-3 mt-10">
        Platforms & Technologies Our Interns Work With
      </h1>

      <p className="text-gray-500 mb-20 max-w-lg mx-auto">
        Learn using real tools used by modern tech companies worldwide.
      </p>

      {/* softer fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white/90 to-transparent z-10"/>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white/90 to-transparent z-10"/>

      <div className="flex flex-col gap-16">

        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex gap-16 w-max ${
              index % 2 === 0
                ? "animate-scroll-left"
                : "animate-scroll-right"
            }`}
          >
            {[...row, ...row].map((logo, i) => (
              <img
                key={i}
                src={`https://cdn.simpleicons.org/${logo}`}
                loading="lazy"
                className="h-10 w-auto opacity-95 hover:scale-110 transition duration-300"
                alt={logo}
              />
            ))}
          </div>
        ))}

      </div>

      <p className="mt-20 text-xs text-gray-400">
        Logos belong to their respective owners. Used for educational reference only.
      </p>

      <style jsx>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 45s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 45s linear infinite;
        }
      `}</style>

    </main>
  );
}
