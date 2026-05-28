const faqs = [
  {
    question: "Is Kotak 811 a zero balance account?",
    answer: "Yes, you can open and maintain the account with zero balance.",
  },
  {
    question: "How long does account opening take?",
    answer: "The digital onboarding process takes only a few minutes.",
  },
  {
    question: "Do I get a debit card?",
    answer: "Yes, you receive a premium platinum debit card.",
  },
  {
    question: "Is video KYC required?",
    answer: "Yes, video KYC is needed for full account activation.",
  },
];

const FAQ = () => {
  return (
    <section className="py-28 px-6">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400 mt-5">
            Everything you need to know about Kotak 811.
          </p>

        </div>

        <div className="space-y-5">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-7"
            >

              <h3 className="text-xl font-semibold">
                {item.question}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {item.answer}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQ;