import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Kitchens from "./pages/Kitchens.jsx";
import Bedrooms from "./pages/Bedrooms.jsx";
import Inspiration from "./pages/Inspiration.jsx";
import InspirationPost from "./pages/InspirationPost.jsx";
import Gallery from "./pages/Gallery.jsx";
import Showroom from "./pages/Showroom.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/kitchens" element={<Kitchens />} />
          <Route path="/bedrooms" element={<Bedrooms />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/inspiration/:slug" element={<InspirationPost />} />
          <Route path="/project-gallery" element={<Gallery />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
}
