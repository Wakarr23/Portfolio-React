
import { Mail, ArrowUp} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Name */}
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Deewakar <span className="text-red-400">Paudel</span>
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Front-End Developer & Designer
            </p>
          </div>

          {/* Social / Contact Links */}
          <div className="flex items-center gap-3">

            <a
              href="mailto:wakarpaudel25@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-red-400 hover:border-red-400 transition duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>


            <a
  href="https://www.instagram.com/wakarrr_/?hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-red-400 hover:border-red-400 transition duration-300"
  aria-label="Instagram"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
</a>

            <a
              href="https://github.com/Wakarr23"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-red-400 hover:border-red-400 transition duration-300 text-sm"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-gray-400 hover:text-red-400 hover:border-red-400 transition duration-300 text-sm"
            >
              Contact
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Deewakar Paudel. All rights reserved.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm transition duration-300"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </a>

        </div>

      </div>

    </footer>
  );
}

