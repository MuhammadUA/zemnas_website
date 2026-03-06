import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Insights from "./pages/Insights";
import Services from "./pages/Services";
import CreativeStudio from "./pages/services/CreativeStudio";
import GrowthMarketing from "./pages/services/GrowthMarketing";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { BookingProvider } from "./components/BookingContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <BookingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="work" element={<Work />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="case-studies/:id" element={<CaseStudy />} />
            <Route path="insights" element={<Insights />} />
            <Route path="insights/:id" element={<CaseStudyDetail />} />
            <Route path="services" element={<Services />} />
            <Route path="services/creative-studio" element={<CreativeStudio />} />
            <Route path="services/growth-marketing" element={<GrowthMarketing />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            {/* Catch-all route */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
      <Analytics />
      <SpeedInsights />
    </BookingProvider>
  );
}
