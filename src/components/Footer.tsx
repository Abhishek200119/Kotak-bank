import {
  Globe2,
  Send,
  BadgeCheck,
  Shield,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#071120] overflow-hidden pt-24 pb-10 px-6">

      {/* Background Glow */}

      <div className="absolute top-[-150px] right-[-150px] w-[450px] h-[450px] bg-[#ff2d36]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-150px] left-[-150px] w-[450px] h-[450px] bg-[#1E4E8C]/20 blur-[120px] rounded-full" />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020817]/70" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Section */}

        <div className="grid lg:grid-cols-4 gap-14 pb-16 border-b border-white/10">

          {/* Brand */}

          <div>

            <Link
              to="/"
              className="text-4xl font-bold"
            >
              Kotak<span className="text-[#ED1C24]">811</span>
            </Link>

            <p className="text-slate-400 mt-6 leading-relaxed text-lg">
              Experience premium digital banking with smarter financial tools,
              cashback rewards, and seamless mobile banking experiences.
            </p>

            {/* Newsletter */}

            <div className="mt-8">

              <div className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden backdrop-blur-xl">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-6 py-4 outline-none text-white placeholder:text-slate-500"
                />

                <button className="bg-gradient-to-r from-[#ED1C24] to-[#ff2d36] hover:from-[#ff2d36] hover:to-[#ff4d55] w-14 h-14 flex items-center justify-center transition duration-300">

                  <Send size={20} />

                </button>

              </div>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold mb-7 text-white">
              Company
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-[#ED1C24] transition duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/features"
                  className="text-slate-400 hover:text-[#ED1C24] transition duration-300"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  to="/rewards"
                  className="text-slate-400 hover:text-[#ED1C24] transition duration-300"
                >
                  Rewards
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="text-slate-400 hover:text-[#ED1C24] transition duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold mb-7 text-white">
              Resources
            </h3>

            <ul className="space-y-4">

              <li className="text-slate-400 hover:text-[#ED1C24] transition duration-300 cursor-pointer">
                Help Center
              </li>

              <li className="text-slate-400 hover:text-[#ED1C24] transition duration-300 cursor-pointer">
                Privacy Policy
              </li>

              <li className="text-slate-400 hover:text-[#ED1C24] transition duration-300 cursor-pointer">
                Terms & Conditions
              </li>

              <li className="text-slate-400 hover:text-[#ED1C24] transition duration-300 cursor-pointer">
                Security
              </li>

            </ul>

          </div>

          {/* App Download */}

          <div>

            <h3 className="text-xl font-semibold mb-7 text-white">
              Get The App
            </h3>

            <p className="text-slate-400 leading-relaxed mb-8">
              Download the Kotak 811 mobile app and manage your banking anytime, anywhere.
            </p>

            <div className="space-y-4">

              <button className="w-full bg-gradient-to-r from-[#ED1C24] to-[#ff2d36] hover:from-[#ff2d36] hover:to-[#ff4d55] py-4 rounded-2xl font-semibold transition duration-300 hover:scale-[1.02] red-glow">

                Download For iOS

              </button>

              <button className="w-full bg-white/5 border border-white/10 hover:bg-white/10 py-4 rounded-2xl font-semibold transition duration-300">

                Download For Android

              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-10">

          {/* Copyright */}

          <p className="text-slate-500 text-sm text-center lg:text-left">
            © 2026 Kotak 811. All rights reserved.
          </p>

          {/* Social Icons */}

          <div className="flex items-center gap-5">

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#003874] hover:to-[#ED1C24] hover:border-[#ED1C24] transition duration-300"
            >

              <Globe2 size={20} />

            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#003874] hover:to-[#ED1C24] hover:border-[#ED1C24] transition duration-300"
            >

              <BadgeCheck size={20} />

            </a>

            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#003874] hover:to-[#ED1C24] hover:border-[#ED1C24] transition duration-300"
            >

              <Shield size={20} />

            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;