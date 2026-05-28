import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#071120]/80 backdrop-blur-2xl border-b border-white/10">

      {/* Top Gradient Line */}

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#003874] via-[#ED1C24] to-[#003874]" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative z-10">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-bold tracking-tight"
        >
          Kotak<span className="text-[#ED1C24]">811</span>
        </Link>

        {/* Nav Links */}

        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">

          <Link
            to="/"
            className="hover:text-[#ED1C24] transition duration-300 relative group"
          >

            Home

            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#ED1C24] transition-all duration-300 group-hover:w-full" />

          </Link>

          <Link
            to="/features"
            className="hover:text-[#ED1C24] transition duration-300 relative group"
          >

            Features

            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#ED1C24] transition-all duration-300 group-hover:w-full" />

          </Link>

          <Link
            to="/rewards"
            className="hover:text-[#ED1C24] transition duration-300 relative group"
          >

            Rewards

            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#ED1C24] transition-all duration-300 group-hover:w-full" />

          </Link>

          <Link
            to="/faq"
            className="hover:text-[#ED1C24] transition duration-300 relative group"
          >

            FAQ

            <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#ED1C24] transition-all duration-300 group-hover:w-full" />

          </Link>

        </div>

        {/* CTA Button */}

        <Link to="/features">

          <button className="bg-gradient-to-r from-[#ED1C24] to-[#ff2d36] hover:from-[#ff2d36] hover:to-[#ff4d55] px-6 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-[0_10px_40px_rgba(237,28,36,0.35)]">

            Open Account

          </button>

        </Link>

      </div>

    </nav>
  );
};

export default Navbar;