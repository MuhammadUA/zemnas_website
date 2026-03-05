import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Code, Megaphone, CheckCircle2, Zap, Target, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBooking } from "../components/BookingContext";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Creative Studio",
    subtitle: "Design & Production",
    description: "Video, motion graphics, brand identity, and visual storytelling that captures attention and communicates your value.",
    number: "01",
    link: "/services/creative-studio"
  },
  {
    title: "Marketing Engine",
    subtitle: "Growth & Demand",
    description: "B2B marketing strategies, conversion funnels, and performance campaigns that drive measurable pipeline growth.",
    number: "02",
    link: "/services/growth-marketing"
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { openBookingModal } = useBooking();

  useGSAP(() => {
    // Hero Text Animation
    gsap.fromTo(
      heroTextRef.current,
      { y: 100, opacity: 0, rotationX: -45 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );

    // Services Stagger
    if (servicesRef.current) {
      const serviceItems = gsap.utils.toArray('.service-item');
      gsap.fromTo(
        serviceItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]" ref={containerRef}>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 border-b border-black/10 relative overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/5 rounded-full border border-black/10 mb-6 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium uppercase tracking-widest">Digital Systems That Scale</span>
            </span>
            <h1 ref={heroTextRef} className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase text-black mb-6 md:mb-12 transform-gpu origin-bottom">
              We build the systems behind <br />
              <span className="text-blue-600">ambitious growth.</span>
            </h1>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 border-t border-black/10 pt-8 md:pt-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-4xl font-medium max-w-3xl leading-[1.1] text-black/80"
            >
              Creative and marketing in one integrated approach, transforming how businesses connect, convert, and scale.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex-shrink-0 mb-4 md:mb-0"
            >
              <button
                onClick={openBookingModal}
                className="group relative flex items-center justify-center px-10 md:px-12 py-5 md:py-6 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-600"
              >
                <div className="relative z-10 flex items-center gap-4">
                  <span className="font-mono text-sm uppercase tracking-widest font-black">Start a Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full overflow-hidden border-b border-black/10 bg-black text-white py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-4xl font-black uppercase tracking-widest px-4">
            <span>Creative Studio</span><span className="text-blue-600">✦</span>
            <span>Growth Marketing</span><span className="text-blue-600">✦</span>
            <span>Performance Systems</span><span className="text-blue-600">✦</span>
            <span>Creative Studio</span><span className="text-blue-600">✦</span>
            <span>Growth Marketing</span><span className="text-blue-600">✦</span>
            <span>Performance Systems</span><span className="text-blue-600">✦</span>
          </div>
        </div>
      </div>

      {/* Services List / Capabilities */}
      <section className="w-full" ref={servicesRef}>
        <div className="max-w-[1400px] mx-auto p-8 md:p-12 lg:p-24">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-600 mb-8 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.85] max-w-4xl line-clamp-2">
            Two pillars of <br/> <span className="text-blue-600">growth</span>
          </h2>
          <p className="text-2xl md:text-3xl font-medium leading-[1.2] max-w-3xl text-black/70">
            An integrated approach where creative and marketing work together to build momentum and measurable results.
          </p>
        </div>
        
        <div className="border-t border-black/10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-item group border-b border-black/10 hover:bg-black hover:text-white transition-colors duration-500"
            >
              <Link to={service.link} className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 items-center">
                <div className="col-span-1 md:col-span-2 p-8 md:p-12 md:border-r border-black/10 group-hover:border-white/20 transition-colors">
                  <span className="font-mono text-2xl font-black">{service.number}</span>
                </div>
                <div className="col-span-1 md:col-span-5 p-8 md:p-12 md:border-r border-black/10 group-hover:border-white/20 transition-colors">
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter group-hover:text-blue-500 transition-colors leading-none">
                    {service.title}
                  </h2>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-black/50 group-hover:text-white/50 mt-6">{service.subtitle}</p>
                </div>
                <div className="col-span-1 md:col-span-4 p-8 md:p-12">
                  <p className="text-xl font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                    {service.description}
                  </p>
                </div>
                <div className="col-span-1 md:col-span-1 p-8 md:p-12 flex justify-end md:justify-center">
                  <ArrowRight className="w-10 h-10 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section - New */}
      <section className="py-32 px-6 md:px-12 bg-gray-50 border-b border-black/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-600 mb-8 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.85] max-w-4xl line-clamp-2">
                Strategy <br/> <span className="text-blue-600">First</span>
              </h2>
              <p className="text-2xl text-black/60 mb-16 font-medium leading-relaxed">
                We don't just execute. We architect. Every pixel and every campaign is built on a foundation of deep market intelligence and business strategy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: "Integrated Approach", desc: "Creative and marketing working as one.", icon: Zap },
                  { title: "Data-Driven", desc: "Decisions backed by performance metrics.", icon: Target },
                  { title: "Rapid Scaling", desc: "Systems built for high-velocity growth.", icon: TrendingUp },
                  { title: "Partner Mindset", desc: "We are an extension of your team.", icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                      <item.icon size={24} />
                    </div>
                    <h4 className="text-2xl font-black uppercase tracking-tight">{item.title}</h4>
                    <p className="text-black/50 font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-2 border-black brutal-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Strategy Session" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center text-white p-8 text-center rotate-12 brutal-shadow hidden lg:flex">
                <span className="font-black uppercase tracking-tighter text-xl leading-none">Built for Scale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <CTASection />

      {/* Image / Statement Split - How Zemnas Thinks */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10 bg-white">
        <div className="p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-center">
          <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-600 mb-8 block">Our Philosophy</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.85] max-w-4xl line-clamp-2">
            How Zemnas <br/> <span className="text-blue-600">thinks</span>
          </h2>
          <p className="text-2xl font-medium leading-relaxed max-w-xl text-black/70 mb-16">
            Our approach is built on principles that guide every project from discovery to delivery.
          </p>
          <div className="space-y-12">
            {[
              { num: "01", title: "Strategy before execution", desc: "Every project begins with understanding your goals, audience, and market. We align every decision with measurable outcomes." },
              { num: "02", title: "Design aligned with performance", desc: "Beautiful isn't enough. Our creative work is built to convert, engage, and drive the metrics that matter to your business." },
              { num: "03", title: "Technology with real use cases", desc: "We don't build for the sake of innovation. Every tool, system, and integration solves a specific problem you face." },
              { num: "04", title: "Long-term partnership mindset", desc: "We're not here for one project. We build relationships that grow with your business and evolve with your needs." },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="font-mono text-xl font-black text-blue-600/20 group-hover:text-blue-600 transition-colors">{item.num}</span>
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                  <p className="text-xl text-black/60 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[60vh] lg:min-h-full bg-black overflow-hidden group grid grid-cols-2 grid-rows-2">
          <div className="relative overflow-hidden border-r border-b border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2000&auto=format&fit=crop" 
              alt="Creative Abstract 1" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative overflow-hidden border-b border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
              alt="Creative Abstract 2" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 delay-75"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative overflow-hidden border-r border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2000&auto=format&fit=crop" 
              alt="Creative Abstract 3" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 delay-150"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=2000&auto=format&fit=crop" 
              alt="Creative Abstract 4" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 delay-200"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
          <div className="absolute bottom-12 left-12 right-12 z-10">
             <p className="text-white text-3xl font-black uppercase tracking-tighter leading-none">"Design is how it works."</p>
          </div>
        </div>
      </section>

      {/* Reviews Section at the end */}
      <ReviewsSection />
    </div>
  );
}
