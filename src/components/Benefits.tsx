import {
  ShieldCheck,
  Wallet,
  CreditCard,
  Smartphone,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const benefits = [
  {
    icon: Wallet,
    title: "Zero Balance Account",
    description:
      "Open your digital savings account instantly with zero minimum balance requirements.",
  },
  {
    icon: CreditCard,
    title: "Premium Debit Card",
    description:
      "Get a stylish platinum debit card with cashback rewards and smart controls.",
  },
  {
    icon: Smartphone,
    title: "Smart Mobile Banking",
    description:
      "Transfer money, pay bills, track expenses, and manage everything directly from your smartphone.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Security",
    description:
      "Experience secure banking with instant alerts, fraud protection, and encrypted transactions.",
  },
];

const Benefits = () => {
  return (
    <section
      id="features"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-[-100px] left-[-100px] w-[450px] h-[450px] bg-[#003874]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] bg-[#ED1C24]/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-[#ED1C24] uppercase tracking-[4px] text-sm font-semibold mb-5">
            Premium Banking Features
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            Why People Love <br />

            <span className="text-[#ED1C24]">
              Kotak 811
            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience next-generation digital banking with premium benefits,
            seamless payments, smart financial tools, and secure banking access.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 overflow-hidden hover:border-[#ED1C24]/30 transition-all duration-500"
              >

                {/* Hover Gradient */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#003874]/20 via-transparent to-[#ED1C24]/20" />

                {/* Top Glow */}

                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#003874] via-[#ED1C24] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Icon */}

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#ED1C24]/30 transition duration-500">

                  <Icon
                    size={30}
                    className="text-[#ED1C24]"
                  />

                </div>

                {/* Content */}

                <div className="relative z-10">

                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {item.description}
                  </p>

                </div>

                {/* Learn More */}

                <div className="relative z-10 mt-8 flex items-center gap-2 text-[#ED1C24] font-medium opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                  Learn More

                  <ArrowRight size={18} />

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default Benefits;