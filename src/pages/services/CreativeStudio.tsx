import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Play, Layout, Palette, Video, Camera, PenTool, Sparkles, Zap, Target } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBooking } from "../../components/BookingContext";
import CTASection from "../../components/CTASection";
import ReviewsSection from "../../components/ReviewsSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Video Production",
    description: "High-impact brand films, product explainers, and social-first video content that stops the scroll.",
    icon: Video,
  },
  {
    title: "Motion Graphics",
    description: "2D and 3D animation that brings complex ideas to life with fluid motion and visual flair.",
    icon: Play,
  },
  {
    title: "Brand Identity",
    description: "Comprehensive visual systems including logos, typography, and color palettes that define your brand.",
    icon: Palette,
  },
  {
    title: "UI/UX Design",
    description: "User-centric digital interfaces that balance aesthetic beauty with functional performance.",
    icon: Layout,
  },
  {
    title: "Content Strategy",
    description: "Strategic storytelling that aligns your creative assets with your business objectives.",
    icon: PenTool,
  },
  {
    title: "Photography",
    description: "Professional lifestyle and product photography that captures the essence of your brand.",
    icon: Camera,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals to build a solid creative foundation.",
  },
  {
    number: "02",
    title: "Concept",
    description: "Our team develops unique creative directions that challenge the status quo.",
  },
  {
    number: "03",
    title: "Production",
    description: "We bring the vision to life with meticulous attention to detail and craft.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "Final assets are optimized for all platforms and delivered for maximum impact.",
  },
];

export default function CreativeStudio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openBookingModal } = useBooking();

  useGSAP(() => {
    gsap.from(".reveal-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });

    gsap.from(".service-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 80%",
      },
    });

    gsap.from(".process-step", {
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".process-grid",
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]" ref={containerRef}>
      {/* Creative Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-black text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #2563eb 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1)_0%,transparent_70%)] blur-[120px]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
              >
                <Sparkles size={16} className="text-blue-500 animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Service / 01 — Visual Systems</span>
              </motion.div>
              
              <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-12 reveal-text">
                Creative <br />
                <span className="text-blue-600">Studio</span>
              </h1>
              
              <p className="text-xl md:text-4xl font-medium leading-[1.1] max-w-3xl reveal-text text-white/80 mb-12">
                We don't just design. We build visual languages that command attention and define industry leaders.
              </p>
              
              <div className="flex flex-wrap gap-6 reveal-text">
                <button 
                  onClick={openBookingModal}
                  className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative aspect-square">
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-blue-600/30 rounded-full"
                ></motion.div>
                <div className="absolute inset-4 border border-white/10 rounded-full flex items-center justify-center overflow-hidden bg-blue-600/5 backdrop-blur-sm">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full"
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop" 
                      alt="Creative Abstract" 
                      className="w-full h-full object-cover opacity-40 grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-2xl border border-white/10"
                >
                  <Palette size={32} />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-black p-4 rounded-2xl border border-blue-600"
                >
                  <Video size={32} />
                </motion.div>
                <motion.div 
                  animate={{ x: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-2xl border border-white/10"
                >
                  <PenTool size={32} />
                </motion.div>
                <motion.div 
                  animate={{ x: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white text-black p-4 rounded-2xl border border-blue-600"
                >
                  <Layout size={32} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Scroller */}
      <div className="w-full overflow-hidden border-b border-black/10 bg-blue-600 text-white py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-4xl font-black uppercase tracking-widest px-4">
            <span>Video Production</span><span className="text-black">✦</span>
            <span>Motion Graphics</span><span className="text-black">✦</span>
            <span>Brand Identity</span><span className="text-black">✦</span>
            <span>Video Production</span><span className="text-black">✦</span>
            <span>Motion Graphics</span><span className="text-black">✦</span>
            <span>Brand Identity</span><span className="text-black">✦</span>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-6 block">Our Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] max-w-4xl line-clamp-2">
                High-End <br/> <span className="text-blue-600">Production</span>
              </h2>
            </div>
            <p className="text-xl text-black/60 font-medium max-w-md leading-relaxed pb-2">
              From brand identity to full-scale video production, we provide the creative firepower needed to scale your digital presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white p-12 group hover:bg-blue-600 transition-colors duration-500">
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl mb-10 group-hover:bg-white group-hover:text-blue-600 transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-black/60 font-medium leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box Mid-Page */}
      <CTASection />

      {/* Why Zemnas - Creative Redesign */}
      <section className="py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] border-[1px] border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-white/20 rounded-full"></div>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 mt-12">
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500 mb-8 block">Why Zemnas</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.85] max-w-4xl line-clamp-2">
              Beyond <br/> <span className="text-blue-500">Aesthetics</span>
            </h2>
            <p className="text-2xl text-white/60 mb-16 font-medium leading-relaxed">
              We don't just make things look pretty. We build creative assets that serve as the high-performance fuel for your growth engine.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { title: "Strategy First", desc: "Creative aligned with business goals." },
                { title: "High-End Quality", desc: "World-class production standards." },
                { title: "Data Driven", desc: "Optimized for conversion and engagement." },
                { title: "Seamless Flow", desc: "Integrated with your marketing systems." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-black uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-white/40 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Creative Redesign */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-32">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-6 block">The Workflow</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] max-w-4xl line-clamp-2 mx-auto">
              Our <span className="text-blue-600">Process</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step bg-white p-12 group hover:bg-blue-50 transition-colors duration-500">
                <span className="text-6xl font-black text-blue-600/10 mb-12 block group-hover:text-blue-600/20 transition-colors">{step.number}</span>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">{step.title}</h3>
                <p className="text-black/60 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section at the end */}
      <ReviewsSection />
    </div>
  );
}
