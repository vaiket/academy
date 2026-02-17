export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-gray-300">

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Vaiket Academy
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            An initiative of Vikas Web Development Pvt Ltd focused on helping
            students gain real-world experience through practical work,
            tools, and company workflows.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-medium text-white mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/apply" className="hover:text-white transition">
                Apply for Internship
              </a>
            </li>
            <li>
              <a href="/verify" className="hover:text-white transition">
                Verify Certificate
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="text-sm font-medium text-white mb-4">
            Company
          </h4>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>Vikas Web Development Pvt Ltd</li>
            <li>MSME Registered Technology Provider</li>
            <li>Remote Internship Program</li>
            <li>Email: support@vaiket.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-800 text-center text-xs text-gray-500 py-6">
        © {new Date().getFullYear()} Vaiket Academy. All rights reserved.
      </div>

    </footer>
  );
}
