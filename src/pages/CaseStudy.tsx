import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Target, Zap, BarChart3 } from "lucide-react";
import { projects } from "./CaseStudies";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CaseStudy() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id)) || projects[0];
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal animations
    const reveals = gsap.utils.toArray('.reveal-up');
    reveals.forEach((el: any) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      });
    });

    // Parallax image
    gsap.to(".parallax-img", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]" ref={containerRef}>
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 md:px-12 border-b border-black overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/case-studies" className="group inline-flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest mb-16 hover:text-blue-600 transition-colors">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-4 py-2 bg-blue-600 text-white rounded-full font-mono text-[10px] uppercase tracking-widest font-black">
                  {project.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">
                  Project / 0{project.id}
                </span>
              </div>
              <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-12">
                {project.title}
              </h1>
            </div>
            <div className="lg:col-span-4 pb-4">
              <div className="space-y-8 border-l border-black/10 pl-8">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2">Client</p>
                  <p className="text-2xl font-black uppercase tracking-tight">{project.client}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2">Services</p>
                  <p className="text-lg font-medium leading-tight">{project.category}, Strategy, Digital Systems</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-black/40 mb-2">Year</p>
                  <p className="text-lg font-medium">{project.year}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 -mt-12 parallax-container relative z-10">
        <div className="max-w-[1400px] mx-auto aspect-[21/9] rounded-[3rem] overflow-hidden border border-black bg-black">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-80 parallax-img"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5 reveal-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter max-w-4xl line-clamp-2">The Challenge</h2>
            </div>
            <p className="text-2xl font-medium leading-relaxed text-black/80">
              {project.client} approached us with a significant bottleneck in their digital ecosystem. Their existing systems were fragmented, leading to high friction in user acquisition and poor data visibility. They needed a unified system that could scale with their ambitious growth targets.
            </p>
          </div>
          <div className="lg:col-span-7 reveal-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                <Zap size={24} />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter max-w-4xl line-clamp-2">The Solution</h2>
            </div>
            <div className="space-y-8">
              <p className="text-xl font-medium leading-relaxed text-black/70">
                We implemented a multi-layered digital system that integrated their marketing stack with a custom-built product interface. By focusing on "Growth Architecture," we ensured that every touchpoint was optimized for conversion while maintaining a premium brand experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Custom UI/UX Framework",
                  "Integrated Data Pipeline",
                  "High-Performance Frontend",
                  "Automated Growth Loops"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white border border-black/10 rounded-xl">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    <span className="font-black uppercase tracking-tight text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 px-6 md:px-12 bg-black text-white rounded-[4rem] mx-6 md:mx-12 mb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-24">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-500 mb-6 block">Impact & ROI</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] max-w-4xl line-clamp-2">
                Measurable <br /> <span className="text-blue-600">Success</span>
              </h2>
            </div>
            <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center">
              <BarChart3 size={40} className="text-blue-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { label: "Conversion Increase", value: "+145%" },
              { label: "User Retention", value: "88%" },
              { label: "System Latency", value: "-60%" }
            ].map((stat, i) => (
              <div key={i} className="p-12 border border-white/10 rounded-[2rem] hover:bg-white/5 transition-colors reveal-up">
                <p className="text-7xl font-black tracking-tighter mb-4">{stat.value}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Link 
            to={`/case-studies/${project.id === projects.length ? 1 : project.id + 1}`}
            className="group block p-12 md:p-24 bg-white border border-black rounded-[3rem] hover:bg-black hover:text-white transition-all duration-700"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-600 mb-8 block">Next Case Study</span>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.8] max-w-4xl line-clamp-2">
                  {projects[project.id === projects.length ? 0 : project.id].title}
                </h3>
              </div>
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-700">
                <ArrowRight size={48} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <CTASection />
      <ReviewsSection />
    </div>
  );
}
