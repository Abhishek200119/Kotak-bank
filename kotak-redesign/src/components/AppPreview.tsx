import { motion } from "framer-motion";

const AppPreview = () => {
  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="w-[300px] h-[620px] rounded-[50px] border-[10px] border-white/10 bg-black overflow-hidden shadow-2xl">

            <div className="bg-orange-500 h-40 rounded-b-[40px] p-6">

              <p className="text-sm text-white/70">
                Available Balance
              </p>

              <h2 className="text-5xl font-bold mt-3">
                ₹48,520
              </h2>

            </div>

            <div className="p-6 space-y-5">

              <div className="bg-white/5 p-5 rounded-2xl">
                UPI Payments
              </div>

              <div className="bg-white/5 p-5 rounded-2xl">
                Cashback Rewards
              </div>

              <div className="bg-white/5 p-5 rounded-2xl">
                Expense Analytics
              </div>

              <div className="bg-white/5 p-5 rounded-2xl">
                Card Controls
              </div>

            </div>

          </div>

        </motion.div>

        <div>

          <p className="text-orange-500 font-semibold mb-4">
            SMART MOBILE BANKING
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Banking In <br />
            Your Pocket.
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Send money, track expenses, manage your debit card,
            and earn rewards — all from one modern banking app.
          </p>

          <button className="mt-8 bg-orange-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Download App
          </button>

        </div>

      </div>

    </section>
  );
};

export default AppPreview;