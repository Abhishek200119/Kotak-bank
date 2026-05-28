import { motion } from "framer-motion";

const stats = [
  {
    number: "10M+",
    label: "Active Users",
  },
  {
    number: "₹0",
    label: "Minimum Balance",
  },
  {
    number: "5%",
    label: "Cashback Rewards",
  },
  {
    number: "24/7",
    label: "Customer Support",
  },
];

const Stats = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold mb-5">
            Trusted Digital Banking
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Banking Built For <br />

            <span className="text-orange-500">
              Modern India
            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Join millions of users experiencing seamless digital banking,
            premium rewards, and smarter financial management.
          </p>

        </motion.div>

        {/* Stats Grid */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500"
            >

              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 to-transparent" />

              {/* Number */}

              <h3 className="relative z-10 text-5xl md:text-6xl font-bold text-orange-500">
                {item.number}
              </h3>

              {/* Label */}

              <p className="relative z-10 text-gray-300 mt-5 text-lg">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;