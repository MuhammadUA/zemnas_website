import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Filter, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    id: 1,
    title: "The Future of B2B Marketing Automation",
    category: "Marketing",
    date: "Oct 12, 2023",
    author: "Alex Rivers",
    excerpt: "How AI and machine learning are transforming the way we think about customer journeys and lead nurturing.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Designing for Conversion: A UI/UX Guide",
    category: "Design",
    date: "Sep 28, 2023",
    author: "Sarah Chen",
    excerpt: "Practical tips for creating digital interfaces that don't just look good, but drive measurable business results.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Building Scalable Digital Systems",
    category: "Development",
    date: "Sep 15, 2023",
    author: "Marcus Thorne",
    excerpt: "Why technical debt is the silent killer of growth and how to build infrastructure that lasts.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Power of Brand Consistency",
    category: "Branding",
    date: "Aug 30, 2023",
    author: "Elena Vance",
    excerpt: "How a unified visual language builds trust and recognition in an increasingly fragmented digital landscape.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Maximizing ROI with Performance Marketing",
    category: "Marketing",
    date: "Aug 12, 2023",
    author: "James Wilson",
    excerpt: "Moving beyond vanity metrics to focus on the numbers that actually impact your bottom line.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Insights() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
    });

    gsap.from(".article-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".articles-grid",
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  return (
    <div className="flex flex-col w-full bg-[#fdfdfd]" ref={containerRef}>
      {/* Editorial Header */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-4xl">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-6 block reveal-text">The Journal</span>
              <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase reveal-text">
                Insights <br/> <span className="text-blue-600">&</span> Ideas
              </h1>
            </div>
            <div className="flex items-center gap-4 reveal-text">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="bg-transparent border-b-2 border-black py-2 pl-2 pr-10 font-mono text-sm focus:outline-none focus:border-blue-600 transition-colors w-64"
                />
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Scroller */}
      <div className="w-full overflow-hidden border-b border-black/10 bg-black text-white py-8">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-12 text-4xl font-black uppercase tracking-widest px-4">
            <span>The Journal</span><span className="text-blue-600">✦</span>
            <span>Insights & Ideas</span><span className="text-blue-600">✦</span>
            <span>Digital Growth</span><span className="text-blue-600">✦</span>
            <span>The Journal</span><span className="text-blue-600">✦</span>
            <span>Insights & Ideas</span><span className="text-blue-600">✦</span>
            <span>Digital Growth</span><span className="text-blue-600">✦</span>
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <section className="border-b border-black">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 border-r border-black relative overflow-hidden group aspect-video lg:aspect-auto">
            <img 
              src={articles[0].image} 
              alt={articles[0].title} 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center bg-white">
            <div className="flex items-center gap-4 mb-8">
              <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">{articles[0].category}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-black/40">{articles[0].date}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9] hover:text-blue-600 transition-colors">
              <Link to={`/insights/${articles[0].id}`}>{articles[0].title}</Link>
            </h2>
            <p className="text-xl text-black/70 mb-12 font-medium leading-relaxed">
              {articles[0].excerpt}
            </p>
            <div className="flex items-center justify-between pt-8 border-t border-black/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-black text-xs">AR</div>
                <span className="font-bold text-sm uppercase tracking-tight">{articles[0].author}</span>
              </div>
              <Link to={`/insights/${articles[0].id}`} className="group flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest">
                Read More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-16 pb-8 border-b border-black/10">
            <h3 className="text-2xl font-black uppercase tracking-tighter">Latest Stories</h3>
            <div className="flex gap-8 font-mono text-[10px] font-black uppercase tracking-widest">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-1">All</button>
              <button className="text-black/40 hover:text-black transition-colors pb-1">Marketing</button>
              <button className="text-black/40 hover:text-black transition-colors pb-1">Design</button>
              <button className="text-black/40 hover:text-black transition-colors pb-1">Branding</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black articles-grid">
            {articles.slice(1).map((article) => (
              <div key={article.id} className="article-card bg-white p-8 group flex flex-col justify-between hover:bg-blue-50 transition-colors">
                <div>
                  <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-white text-black text-[8px] font-black uppercase tracking-widest border border-black">{article.category}</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-4 leading-none group-hover:text-blue-600 transition-colors">
                    <Link to={`/insights/${article.id}`}>{article.title}</Link>
                  </h4>
                  <p className="text-sm text-black/60 font-medium mb-8 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-black/5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-black/40">{article.date}</span>
                  <Link to={`/insights/${article.id}`} className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
            {/* Newsletter Card */}
            <div className="article-card bg-black text-white p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">Stay <br/> <span className="text-blue-500">Informed</span></h4>
                <p className="text-sm text-white/60 font-medium mb-8">
                  Get our latest insights on digital growth delivered straight to your inbox.
                </p>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-transparent border-b border-white/20 py-2 font-mono text-xs focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="w-full py-4 bg-blue-600 text-white font-mono text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="py-32 px-6 md:px-12 bg-white border-t border-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
            "Knowledge is only <span className="text-blue-600">potential</span> power. It becomes power only when it is organized into definite plans of action."
          </p>
          <span className="font-mono text-xs uppercase tracking-widest text-black/40">— Napoleon Hill</span>
        </div>
      </section>
      <CTASection />
      
      <ReviewsSection />
    </div>
  );
}
