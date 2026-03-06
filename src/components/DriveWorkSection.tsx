import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Maximize2, X, Loader2, FolderOpen, Film } from "lucide-react";

interface Video {
  id: string;
  name: string;
  mimeType: string;
  thumbnail: string;
  videoUrl: string;
  previewUrl: string;
}

interface Category {
  category: string;
  videos: Video[];
}

export default function DriveWorkSection() {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/work/drive");
        if (!response.ok) throw new Error("Failed to fetch work");
        const json = await response.json();
        setData(json);
        if (json.length > 0) setActiveCategory(json[0].category);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-32 flex flex-col items-center justify-center bg-white">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="font-mono text-sm uppercase tracking-widest text-black/40">Fetching Portfolio...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-32 text-center bg-white">
        <p className="text-red-500 font-mono text-sm uppercase tracking-widest">Error: {error}</p>
        <p className="text-black/40 text-xs mt-2">Please ensure GOOGLE_DRIVE_API_KEY is configured.</p>
      </div>
    );
  }

  const currentCategory = data.find(c => c.category === activeCategory);

  return (
    <section className="py-24 bg-white border-b border-black/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-4 mb-16">
          {data.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-500 border ${activeCategory === cat.category
                  ? "bg-black text-white border-black"
                  : "bg-transparent text-black/40 border-black/10 hover:border-black hover:text-black"
                }`}
            >
              <span className="flex items-center gap-2">
                <FolderOpen size={14} />
                {cat.category}
                <span className="opacity-40 ml-1">[{cat.videos.length}]</span>
              </span>
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentCategory?.videos.map((video, idx) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div
                  className="relative aspect-video bg-black rounded-2xl overflow-hidden cursor-pointer group/card"
                  onClick={() => setSelectedVideo(video)}
                >
                  {/* Thumbnail / Video Preview on Hover */}
                  <div className="absolute inset-0">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover opacity-60 group-hover/card:scale-110 transition-transform duration-1000 grayscale group-hover/card:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white scale-75 group-hover/card:scale-100 transition-transform duration-500">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>

                  {/* Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-1">
                      <Film size={12} className="text-blue-500" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Digital Asset</span>
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white line-clamp-1">{video.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 backdrop-blur-xl"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(37,99,235,0.2)] border border-white/10 relative"
            >
              <iframe
                key={selectedVideo.id}
                src={selectedVideo.previewUrl}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            </motion.div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <h4 className="text-2xl font-black uppercase tracking-tighter text-white mb-2">{selectedVideo.name}</h4>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500">{activeCategory}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
