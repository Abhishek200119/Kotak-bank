import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Rewards from "./pages/Rewards";
import Faq from "./pages/Faq";

function App() {
  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">

      {/* Global Navbar */}

      <Navbar />

      {/* Pages */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/features"
          element={<Features />}
        />

        <Route
          path="/rewards"
          element={<Rewards />}
        />

        <Route
          path="/faq"
          element={<Faq />}
        />

      </Routes>

      {/* Global Footer */}

      <Footer />

    </div>
  );
}

export default App;