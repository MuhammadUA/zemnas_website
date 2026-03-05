import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";

gsap.registerPlugin(ScrollTrigger);

export const projects = [
  {
    id: 1,
    title: "SaaS Product Launch",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    client: "TechFlow Systems",
    year: "2023",
    description: "A comprehensive digital transformation for a leading SaaS provider, resulting in a 40% increase in user retention."
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    client: "Nexus Global",
    year: "2023",
    description: "Redefining the visual language for a multi-national logistics firm to better reflect their technological edge."
  },
  {
    id: 3,
    title: "Motion Campaign",
    category: "Creative",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    client: "Vibe Audio",
    year: "2022",
    description: "High-energy motion graphics campaign that drove 1M+ views across social platforms in the first month."
  },
  {
    id: 4,
    title: "Social Content Series",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2000&auto=format&fit=crop",
    client: "Urban Eats",
    year: "2023",
    description: "A data-driven content strategy that increased organic engagement by 250% for a premium food brand."
  },
  {
    id: 5,
    title: "Product UI Design",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    client: "FinEdge",
    year: "2023",
    description: "Simplifying complex financial data into an intuitive dashboard experience for high-net-worth individuals."
  },
  {
    id: 6,
    title: "Explainer Video",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop",
    client: "CloudScale",
    year: "2022",
    description: "A 90-second animated explainer that simplified a complex cloud infrastructure offering for non-technical buyers."
  },
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (projectsRef.current) {
      const projectItems = gsap.utils.toArray('.case-study-card');
      projectItems.forEach((item: any) => {
        gsap.fromTo(
          item,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            }
          }
        );
      });
    }
  }, { scope: containerRef });

  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]" ref={containerRef}>
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-600 mb-8 block">Proven Results</span>
              <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-8">
                Case <br /> <span className="text-blue-600">Studies</span>
              </h1>
              <p className="text-xl md:text-4xl font-medium leading-[1.1] max-w-3xl text-black/80">
                In-depth look at how we solve complex problems through design, data, and creative strategy.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 rounded-full border border-black flex items-center justify-center animate-spin-slow">
                <Filter className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6 md:px-12" ref={projectsRef}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {projects.map((project, index) => (
              <Link 
                key={project.id} 
                to={`/case-studies/${project.id}`}
                className="case-study-card group block"
              >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-black mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md border border-black rounded-full font-mono text-[10px] uppercase tracking-widest font-black">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">0{index + 1} / {project.year}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">{project.client}</span>
                  </div>
                  <h3 className="text-4xl font-black uppercase tracking-tighter leading-none group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-black/60 font-medium leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <div className="pt-4 flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore Case Study <ArrowRight size={14} className="text-blue-600" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <ReviewsSection />
    </div>
  );
}
