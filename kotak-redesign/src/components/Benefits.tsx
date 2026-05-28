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
      "Transfer money, pay bills, track expenses, and manage everything from your phone.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Security",
    description:
      "Experience secure banking with instant alerts, fraud protection, and encrypted payments.",
  },
];

const Benefits = () => {
  return (
    <section
      id="features"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold mb-5">
            Premium Banking Features
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            Why People Love <br />

            <span className="text-orange-500">
              Kotak 811
            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Experience next-generation digital banking with premium benefits,
            smart financial tools, and seamless mobile access.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 overflow-hidden hover:border-orange-500/30 transition-all duration-500"
              >

                {/* Hover Glow */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 to-transparent" />

                {/* Icon */}

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-8 border border-orange-500/20">

                  <Icon
                    size={30}
                    className="text-orange-500"
                  />

                </div>

                {/* Content */}

                <div className="relative z-10">

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-[15px]">
                    {item.description}
                  </p>

                </div>

                {/* Bottom Link */}

                <div className="relative z-10 mt-8 flex items-center gap-2 text-orange-500 font-medium opacity-0 group-hover:opacity-100 transition duration-300">

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