import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, y: 50 }}
          className="fixed bottom-8 left-8 z-[100] max-w-sm w-full"
        >
          <div className="bg-black text-white p-8 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Animated Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/20 blur-[60px] rounded-full group-hover:bg-blue-600/30 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Cookie size={20} className="text-white" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blue-500 font-black">Cookie Policy</span>
              </div>

              <p className="text-sm font-medium leading-relaxed text-white/70 mb-8">
                We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleAccept}
                  className="w-full py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all duration-500"
                >
                  Accept All
                </button>
                <div className="flex justify-center gap-6">
                  <Link to="/privacy" className="font-mono text-[9px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Privacy</Link>
                  <Link to="/terms" className="font-mono text-[9px] uppercase tracking-widest text-white/40 hover:text-white transition-colors">Terms</Link>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
