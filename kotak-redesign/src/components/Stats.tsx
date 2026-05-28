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
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-[#ED1C24]/10 blur-[160px] rounded-full" />

      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-[#003874]/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-[#ED1C24] uppercase tracking-[4px] text-sm font-semibold mb-5">
            Trusted Digital Banking
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            Banking Built For <br />

            <span className="text-[#ED1C24]">
              Modern India
            </span>

          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Join millions of users experiencing seamless digital banking,
            premium rewards, smart financial tools, and secure banking services.
          </p>

        </motion.div>

        {/* Stats Grid */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative bg-white/5 border border-white/10 rounded-[32px] p-10 backdrop-blur-2xl overflow-hidden hover:border-[#ED1C24]/30 transition-all duration-500"
            >

              {/* Hover Gradient */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#003874]/20 via-transparent to-[#ED1C24]/20" />

              {/* Top Gradient Border */}

              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#003874] via-[#ED1C24] to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* Number */}

              <h3 className="relative z-10 text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-[#ED1C24] bg-clip-text text-transparent">

                {item.number}

              </h3>

              {/* Label */}

              <p className="relative z-10 text-slate-300 mt-5 text-lg">
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