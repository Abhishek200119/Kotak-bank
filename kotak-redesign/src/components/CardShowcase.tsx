import { motion } from "framer-motion";

const CardShowcase = () => {
  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div>

          <p className="text-orange-500 font-semibold mb-4">
            PREMIUM EXPERIENCE
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            A Debit Card <br />
            That Looks <span className="text-orange-500">Luxury.</span>
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Unlock cashback rewards, higher transaction limits,
            and seamless payments with the Kotak 811 platinum card.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">

            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
              ₹0 Joining Fee
            </div>

            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
              5% Cashback
            </div>

            <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl">
              Lounge Access
            </div>

          </div>

        </div>

        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="w-[500px] h-[300px] rounded-[40px] bg-gradient-to-br from-orange-500 to-orange-700 p-10 shadow-[0_30px_100px_rgba(255,115,0,0.5)]">

            <div className="flex justify-between items-start">
              <h2 className="text-4xl font-bold">
                Kotak 811
              </h2>

              <div className="w-16 h-16 rounded-full bg-white/20" />
            </div>

            <div className="mt-24">

              <p className="text-white/70 text-sm">
                Platinum Debit Card
              </p>

              <h3 className="text-3xl tracking-[5px] mt-3">
                4587 XXXX XXXX 2489
              </h3>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CardShowcase;