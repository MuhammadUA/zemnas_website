import { Outlet, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { useBooking } from "./BookingContext";
import CookieBanner from "./CookieBanner";

const navLinks = [
  { name: "Work", path: "/work" },
  { name: "Case Studies", path: "/case-studies" },
  { 
    name: "Services", 
    path: "/services",
    subLinks: [
      { name: "Creative Studio", path: "/services/creative-studio" },
      { name: "Growth Marketing", path: "/services/growth-marketing" },
    ]
  },
  { name: "About", path: "/about" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBooking();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-blue-600 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 h-20">
          <Link to="/" className="flex items-center gap-2 z-50 relative group">
            <img src="/logo.png" alt="Zemnas Logo" className="h-8 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center h-full">
            {navLinks.map((link) => (
              <div key={link.path} className="h-full relative group/nav">
                <Link
                  to={link.path}
                  className={cn(
                    "h-full flex items-center px-6 text-sm font-semibold uppercase tracking-widest border-l border-black/10 transition-colors hover:bg-black hover:text-white",
                    location.pathname === link.path || location.pathname.startsWith(link.path + '/') ? "bg-black/5" : ""
                  )}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="absolute top-full left-0 w-64 bg-white border border-black/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 shadow-xl">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors border-b border-black/5 last:border-0"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center pl-6 gap-6">
              <button
                onClick={openBookingModal}
                className="group relative flex items-center justify-center px-6 py-3 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-600"
              >
                <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest">Start a Project</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col"
          >
            <nav className="flex flex-col text-4xl font-black uppercase tracking-tighter">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-6 border-b border-black/10 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBookingModal();
                }}
                className="py-6 flex items-center justify-between text-blue-600"
              >
                Start a Project
                <ArrowRight className="w-8 h-8" />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20 min-h-[calc(100vh-400px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <CookieBanner />

      <footer className="bg-black text-white pt-32 pb-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
            <div className="md:col-span-4">
              <Link to="/" className="flex items-center gap-2 mb-6 group">
                <img src="/logo.png" alt="Zemnas Logo" className="h-8 w-auto object-contain" />
              </Link>
              <p className="text-white/60 text-lg leading-relaxed max-w-sm font-medium">
                We combine creative and marketing to build digital systems that transform ideas into measurable growth.
              </p>
            </div>
            
            <div className="md:col-span-2 md:col-start-7">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Services</h4>
              <ul className="space-y-4 font-semibold uppercase tracking-wider">
                <li><Link to="/services/creative-studio" className="hover:text-blue-500 transition-colors">Creative Studio</Link></li>
                <li><Link to="/services/growth-marketing" className="hover:text-blue-500 transition-colors">Growth Marketing</Link></li>
                <li><Link to="/services" className="hover:text-blue-500 transition-colors">All Services</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Company</h4>
              <ul className="space-y-4 font-semibold uppercase tracking-wider">
                <li><Link to="/about" className="hover:text-blue-500 transition-colors">About</Link></li>
                <li><Link to="/work" className="hover:text-blue-500 transition-colors">Work</Link></li>
                <li><Link to="/case-studies" className="hover:text-blue-500 transition-colors">Case Studies</Link></li>
                <li><Link to="/insights" className="hover:text-blue-500 transition-colors">Insights</Link></li>
                <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">Connect</h4>
              <ul className="space-y-4 font-semibold uppercase tracking-wider">
                <li><a href="tel:7789006780" className="hover:text-blue-500 transition-colors">(778) 900-6780</a></li>
                <li><a href="mailto:contact@zemnas.com" className="hover:text-blue-500 transition-colors">contact@zemnas.com</a></li>
                <li><a href="https://www.linkedin.com/company/zemnas" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="w-full border-t border-white/20 pt-10 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-white/40">
            <p>© {new Date().getFullYear()} ZEMNAS.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>

      </footer>
    </div>
  );
}
