import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";
import DriveWorkSection from "../components/DriveWorkSection";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Hero Text Animation
    gsap.fromTo(
      heroTextRef.current,
      { y: 100, opacity: 0, rotationX: -45 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <div className="flex flex-col w-full" ref={containerRef}>
      <section className="min-h-[60vh] flex flex-col justify-end pb-12 px-6 md:px-12 border-b border-black/10 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-sm uppercase tracking-widest text-blue-600 mb-8 block">Our Work</span>
            <h1 ref={heroTextRef} className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase text-black mb-12 transform-gpu origin-bottom">
              Selected <br />
              <span className="text-blue-600">Cases</span>
            </h1>
          </motion.div>
          
          <div className="border-t border-black/10 pt-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-4xl font-medium max-w-3xl leading-[1.1] text-black/80"
            >
              Explore how we've helped ambitious companies transform their digital presence and achieve measurable growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Marquee Scroller */}
      <div className="w-full overflow-hidden border-b border-black/10 bg-black text-white py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-4xl font-black uppercase tracking-widest px-4">
            <span>Selected Cases</span><span className="text-blue-600">✦</span>
            <span>Digital Excellence</span><span className="text-blue-600">✦</span>
            <span>Measurable Growth</span><span className="text-blue-600">✦</span>
            <span>Selected Cases</span><span className="text-blue-600">✦</span>
            <span>Digital Excellence</span><span className="text-blue-600">✦</span>
            <span>Measurable Growth</span><span className="text-blue-600">✦</span>
          </div>
        </div>
      </div>

      {/* Dynamic Drive Portfolio */}
      <div className="bg-white px-6 md:px-12 pt-24">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-600 mb-6 block">Digital Archive</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-12 max-w-4xl line-clamp-2">
            Dynamic <br/> <span className="text-blue-600">Portfolio</span>
          </h2>
        </div>
      </div>
      <DriveWorkSection />

      <CTASection />
      
      <ReviewsSection />
    </div>
  );
}
