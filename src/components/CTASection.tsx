import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { useBooking } from "./BookingContext";

export default function CTASection() {
  const { openBookingModal } = useBooking();

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative bg-black rounded-[2rem] p-8 md:p-20 overflow-hidden group text-center flex flex-col items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#2563eb_0%,transparent_70%)] blur-[100px] animate-pulse"></div>
          </div>
          
          {/* Floating Icons */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 text-blue-500 opacity-40 hidden md:block"
          >
            <Sparkles size={48} />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-20 text-blue-400 opacity-40 hidden md:block"
          >
            <Zap size={56} />
          </motion.div>

          <motion.div 
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-20 right-10 text-blue-600 opacity-40 hidden md:block"
          >
            <Target size={40} />
          </motion.div>

          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500 mb-6 block"
            >
              Ready to scale?
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-8"
            >
              Let's Build Your <br/> <span className="text-blue-500">Digital Empire</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 mb-12 font-medium leading-relaxed max-w-2xl mx-auto"
            >
              Stop settling for average. Partner with Zemnas to transform your vision into a high-performance digital system that scales.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
              <button 
                onClick={openBookingModal}
                className="group flex items-center justify-center gap-3 bg-blue-600 text-white px-8 md:px-10 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-500"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <Link 
                to="/work"
                className="flex items-center justify-center gap-3 bg-white/10 text-white px-8 md:px-10 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white/20 transition-all duration-500 border border-white/10"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
          
          {/* Decorative Rocket */}
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20px] right-[-20px] text-blue-600/20 hidden lg:block"
          >
            <Rocket size={300} strokeWidth={1} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
