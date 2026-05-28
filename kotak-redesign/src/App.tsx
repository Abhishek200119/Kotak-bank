import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Rewards from "./pages/Rewards";
import Faq from "./pages/Faq";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

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
  );
}

export default App;