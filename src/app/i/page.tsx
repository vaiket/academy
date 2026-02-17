"use client";

export default function Home() {

  const logos = [
    // AI & big tech
    "google","openaigym","meta","bmcsoftware","amazon","apple",
    "huggingface","trustpilot","anthropic",

    // dev platforms
    "github","gitlab","vercel","netlify","firebase","supabase",
    "react","nextdotjs","nodedotjs","typescript","javascript",

    // databases
    "mongodb","mysql","postgresql","redis","prisma",

    // cms & commerce
    "wordpress","shopify","woocommerce",

    // cloud
    "amazonaws","cloudflare","digitalocean","heroku","render",

    // devops
    "docker","kubernetes","linux","ubuntu","nginx",

    // design
    "figma","googleanalytics","simpleanalytics","googlecampaignmanager360",

    // payments
    "stripe","paypal","razorpay",

    // productivity
    "slack","notion","trello","zoom",

    // frontend
    "html5","css","tailwindcss","bootstrap","sass",

    // tools
    "postman","vite","eslint","prettier","webpack"
  ];

  // split into 5 rows
  const chunkSize = Math.ceil(logos.length / 5);
  const rows = [
    logos.slice(0, chunkSize),
    logos.slice(chunkSize, chunkSize * 2),
    logos.slice(chunkSize * 2, chunkSize * 3),
    logos.slice(chunkSize * 3, chunkSize * 4),
    logos.slice(chunkSize * 4)
  ];

  return (
    <main style={styles.main}>

      <h1 style={styles.title}>
        Platforms & Technologies Our Interns Work With
      </h1>

      <p style={styles.subtitle}>
        Learn using real tools used by modern tech companies worldwide.
      </p>

      <div style={styles.wrapper}>
        {rows.map((row, index) => (
          <div
            key={index}
            style={{
              ...styles.row,
              animation:
                index % 2 === 0
                  ? "scrollLeft 70s linear infinite"
                  : "scrollRight 70s linear infinite"
            }}
          >
            {[...row, ...row].map((logo, i) => (
              <img
                key={i}
                src={`https://cdn.simpleicons.org/${logo}`}
                loading="lazy"
                style={styles.logo}
                alt={logo}
              />
            ))}
          </div>
        ))}
      </div>

      <p style={styles.footer}>
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
      `}</style>

    </main>
  );
}

const styles:any = {

  main:{
    background:"linear-gradient(180deg,#ffffff 0%, #f6f8fb 100%)",
    color:"#111827",
    padding:"120px 20px",
    textAlign:"center",
    overflow:"hidden"
  },

  title:{
    fontSize:"38px",
    marginBottom:"12px",
    fontWeight:600
  },

  subtitle:{
    color:"#6b7280",
    marginBottom:"80px",
    maxWidth:"720px",
    marginInline:"auto"
  },

  wrapper:{
    display:"flex",
    flexDirection:"column",
    gap:"60px"
  },

  row:{
    display:"flex",
    gap:"90px",
    width:"max-content",
    willChange:"transform"
  },

  logo:{
    height:"56px",
    width:"auto"
  },

  footer:{
    marginTop:"90px",
    fontSize:"12px",
    color:"#9ca3af"
  }
};
