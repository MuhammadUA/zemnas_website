import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, ArrowRight, CheckCircle2, Mail, ChevronLeft, ChevronRight, Globe } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime("");
      setFormData({ name: "", email: "", company: "", details: "" });
      setCurrentMonth(new Date());
    }
  }, [isOpen]);

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

  const handleNext = async () => {
    if (step === 1 && selectedDate && selectedTime) setStep(2);
    else if (step === 2 && formData.name && formData.email) {
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/book-call", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            date: selectedDate?.toISOString(),
            time: selectedTime,
          }),
        });
        
        if (response.ok) {
          setStep(3);
        } else {
          alert("Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Booking error:", error);
        alert("Failed to connect to server.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Calendar Logic
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);
    const startDay = firstDayOfMonth(year, month);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const days = [];
    // Padding for first week
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 w-full"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isPast = date < today;
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <button
          key={day}
          disabled={isWeekend || isPast}
          onClick={() => setSelectedDate(date)}
          className={`h-10 md:h-12 w-full flex items-center justify-center text-xs md:text-sm font-bold transition-all relative
            ${isWeekend || isPast ? "opacity-20 cursor-not-allowed" : "hover:bg-blue-50 hover:text-blue-600"}
            ${isSelected ? "bg-blue-600 text-white hover:bg-blue-700 hover:text-white" : ""}
          `}
        >
          {day}
          {isSelected && (
            <motion.div
              layoutId="activeDay"
              className="absolute inset-0 border-2 border-blue-600 z-0"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      );
    }
    return days;
  };

  const changeMonth = (offset: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="relative w-full max-w-4xl bg-white shadow-[0_0_100px_rgba(37,99,235,0.2)] flex flex-col md:flex-row h-full md:h-auto md:max-h-[90vh] overflow-hidden rounded-none md:rounded-3xl"
          >
            {/* Sidebar Info */}
            <div className="w-full md:w-80 bg-black text-white p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 shrink-0">
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-4 leading-none">
                  Discovery <br/> <span className="text-blue-500">Call</span>
                </h2>
                <p className="text-sm md:text-base text-white/60 font-medium mb-6 md:mb-8">
                  A 30-minute deep dive into your business goals and how we can help you scale.
                </p>
                
                <div className="flex flex-row md:flex-col gap-4 md:gap-4 overflow-x-auto no-scrollbar">
                  <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-sm font-bold uppercase tracking-tight whitespace-nowrap">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                    <span>30 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-sm font-bold uppercase tracking-tight whitespace-nowrap">
                    <Globe className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                    <span>USA Time Zone (EST)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10 hidden md:block">
                <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">Zemnas Agency</p>
                <p className="text-sm font-bold">contact@zemnas.com</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-black/5">
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 transition-colors ${step >= 1 ? "bg-blue-600 border-blue-600 text-white" : "border-black/10"}`}>1</div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 transition-colors ${step >= 2 ? "bg-blue-600 border-blue-600 text-white" : "border-black/10"}`}>2</div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border-2 transition-colors ${step >= 3 ? "bg-blue-600 border-blue-600 text-white" : "border-black/10"}`}>3</div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                {step === 1 && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Calendar */}
                    <div>
                      <div className="flex items-center justify-between mb-4 md:mb-6">
                        <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter">
                          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </h3>
                        <div className="flex gap-1 md:gap-2">
                          <button onClick={() => changeMonth(-1)} className="p-1.5 md:p-2 hover:bg-black/5 rounded-full transition-colors">
                            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                          <button onClick={() => changeMonth(1)} className="p-1.5 md:p-2 hover:bg-black/5 rounded-full transition-colors">
                            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                          <div key={i} className="h-8 flex items-center justify-center text-[10px] font-black text-black/40 uppercase tracking-widest">{d}</div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {renderCalendar()}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div>
                      <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter mb-4 md:mb-6">
                        {selectedDate ? selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) : "Select a date"}
                      </h3>
                      {selectedDate ? (
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 md:p-4 border-2 font-mono text-[10px] md:text-sm font-bold transition-all text-left flex items-center justify-between group
                                ${selectedTime === time ? "border-blue-600 bg-blue-50 text-blue-600" : "border-black/5 hover:border-black/20"}
                              `}
                            >
                              {time}
                              <ArrowRight className={`w-4 h-4 transition-transform hidden md:block ${selectedTime === time ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="h-full min-h-[200px] flex items-center justify-center border-2 border-dashed border-black/10 rounded-2xl p-6 md:p-12 text-center">
                          <p className="text-black/40 font-medium text-sm">Please select a date from the calendar to view available times.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="max-w-xl mx-auto space-y-8">
                    <div className="text-center mb-12">
                      <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">Almost there</h3>
                      <p className="text-black/60 font-medium">Enter your details to confirm your discovery call.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest font-black text-blue-600">Full Name *</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border-b-2 border-black/10 py-2 md:py-3 text-base md:text-lg font-bold focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] uppercase tracking-widest font-black text-blue-600">Email Address *</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border-b-2 border-black/10 py-2 md:py-3 text-base md:text-lg font-bold focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest font-black text-blue-600">Company Name</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full border-b-2 border-black/10 py-2 md:py-3 text-base md:text-lg font-bold focus:outline-none focus:border-blue-600 transition-colors bg-transparent"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] uppercase tracking-widest font-black text-blue-600">Project Details</label>
                      <textarea
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        rows={3}
                        className="w-full border-b-2 border-black/10 py-2 md:py-3 text-base md:text-lg font-bold focus:outline-none focus:border-blue-600 transition-colors bg-transparent resize-none"
                        placeholder="What are your goals for this project?"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="py-12 flex flex-col items-center text-center space-y-8 max-w-md mx-auto">
                    <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] mb-4">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    
                    <div>
                      <h3 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">Booking <br/> Confirmed</h3>
                      <p className="text-lg text-black/60 font-medium">
                        We've sent a calendar invitation to <span className="text-black font-bold">{formData.email}</span>.
                      </p>
                    </div>

                    <div className="w-full bg-gray-50 p-6 rounded-2xl border border-black/5 text-left">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-black/5 shadow-sm">
                          <Calendar className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-widest text-black/40">Date & Time</p>
                          <p className="font-bold">{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                          <p className="font-bold text-blue-600">{selectedTime} EST</p>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={onClose}
                      className="w-full py-5 bg-black text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all rounded-full"
                    >
                      Close Window
                    </button>
                  </div>
                )}
              </div>

              {step < 3 && (
                <div className="p-6 md:p-8 border-t border-black/5 flex justify-between items-center bg-gray-50/50 shrink-0">
                  {step === 2 ? (
                    <button
                      onClick={() => setStep(1)}
                      className="font-mono text-[10px] md:text-xs font-black uppercase tracking-widest text-black/40 hover:text-black transition-colors"
                    >
                      Back
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-black/40">
                      <Globe className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest font-bold">EST Time</span>
                    </div>
                  )}
                  
                  <button
                    onClick={handleNext}
                    disabled={isSubmitting || (step === 1 && (!selectedDate || !selectedTime)) || (step === 2 && (!formData.name || !formData.email))}
                    className="group relative inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-10 py-4 md:py-5 bg-black text-white disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden transition-all hover:bg-blue-600 rounded-full"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <span className="relative z-10 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          {step === 1 ? "Continue" : "Confirm"}
                        </span>
                        <ArrowRight className="relative z-10 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
