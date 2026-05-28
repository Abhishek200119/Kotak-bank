import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  WalletCards,
} from "lucide-react";

const features = [
  {
    icon: WalletCards,
    title: "₹0 Joining Fee",
  },
  {
    icon: CreditCard,
    title: "5% Cashback Rewards",
  },
  {
    icon: ShieldCheck,
    title: "Airport Lounge Access",
  },
];

const CardShowcase = () => {
  return (
    <section
      id="rewards"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#ED1C24]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#003874]/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <p className="text-[#ED1C24] uppercase tracking-[4px] text-sm font-semibold mb-5">
            Premium Banking Experience
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            A Debit Card <br />

            That Feels{" "}

            <span className="text-[#ED1C24]">
              Luxury.
            </span>

          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-xl">
            Unlock premium banking with cashback rewards,
            seamless payments, airport lounge access,
            and smarter financial control using the Kotak 811 Platinum Card.
          </p>

          {/* Features */}

          <div className="mt-10 flex flex-wrap gap-5">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl hover:border-[#ED1C24]/30 transition duration-300"
                >

                  <div className="w-10 h-10 rounded-xl bg-[#ED1C24]/10 flex items-center justify-center">

                    <Icon
                      size={18}
                      className="text-[#ED1C24]"
                    />

                  </div>

                  <span className="text-white font-medium">
                    {item.title}
                  </span>

                </motion.div>
              );
            })}

          </div>

          {/* CTA */}

          <div className="flex gap-5 mt-12 flex-wrap">

            <button className="bg-[#ED1C24] hover:bg-[#ff2d36] px-8 py-4 rounded-full font-semibold transition duration-300 hover:scale-105 red-glow">

              Get Your Card

            </button>

            <button className="border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full hover:bg-white/10 transition duration-300">

              Explore Benefits

            </button>

          </div>

        </motion.div>

        {/* Right Card */}

        <motion.div
          initial={{
            opacity: 0,
            rotate: -10,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            rotate: 0,
            scale: 1,
          }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Card Glow */}

            <div className="absolute inset-0 bg-[#ED1C24]/20 blur-[80px] rounded-full" />

            {/* Main Card */}

            <motion.div
              whileHover={{
                rotate: -3,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative w-[520px] h-[320px] rounded-[42px] bg-gradient-to-br from-[#003874] via-[#0F172A] to-[#ED1C24] p-10 border border-white/10 shadow-[0_30px_100px_rgba(237,28,36,0.25)] overflow-hidden"
            >

              {/* Top Shine */}

              <div className="absolute top-0 left-[-100px] w-[250px] h-full bg-white/10 rotate-[20deg]" />

              {/* Top */}

              <div className="relative z-10 flex justify-between items-start">

                <div>

                  <p className="text-sm text-white/70">
                    Kotak Mahindra Bank
                  </p>

                  <h2 className="text-4xl font-bold mt-2">
                    Kotak 811
                  </h2>

                </div>

                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/10" />

              </div>

              {/* Card Number */}

              <div className="relative z-10 mt-24">

                <p className="text-sm text-white/60 uppercase tracking-[4px]">
                  Platinum Debit Card
                </p>

                <h3 className="text-3xl tracking-[6px] mt-4 font-medium">
                  4587 XXXX XXXX 2489
                </h3>

              </div>

              {/* Bottom */}

              <div className="relative z-10 flex justify-between items-end mt-12">

                <div>

                  <p className="text-xs text-white/50">
                    Card Holder
                  </p>

                  <h4 className="text-lg font-semibold mt-1">
                    Abhishek Rajput
                  </h4>

                </div>

                <div>

                  <p className="text-xs text-white/50">
                    Valid Thru
                  </p>

                  <h4 className="text-lg font-semibold mt-1">
                    12/30
                  </h4>

                </div>

              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CardShowcase;