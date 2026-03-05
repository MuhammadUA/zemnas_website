import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    category: "Creative Studio",
    link: "/services/creative-studio",
    description: "Creative built for modern digital brands. Video, motion, UI, and visual systems designed to work across platforms.",
    items: [
      "Explainer & Product Videos",
      "Motion & Animation",
      "Short-form Content",
      "UI/UX Design",
      "Marketing Creatives",
      "Brand Visual Systems",
    ],
  },
  {
    category: "Growth Marketing",
    link: "/services/growth-marketing",
    description: "Growth systems built for consistency, not quick wins. We design and manage digital marketing systems that support long-term demand.",
    items: [
      "Demand & Lead Generation",
      "Funnels & Landing Pages",
      "Website & Marketing Infrastructure",
      "Performance Optimization",
    ],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Hero Text Animation
    gsap.fromTo(
      heroTextRef.current,
      { y: 100, opacity: 0, rotationX: -45 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );

    // List Items Stagger
    const sections = gsap.utils.toArray('.service-section');
    sections.forEach((section: any) => {
      const items = section.querySelectorAll('.service-list-item');
      gsap.fromTo(
        items,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          }
        }
      );
    });

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
            <span className="font-mono text-sm uppercase tracking-widest text-blue-600 mb-8 block">What We Do</span>
            <h1 ref={heroTextRef} className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase text-black mb-12 transform-gpu origin-bottom">
              Growth <br />
              <span className="text-blue-600">Solutions</span>
            </h1>
          </motion.div>
          
          <div className="border-t border-black/10 pt-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-4xl font-medium max-w-3xl leading-[1.1] text-black/80"
            >
              We don't just offer isolated services; we build integrated digital systems that work together to scale your business.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Marquee Scroller */}
      <div className="w-full overflow-hidden border-b border-black/10 bg-blue-600 text-white py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-4xl font-black uppercase tracking-widest px-4">
            <span>Growth Solutions</span><span className="text-black">✦</span>
            <span>Creative Studio</span><span className="text-black">✦</span>
            <span>Growth Marketing</span><span className="text-black">✦</span>
            <span>Growth Solutions</span><span className="text-black">✦</span>
            <span>Creative Studio</span><span className="text-black">✦</span>
            <span>Growth Marketing</span><span className="text-black">✦</span>
          </div>
        </div>
      </div>

      <section className="w-full">
        {services.map((section, index) => (
          <div
            key={section.category}
            className="service-section border-b border-black/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 p-8 md:p-12 lg:p-24 lg:border-r border-black/10 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
                <div className="sticky top-32 relative z-10">
                  <span className="font-mono text-sm uppercase tracking-widest text-blue-500 mb-8 block">0{index + 1}</span>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 max-w-4xl line-clamp-2">{section.category}</h2>
                  <p className="text-xl font-medium leading-relaxed opacity-80 mb-12">
                    {section.description}
                  </p>
                  <Link
                    to={section.link}
                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                  >
                    <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest">View Details</span>
                    <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              <div className="lg:col-span-7 bg-white">
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    className="service-list-item p-8 md:p-12 border-b border-black/10 last:border-b-0 hover:bg-blue-600 hover:text-white transition-colors group flex items-center justify-between cursor-pointer"
                  >
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{item}</h3>
                    <ArrowRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTASection />
      
      <ReviewsSection />
    </div>
  );
}
