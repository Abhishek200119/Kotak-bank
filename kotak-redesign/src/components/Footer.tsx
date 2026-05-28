const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-16 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-bold">
              Kotak<span className="text-orange-500">811</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Experience next-generation digital banking with premium benefits and smart financial tools.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Features</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">
              Get The App
            </h3>

            <button className="bg-orange-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Download App
            </button>
          </div>

        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 Kotak 811. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500 text-sm">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;