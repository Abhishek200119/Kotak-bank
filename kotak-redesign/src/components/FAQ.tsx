import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Kotak 811 a zero balance account?",
    answer:
      "Yes, you can instantly open and maintain your Kotak 811 savings account with zero minimum balance requirements.",
  },
  {
    question: "How long does account opening take?",
    answer:
      "The complete digital onboarding process takes just a few minutes with instant verification and seamless activation.",
  },
  {
    question: "Do I get a debit card with the account?",
    answer:
      "Yes, eligible users receive a premium Kotak 811 Platinum Debit Card with cashback rewards and premium benefits.",
  },
  {
    question: "Is Video KYC required?",
    answer:
      "Yes, Video KYC is required for full account activation and unlocking complete banking features.",
  },
  {
    question: "Can I use UPI services instantly?",
    answer:
      "Absolutely. Once your account is activated, you can immediately start using UPI payments and transfers.",
  },
  {
    question: "Is Kotak 811 secure for online banking?",
    answer:
      "Kotak 811 uses advanced banking-grade encryption, instant alerts, fraud protection, and secure authentication systems.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] bg-[#ED1C24]/15 blur-[120px] rounded-full" />

      <div className="absolute bottom-[-100px] left-[-100px] w-[450px] h-[450px] bg-[#003874]/20 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-[#ED1C24] uppercase tracking-[4px] text-sm font-semibold mb-5">
            Frequently Asked Questions
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">

            Everything You Need <br />

            To Know About{" "}

            <span className="text-[#ED1C24]">
              Kotak 811
            </span>

          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
            Find answers to the most common questions about account opening,
            debit cards, digital banking, and security features.
          </p>

        </motion.div>

        {/* FAQ Items */}

        <div className="space-y-5">

          {faqs.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className={`group bg-white/5 border backdrop-blur-2xl rounded-[30px] overflow-hidden transition-all duration-500 ${
                  isActive
                    ? "border-[#ED1C24]/40"
                    : "border-white/10 hover:border-[#ED1C24]/20"
                }`}
              >

                {/* Button */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-7 text-left"
                >

                  <h3 className="text-xl font-semibold text-white pr-5">
                    {item.question}
                  </h3>

                  <div className={`min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition duration-300 ${
                    isActive
                      ? "bg-[#ED1C24] text-white"
                      : "bg-white/5 text-gray-300"
                  }`}>

                    {isActive ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}

                  </div>

                </button>

                {/* Answer */}

                <AnimatePresence>

                  {isActive && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >

                      <div className="px-7 pb-7">

                        <div className="h-[1px] bg-white/10 mb-6" />

                        <p className="text-gray-400 text-lg leading-relaxed">
                          {item.answer}
                        </p>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default FAQ;