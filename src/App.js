import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from './components/layout';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Pricing from "./pages/pricing";
import Services from "./pages/services";

function App() {
  return (
    // <div>
    //   <Layout></Layout>
    // </div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/About" component={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Pricing" element={<Pricing />} />
                <Route path="/Services" element={<Services />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App;

