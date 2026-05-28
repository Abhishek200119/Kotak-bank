import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Wallet,
  Bell,
  CreditCard,
} from "lucide-react";

const AppPreview = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#003874]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#ED1C24]/15 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* Mobile Mockup */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Phone Glow */}

            <div className="absolute inset-0 bg-[#ED1C24]/20 blur-[70px] rounded-full" />

            {/* Phone */}

            <motion.div
              whileHover={{
                y: -10,
                rotate: -2,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative w-[320px] h-[680px] rounded-[55px] border-[10px] border-white/10 bg-[#0F172A] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            >

              {/* Top Notch */}

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-black rounded-b-3xl z-20" />

              {/* Top Section */}

              <div className="bg-gradient-to-br from-[#003874] via-[#0F172A] to-[#ED1C24] h-52 rounded-b-[45px] p-7 relative overflow-hidden">

                {/* Shine */}

                <div className="absolute top-0 left-[-80px] w-[180px] h-full bg-white/10 rotate-[20deg]" />

                <p className="text-sm text-white/70 relative z-10">
                  Available Balance
                </p>

                <h2 className="text-5xl font-bold mt-4 relative z-10">
                  ₹48,520
                </h2>

                {/* Small Card */}

                <div className="relative z-10 mt-8 bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between">

                  <div>

                    <p className="text-xs text-white/60">
                      Cashback Earned
                    </p>

                    <h4 className="text-xl font-semibold mt-1">
                      ₹2,450
                    </h4>

                  </div>

                  <div className="w-11 h-11 rounded-xl bg-[#ED1C24]/20 flex items-center justify-center">

                    <ArrowUpRight
                      size={20}
                      className="text-[#ED1C24]"
                    />

                  </div>

                </div>

              </div>

              {/* Features */}

              <div className="p-6 space-y-5">

                {/* Item */}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-3xl flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-[#ED1C24]/10 flex items-center justify-center">

                      <Wallet
                        size={24}
                        className="text-[#ED1C24]"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        UPI Payments
                      </h3>

                      <p className="text-gray-400 text-sm mt-1">
                        Instant transfers
                      </p>

                    </div>

                  </div>

                </motion.div>

                {/* Item */}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-3xl flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-[#003874]/20 flex items-center justify-center">

                      <Bell
                        size={24}
                        className="text-[#4DA3FF]"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        Smart Alerts
                      </h3>

                      <p className="text-gray-400 text-sm mt-1">
                        Real-time updates
                      </p>

                    </div>

                  </div>

                </motion.div>

                {/* Item */}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl p-5 rounded-3xl flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-[#ED1C24]/10 flex items-center justify-center">

                      <CreditCard
                        size={24}
                        className="text-[#ED1C24]"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        Card Controls
                      </h3>

                      <p className="text-gray-400 text-sm mt-1">
                        Freeze & manage cards
                      </p>

                    </div>

                  </div>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </motion.div>

        {/* Right Content */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <p className="text-[#ED1C24] uppercase tracking-[4px] text-sm font-semibold mb-5">
            Smart Mobile Banking
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            Banking In <br />

            Your{" "}

            <span className="text-[#ED1C24]">
              Pocket.
            </span>

          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-xl">
            Manage your money, send instant payments,
            track expenses, control your debit cards,
            and earn rewards — all from one premium banking app.
          </p>

          {/* Features */}

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-4">

              <div className="w-3 h-3 rounded-full bg-[#ED1C24]" />

              <p className="text-lg text-gray-300">
                Instant UPI Payments
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-3 h-3 rounded-full bg-[#ED1C24]" />

              <p className="text-lg text-gray-300">
                AI-Based Expense Analytics
              </p>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-3 h-3 rounded-full bg-[#ED1C24]" />

              <p className="text-lg text-gray-300">
                Premium Cashback Rewards
              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-12">

            <button className="bg-[#ED1C24] hover:bg-[#ff2d36] px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 red-glow">

              Download App

            </button>

            <button className="border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full hover:bg-white/10 transition duration-300">

              Explore Features

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default AppPreview;