import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold"
        >
          Kotak<span className="text-orange-500">811</span>
        </Link>

        {/* Nav Links */}

        <div className="hidden md:flex gap-8 text-sm text-gray-300">

          <Link
            to="/"
            className="hover:text-orange-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/features"
            className="hover:text-orange-500 transition duration-300"
          >
            Features
          </Link>

          <Link
            to="/rewards"
            className="hover:text-orange-500 transition duration-300"
          >
            Rewards
          </Link>

          <Link
            to="/faq"
            className="hover:text-orange-500 transition duration-300"
          >
            FAQ
          </Link>

        </div>

        {/* CTA */}

        <Link to="/features">

          <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition duration-300 px-5 py-2 rounded-full font-medium shadow-lg shadow-orange-500/20">
            Open Account
          </button>

        </Link>

      </div>

    </nav>
  );
};

export default Navbar;