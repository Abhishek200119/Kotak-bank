import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import banner1 from "../assets/1.png";
import banner2 from "../assets/2.png";
import banner3 from "../assets/3.png";

const banners = [banner1, banner2, banner3];

const Hero = () => {

  const [currentBanner, setCurrentBanner] = useState(0);

  // Auto Slider

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentBanner((prev) => (prev + 1) % banners.length);

    }, 9000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      id="home"
      className="w-full bg-[#050816] overflow-hidden"
    >

      {/* ================================= */}
      {/* Banner Section */}
      {/* ================================= */}

      <div className="relative w-full overflow-hidden">

        <AnimatePresence mode="wait">

          <motion.img
            key={currentBanner}
            src={banners[currentBanner]}
            alt="banner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="
              w-full
              h-auto
              object-cover
              object-center
              block
            "
          />

        </AnimatePresence>

        {/* Dots */}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-20">

          {banners.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`rounded-full transition-all duration-500 ${
                currentBanner === index
                  ? "w-10 h-3 bg-[#ED1C24]"
                  : "w-3 h-3 bg-white/70"
              }`}
            />

          ))}

        </div>

      </div>

      {/* ================================= */}
      {/* Content Section */}
      {/* ================================= */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[5px] text-[#ED1C24] text-sm font-semibold mb-6"
            >
              Premium Digital Banking
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-white"
            >

              Banking <br />

              That Feels{" "}

              <span className="text-[#ED1C24]">
                Premium.
              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              className="mt-8 text-lg leading-relaxed text-gray-300 max-w-xl"
            >
              Open your zero balance savings account instantly
              with smart banking, premium rewards, cashback benefits,
              and seamless digital experiences.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="flex flex-wrap gap-5 mt-10"
            >

              <button className="bg-[#ED1C24] hover:bg-[#ff2d36] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">

                Open Account

              </button>

              <button className="border border-white/20 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300">

                Watch Demo

              </button>

            </motion.div>

            {/* Stats */}

            <div className="flex flex-wrap gap-10 mt-14">

              <div>
                <h3 className="text-4xl font-bold text-[#ED1C24]">
                  10M+
                </h3>

                <p className="text-gray-400 mt-2">
                  Active Users
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#ED1C24]">
                  ₹0
                </h3>

                <p className="text-gray-400 mt-2">
                  Minimum Balance
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#ED1C24]">
                  5%
                </h3>

                <p className="text-gray-400 mt-2">
                  Cashback Rewards
                </p>
              </div>

            </div>

          </div>

          {/* Right Card */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="flex justify-center"
          >

            <div className="relative">

              {/* Glow */}

              <div className="absolute inset-0 bg-[#ED1C24]/20 blur-[70px] rounded-full" />

              {/* Card */}

              <div className="relative w-full max-w-[500px] h-[300px] rounded-[40px] bg-gradient-to-br from-[#002B5B] via-[#07152B] to-[#ED1C24] border border-white/10 p-10 overflow-hidden shadow-[0_20px_100px_rgba(237,28,36,0.25)]">

                <div className="flex justify-between items-start">

                  <div>

                    <p className="text-white/70 text-sm">
                      Kotak Mahindra Bank
                    </p>

                    <h2 className="text-white text-5xl font-bold mt-3">
                      Kotak 811
                    </h2>

                  </div>

                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/10" />

                </div>

                <div className="mt-20">

                  <p className="text-white/60 uppercase tracking-[4px] text-sm">
                    Premium Debit Card
                  </p>

                  <h3 className="text-white text-4xl tracking-[6px] mt-5">
                    4587 XXXX XXXX 2489
                  </h3>

                </div>

                <div className="flex justify-between mt-12">

                  <div>

                    <p className="text-white/50 text-xs">
                      Card Holder
                    </p>

                    <h4 className="text-white text-xl mt-2 font-semibold">
                      Abhishek Rajput
                    </h4>

                  </div>

                  <div>

                    <p className="text-white/50 text-xs">
                      Valid Thru
                    </p>

                    <h4 className="text-white text-xl mt-2 font-semibold">
                      12/30
                    </h4>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );

};

export default Hero;