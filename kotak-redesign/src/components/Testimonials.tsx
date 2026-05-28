import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    text: "The smoothest digital banking experience I’ve ever used. Everything feels premium and incredibly fast.",
  },
  {
    name: "Priya Verma",
    role: "Product Designer",
    text: "Opening my account took only a few minutes. The cashback rewards and app experience are amazing.",
  },
  {
    name: "Aman Gupta",
    role: "Entrepreneur",
    text: "Finally a banking app that looks modern and works flawlessly. Payments and card controls are seamless.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] bg-[#ff2d36]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] bg-[#003874]/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
            Customer Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            Loved By{" "}

            <span className="text-[#ED1C24]">
              Millions
            </span>

          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Real users sharing their seamless banking experience with Kotak 811.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">

          {testimonials.map((item, index) => (
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
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-8 overflow-hidden hover:border-[#ED1C24]/30 transition-all duration-500"
            >

              {/* Hover Gradient */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#003874]/20 via-transparent to-[#ED1C24]/20" />

              {/* Stars */}

              <div className="relative z-10 flex gap-1 text-[#ED1C24] text-xl mb-6">
                ★★★★★
              </div>

              {/* Text */}

              <p className="relative z-10 text-slate-300 leading-relaxed text-lg">
                "{item.text}"
              </p>

              {/* User */}

              <div className="relative z-10 flex items-center gap-4 mt-8">

                {/* Avatar */}

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#003874] to-[#ED1C24] flex items-center justify-center text-white font-bold text-lg">

                  {item.name.charAt(0)}

                </div>

                {/* Info */}

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;