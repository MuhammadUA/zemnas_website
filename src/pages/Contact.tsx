import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReviewsSection from "../components/ReviewsSection";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Hero Text Animation
    gsap.fromTo(
      heroTextRef.current,
      { y: 100, opacity: 0, rotationX: -45 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out", delay: 0.2 }
    );

    // Form Elements Stagger
    const formElements = gsap.utils.toArray('.form-element');
    gsap.fromTo(
      formElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact-form-section',
          start: "top 80%",
        }
      }
    );

    // Info Elements Stagger
    const infoElements = gsap.utils.toArray('.info-element');
    gsap.fromTo(
      infoElements,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.contact-info-section',
          start: "top 80%",
        }
      }
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
            <span className="font-mono text-sm uppercase tracking-widest text-blue-600 mb-8 block">Get in Touch</span>
            <h1 ref={heroTextRef} className="text-[10vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase text-black mb-12 transform-gpu origin-bottom">
              Let's <br />
              <span className="text-blue-600">Talk</span>
            </h1>
          </motion.div>
          
          <div className="border-t border-black/10 pt-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-2xl md:text-3xl font-medium leading-snug max-w-3xl"
            >
              Whether you have a specific project in mind or just want to explore how we can help your business grow, we're ready to listen.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10">
          
          {/* Contact Form */}
          <div className="contact-form-section p-8 md:p-12 lg:p-24 lg:border-r border-black/10">
            <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="form-element flex flex-col relative group">
                  <label htmlFor="firstName" className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-medium focus:outline-none focus:border-blue-600 transition-colors rounded-none"
                    placeholder="John"
                  />
                </div>
                <div className="form-element flex flex-col relative group">
                  <label htmlFor="lastName" className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-medium focus:outline-none focus:border-blue-600 transition-colors rounded-none"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="form-element flex flex-col relative group">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-medium focus:outline-none focus:border-blue-600 transition-colors rounded-none"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-element flex flex-col relative group">
                <label htmlFor="company" className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-medium focus:outline-none focus:border-blue-600 transition-colors rounded-none"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="form-element flex flex-col relative group">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-black/20 py-4 text-2xl font-medium focus:outline-none focus:border-blue-600 transition-colors rounded-none resize-none"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="form-element group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-black text-white rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:bg-blue-600 self-start mt-8"
              >
                <span className="relative z-10 font-mono text-sm font-bold uppercase tracking-widest">Submit Inquiry</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section flex flex-col">
            <div className="p-8 md:p-12 lg:p-24 border-b border-black/10 flex-1">
              <h3 className="info-element text-4xl font-black uppercase tracking-tighter mb-12">Contact Info</h3>
              
              <div className="flex flex-col gap-12">
                <div className="info-element">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">Phone</h4>
                  <a href="tel:7789006780" className="text-3xl font-medium hover:text-blue-600 transition-colors">(778) 900-6780</a>
                </div>

                <div className="info-element">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">Email</h4>
                  <a href="mailto:contact@zemnas.com" className="text-3xl font-medium hover:text-blue-600 transition-colors">contact@zemnas.com</a>
                </div>
                
                <div className="info-element">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">LinkedIn</h4>
                  <a href="https://www.linkedin.com/company/zemnas" target="_blank" rel="noopener noreferrer" className="text-3xl font-medium hover:text-blue-600 transition-colors">@zemnas</a>
                </div>

                <div className="info-element">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">Headquarters</h4>
                  <p className="text-3xl font-medium leading-tight">1443 SW 1200th Rd<br />Holden, Missouri, USA</p>
                </div>

                <div className="info-element">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-black/50 mb-4">European Office</h4>
                  <p className="text-3xl font-medium leading-tight">Steinbachstr 128<br />66424 Homburg Saar, Germany</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-24 bg-blue-600 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-6">Join our team</h3>
                <p className="text-xl font-medium mb-12 opacity-80">
                  We're always looking for talented designers, developers, and marketers. Check out our open positions.
                </p>
                <a href="#" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-black hover:text-white">
                  <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-widest">View Careers</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ReviewsSection />
    </div>
  );
}
