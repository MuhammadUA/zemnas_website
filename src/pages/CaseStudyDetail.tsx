import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Share2 } from "lucide-react";
import CTASection from "../components/CTASection";
import ReviewsSection from "../components/ReviewsSection";

const articles = [
  {
    id: 1,
    title: "The Future of B2B Marketing Automation",
    category: "Marketing",
    date: "Oct 12, 2023",
    author: "Alex Rivers",
    excerpt: "How AI and machine learning are transforming the way we think about customer journeys and lead nurturing.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    content: `
      <p>In the rapidly evolving landscape of B2B marketing, automation is no longer just a luxury—it's a fundamental necessity for survival. As we move into 2024, the integration of Artificial Intelligence (AI) and Machine Learning (ML) is pushing the boundaries of what's possible in customer engagement.</p>
      
      <h3>The Shift to Predictive Engagement</h3>
      <p>Traditional automation was reactive. You clicked a link, you got an email. Today, we're building systems that predict what a customer needs before they even realize it themselves. By analyzing vast datasets of historical behavior, our AI models can identify patterns that human marketers might miss.</p>
      
      <blockquote>
        "The goal of automation isn't to replace human creativity, but to provide the data-driven foundation that allows it to flourish."
      </blockquote>
      
      <h3>Hyper-Personalization at Scale</h3>
      <p>One of the biggest challenges in B2B marketing has always been maintaining a personal touch while scaling operations. Modern automation platforms allow for dynamic content injection that goes far beyond "Hi [First Name]". We're talking about entire landing pages and whitepapers that reconfigure themselves based on the visitor's industry, company size, and current pain points.</p>
      
      <h3>The Human Element</h3>
      <p>Despite the technological leaps, the most successful automation strategies are those that keep the human experience at the center. At Zemnas, we focus on using technology to remove friction, not to build walls between brands and their customers.</p>
    `
  },
  {
    id: 2,
    title: "Designing for Conversion: A UI/UX Guide",
    category: "Design",
    date: "Sep 28, 2023",
    author: "Sarah Chen",
    excerpt: "Practical tips for creating digital interfaces that don't just look good, but drive measurable business results.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    content: `
      <p>Design is often misunderstood as purely aesthetic. In the world of high-performance digital systems, design is a functional tool used to guide behavior and achieve specific business objectives.</p>
      
      <h3>The Psychology of the Click</h3>
      <p>Every element on a page—from the color of a button to the whitespace between paragraphs—sends a signal to the user's brain. We use cognitive load theory to ensure that users are never overwhelmed and always know exactly what their next step should be.</p>
      
      <h3>Visual Hierarchy and Flow</h3>
      <p>A successful interface acts as a silent guide. By using size, contrast, and positioning, we create a visual path that leads the eye toward the primary call to action. This isn't about tricking the user; it's about making their journey as effortless as possible.</p>
      
      <h3>Testing and Iteration</h3>
      <p>At Zemnas, we don't guess—we test. Every design decision is backed by data from heatmaps, A/B tests, and user interviews. A design is never "finished"; it's a living system that evolves based on real-world performance.</p>
    `
  }
  // Add more as needed
];

export default function CaseStudyDetail() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id)) || articles[0];

  return (
    <div className="bg-[#fdfdfd]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
        <div className="max-w-[1400px] mx-auto">
          <Link to="/insights" className="group flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest mb-12 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">{article.category}</span>
                <div className="flex items-center gap-2 text-black/40 font-mono text-[10px] uppercase tracking-widest">
                  <Calendar size={12} />
                  {article.date}
                </div>
              </div>
              <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black tracking-tighter uppercase mb-8">
                {article.title}
              </h1>
            </div>
            <div className="lg:col-span-4 pb-2">
              <div className="flex items-center gap-4 p-6 bg-white border border-black/10 rounded-2xl">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-black text-xl">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-1">Written by</p>
                  <p className="font-black uppercase tracking-tight text-lg">{article.author}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 md:px-12 -mt-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] rounded-[2rem] overflow-hidden border border-black">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-3 space-y-12">
            <div>
              <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40 mb-6 pb-2 border-b border-black/10">Share Article</h4>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <Share2 size={16} />
                </button>
                <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <Tag size={16} />
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-black/40 mb-6 pb-2 border-b border-black/10">Key Takeaways</h4>
              <ul className="space-y-4 font-medium text-sm">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-black">01</span>
                  Automation is a growth engine, not just a tool.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-black">02</span>
                  Data-driven design leads to higher ROI.
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-black">03</span>
                  Scalability must be built into the foundation.
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-7">
            <div 
              className="prose prose-xl prose-black max-w-none 
                prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic
                prose-p:text-black/70 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            <div className="mt-20 pt-12 border-t border-black/10 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-mono uppercase tracking-widest">Digital Strategy</span>
                <span className="px-3 py-1 bg-black/5 rounded-full text-[10px] font-mono uppercase tracking-widest">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box in the middle of page (as requested) */}
      <CTASection />

      {/* Related Articles or Reviews */}
      <ReviewsSection />
    </div>
  );
}
