import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Pricing from "./pages/pricing";
import Services from "./pages/services";

function App() {
  return (
    <BrowserRouter>
        <Routes>
                <Route index element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Services" element={<Services />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;

