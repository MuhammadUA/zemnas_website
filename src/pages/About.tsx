import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Target, Zap, Shield, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBooking } from "../components/BookingContext";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const { openBookingModal } = useBooking();

  useGSAP(() => {
    // Values Stagger
    if (valuesRef.current) {
      const valueCards = gsap.utils.toArray('.value-card');
      gsap.fromTo(
        valueCards,
        { y: 100, opacity: 0, rotationY: 15 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 70%",
          }
        }
      );
    }

    // Parallax Background
    gsap.to('.parallax-bg', {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: '.parallax-container',
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div className="flex flex-col w-full bg-white text-black" ref={containerRef}>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 border-b border-black/10 relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.2)_0%,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-sm uppercase tracking-[0.4em] text-blue-500 mb-8 block">About Zemnas Agency</span>
            <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-12">
              The <span className="text-blue-600">Growth</span> <br />
              Architects
            </h1>
            <p className="text-xl md:text-4xl font-medium leading-[1.1] max-w-4xl text-white/70">
              Zemnas is a high-performance digital agency that blends creative artistry with rigorous data science to build systems that scale industry leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Marquee Scroller */}
      <div className="w-full overflow-hidden border-b border-black/10 bg-blue-600 text-white py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-4xl font-black uppercase tracking-widest px-4">
            <span>The Growth Architects</span><span className="text-black">✦</span>
            <span>Strategy First</span><span className="text-black">✦</span>
            <span>Data Driven</span><span className="text-black">✦</span>
            <span>The Growth Architects</span><span className="text-black">✦</span>
            <span>Strategy First</span><span className="text-black">✦</span>
            <span>Data Driven</span><span className="text-black">✦</span>
          </div>
        </div>
      </div>

      {/* Creative Values Section */}
      <section className="py-32 lg:py-48 bg-white overflow-hidden" ref={valuesRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-start mb-32">
            <div className="lg:w-1/2">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-6 block">Our DNA</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8 max-w-4xl line-clamp-2">
                The Values <br/> <span className="text-blue-600">That Drive Us</span>
              </h2>
            </div>
            <div className="lg:w-1/2 lg:pt-12">
              <p className="text-2xl text-black/60 font-medium leading-relaxed">
                We operate at the intersection of creativity and performance. These principles aren't just words on a wall—they are the operating system of our agency.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
            {[
              {
                title: "Creative Excellence",
                description: "We believe that exceptional design is the foundation of trust and engagement. Every pixel serves a purpose in the user journey.",
                icon: Lightbulb,
                number: "01"
              },
              {
                title: "Data-Driven Decisions",
                description: "Gut feelings are good, but data is better. We optimize every campaign and interface based on real user behavior and performance metrics.",
                icon: Target,
                number: "02"
              },
              {
                title: "Relentless Execution",
                description: "We move fast and iterate constantly. Our agile approach ensures we adapt to market changes and deliver results with speed.",
                icon: Zap,
                number: "03"
              },
              {
                title: "Radical Transparency",
                description: "We believe in honest partnerships. You get full visibility into our process, our data, and our results—no fluff, just facts.",
                icon: Shield,
                number: "04"
              },
              {
                title: "Human Centric",
                description: "Behind every data point is a human being. We design experiences that resonate on an emotional level while driving business growth.",
                icon: Heart,
                number: "05"
              },
              {
                title: "Global Vision",
                description: "We build systems that scale across borders. Our perspective is global, ensuring your brand resonates in any market you choose to enter.",
                icon: Users,
                number: "06"
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="value-card p-12 bg-white group hover:bg-blue-600 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl group-hover:bg-white group-hover:text-blue-600 transition-colors">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <span className="text-4xl font-black text-black/5 group-hover:text-white/20 transition-colors">{value.number}</span>
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 group-hover:text-white transition-colors">{value.title}</h3>
                <p className="text-black/60 font-medium leading-relaxed text-lg group-hover:text-white/80 transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-Page CTA */}
      <CTASection />

      {/* Team / Culture Section */}
      <section className="parallax-container py-32 lg:py-48 bg-black text-white relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
          alt="Team Collaboration" 
          className="parallax-bg absolute -top-[20%] left-0 w-full h-[140%] object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto bg-blue-600 flex items-center justify-center mb-8 rounded-full">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 max-w-4xl line-clamp-2 mx-auto">
              United by <br/><span className="text-blue-600">Growth</span>
            </h2>
            <p className="text-2xl text-white/80 leading-relaxed mb-12 font-medium">
              We are a team of strategists, designers, and technologists who believe in the power of integrated digital systems. We work as an extension of your team, fully invested in your success.
            </p>
            <button
              onClick={openBookingModal}
              className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-white text-black rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <span className="relative z-10 font-mono text-sm font-bold uppercase tracking-widest">Join Our Team</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section at the end */}
      <ReviewsSection />
    </div>
  );
}
