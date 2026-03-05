import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Jonathan Wright",
    role: "CEO, TechFlow Solutions",
    content: "Zemnas didn't just build us a website; they built us a growth engine. Our conversion rates increased by 140% within the first three months of the new system launch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Marketing Director, Elevate Retail",
    content: "The level of creative thinking and technical precision Zemnas brings to the table is unmatched. They understood our brand vision perfectly and scaled it globally.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Founder, Nexus Digital",
    content: "Working with Zemnas was a game-changer for our performance marketing. Their data-driven approach combined with world-class design is a winning formula.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#fdfdfd] border-t border-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-blue-600 mb-6 block">Testimonials</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
              What Our <br/> <span className="text-blue-600">Clients</span> Say
            </h2>
          </div>
          <div className="flex items-center gap-2 text-blue-600">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" size={20} />
            ))}
            <span className="font-black text-xl ml-2 text-black">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black border border-black">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 flex flex-col justify-between group hover:bg-blue-50 transition-colors duration-500"
            >
              <div>
                <Quote className="text-blue-600 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" size={40} />
                <p className="text-xl font-medium leading-relaxed text-black/80 mb-10 italic">
                  "{review.content}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-8 border-t border-black/5">
                <div className="w-14 h-14 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-black uppercase tracking-tight text-lg">{review.name}</h4>
                  <p className="text-xs font-mono uppercase tracking-widest text-black/40">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
