import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Target, BarChart3, Users, Zap, Search, Sparkles, Rocket, Activity } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBooking } from "../../components/BookingContext";
import CTASection from "../../components/CTASection";
import ReviewsSection from "../../components/ReviewsSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Demand Generation",
    description: "Strategic campaigns designed to build awareness and create consistent interest in your products or services.",
    icon: TrendingUp,
  },
  {
    title: "Lead Acquisition",
    description: "High-converting funnels and landing pages that turn visitors into qualified sales opportunities.",
    icon: Target,
  },
  {
    title: "Performance Marketing",
    description: "Data-driven paid media strategies across Search, Social, and Display that maximize ROI.",
    icon: BarChart3,
  },
  {
    title: "SEO & Content",
    description: "Long-term organic growth strategies that establish authority and drive sustainable traffic.",
    icon: Search,
  },
  {
    title: "Marketing Automation",
    description: "Streamlined systems that nurture leads and improve efficiency throughout the customer journey.",
    icon: Zap,
  },
  {
    title: "Customer Insights",
    description: "Deep-dive analytics and user research to understand behavior and optimize for growth.",
    icon: Users,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit",
    description: "We analyze your current marketing stack, data, and performance to identify gaps and opportunities.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "We build a custom growth roadmap aligned with your specific business objectives and KPIs.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Our team launches and manages campaigns with a focus on rapid testing and iteration.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous monitoring and data-driven adjustments to scale what works and cut what doesn't.",
  },
];

export default function GrowthMarketing() {
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
      y: 30,
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
      {/* Growth Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-blue-600 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '60px 60px' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-[120px]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8"
              >
                <Activity size={16} className="text-white animate-pulse" />
                <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Service / 02 — Performance Engine</span>
              </motion.div>
              
              <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-12 reveal-text">
                Growth <br />
                <span className="text-black">Marketing</span>
              </h1>
              
              <p className="text-xl md:text-4xl font-medium leading-[1.1] max-w-3xl reveal-text text-white/90 mb-12">
                We build high-performance marketing engines that turn attention into measurable pipeline and sustainable revenue.
              </p>
              
              <div className="flex flex-wrap gap-6 reveal-text">
                <button 
                  onClick={openBookingModal}
                  className="group flex items-center gap-3 bg-black text-white px-10 py-6 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
                >
                  Scale Your Brand
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative aspect-square">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                ></motion.div>
                <div className="absolute inset-4 border border-white/10 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <motion.span 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-8xl font-black block mb-2"
                    >
                      ROI
                    </motion.span>
                    <span className="font-mono text-xs uppercase tracking-widest opacity-60">Driven Results</span>
                  </div>
                </div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-4 rounded-2xl border border-white/10"
                >
                  <TrendingUp size={32} />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-blue-600 p-4 rounded-2xl border border-blue-600"
                >
                  <Target size={32} />
                </motion.div>
                <motion.div 
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black p-4 rounded-2xl border border-white/10"
                >
                  <BarChart3 size={32} />
                </motion.div>
                <motion.div 
                  animate={{ x: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white text-blue-600 p-4 rounded-2xl border border-blue-600"
                >
                  <Zap size={32} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Scroller */}
      <div className="w-full overflow-hidden border-b border-black/10 bg-black text-white py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-4xl font-black uppercase tracking-widest px-4">
            <span>Demand Gen</span><span className="text-blue-600">✦</span>
            <span>Lead Acquisition</span><span className="text-blue-600">✦</span>
            <span>Performance Engine</span><span className="text-blue-600">✦</span>
            <span>Demand Gen</span><span className="text-blue-600">✦</span>
            <span>Lead Acquisition</span><span className="text-blue-600">✦</span>
            <span>Performance Engine</span><span className="text-blue-600">✦</span>
          </div>
        </div>
      </div>

      {/* Capabilities Section */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-6 block">Our Capabilities</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] max-w-4xl line-clamp-2">
                Growth <br/> <span className="text-blue-600">Engines</span>
              </h2>
            </div>
            <p className="text-xl text-black/60 font-medium max-w-md leading-relaxed pb-2">
              We move beyond surface-level metrics to focus on what actually drives your business forward: pipeline and revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white p-12 group hover:bg-black transition-colors duration-500">
                <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl mb-10 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-black/60 font-medium leading-relaxed group-hover:text-white/70 transition-colors">
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
      <section className="py-32 px-6 md:px-12 bg-gray-50 border-y border-black/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-black brutal-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                alt="Marketing Data" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-12 rounded-[2rem] brutal-shadow hidden md:block">
              <h4 className="text-4xl font-black uppercase tracking-tighter mb-2">140%</h4>
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-80">Avg. ROI Increase</p>
            </div>
          </div>
          
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-8 block">Why Zemnas</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.85] max-w-4xl line-clamp-2">
              Data <br/> <span className="text-blue-600">First</span>
            </h2>
            <p className="text-2xl text-black/70 mb-16 font-medium leading-relaxed">
              We move beyond surface-level metrics to focus on what actually drives your business forward: pipeline and revenue.
            </p>
            <div className="space-y-8">
              {[
                { title: "Data-Driven Decision Making", desc: "No guessing. Every move is backed by performance data." },
                { title: "Full-Funnel Optimization", desc: "From awareness to conversion, we optimize every touchpoint." },
                { title: "Rapid Testing Frameworks", desc: "We iterate fast to find the winning strategies for your brand." },
                { title: "Transparent Reporting", desc: "Real-time visibility into the metrics that matter." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-black/50 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process - Creative Redesign */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-6 block">The Roadmap</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] max-w-4xl line-clamp-2">
                Our <span className="text-blue-600">Process</span>
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step group">
                <div className="relative mb-10">
                  <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center text-2xl font-black group-hover:bg-blue-600 transition-colors">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-black/10 -translate-y-1/2"></div>
                  )}
                </div>
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
