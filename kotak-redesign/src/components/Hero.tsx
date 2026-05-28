import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">

      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Banking <br />
            That Feels <span className="text-orange-500">Premium.</span>
          </motion.h1>

          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            Zero balance savings account with cashback,
            premium debit card and seamless digital banking.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-orange-500 px-7 py-4 rounded-full font-semibold hover:scale-105 transition">
              Open Account
            </button>

            <button className="border border-white/20 px-7 py-4 rounded-full hover:bg-white/10 transition">
              Watch Demo
            </button>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="w-[420px] h-[260px] rounded-3xl bg-gradient-to-br from-orange-500 to-orange-700 p-8 shadow-2xl">

            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">Kotak 811</h2>
              <div className="w-14 h-14 rounded-full bg-white/20"></div>
            </div>

            <div className="mt-20">
              <p className="text-sm text-white/70">
                Premium Debit Card
              </p>

              <h3 className="text-2xl tracking-widest mt-2">
                4587 XXXX XXXX 2489
              </h3>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;