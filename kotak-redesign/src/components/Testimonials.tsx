const testimonials = [
  {
    name: "Rahul Sharma",
    text: "The best digital banking experience I’ve ever used.",
  },
  {
    name: "Priya Verma",
    text: "Smooth onboarding and amazing cashback rewards.",
  },
  {
    name: "Aman Gupta",
    text: "Premium UI and super fast banking services.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            Loved By <span className="text-orange-500">Millions</span>
          </h2>

          <p className="text-gray-400 mt-5">
            Real users sharing their premium banking experience.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
            >

              <div className="flex gap-1 text-orange-500 mb-5">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-relaxed">
                "{item.text}"
              </p>

              <h3 className="mt-6 font-semibold text-lg">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;