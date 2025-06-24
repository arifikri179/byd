import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShowroomPage from "./pages/ShowroomPage";
import SealionPage from "./pages/Sealion";
import Seal from "./pages/SealPage";
import M6Page from "./pages/M6Page";
import Contact from "./pages/contact";
import Review from "./pages/Review";
import WhatsAppButton from "./components/wa";
import Atto from "./pages/AttoPage";
import Dolphine from "./pages/DolphinPage";
import Visit from "./components/Visit"
// Section component
const Section = ({ id, title, children, noPadding }) => (
  <section
    id={id}
    className={`text-center ${noPadding ? '' : 'py-2'} bg-white ${id === 'contact' ? '' : ''}`}
  >
    {title && (
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-8">
        {title}
      </h2>
    )}
    {children}
  </section>
);

// Main landing page
function MainLanding() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // Delay to wait for DOM render
      }
    }
  }, [location]);

  return (
    <>
       <Visit />
      <Home />
      <Section id="showroom" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <div className="text-blue-600 text-sm sm:text-base md:text-lg">
          <ShowroomPage />
        </div>
      </Section>
      <Section id="review" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} noPadding>
        <Review />
      </Section>
      <Section id="contact" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} noPadding>
        <Contact />
      </Section>
      <WhatsAppButton />
    </>
  );
}

// App wrapper
function App() {
  return (
    <>
    
      <Navbar />
    
      <main className="pt-0 py-0" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/sealion" element={<SealionPage />} />
          <Route path="/m6" element={<M6Page />} />
          <Route path="/seal" element={<Seal />} />
          <Route path="/atto3" element={<Atto />} />
          <Route path="/dolphin" element={<Dolphine />} />
        </Routes>
      </main>
      <WhatsAppButton />
    </>
  );
}

export default App;
