import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Clock, Calendar, ChevronRight, MapPin, Info, Facebook, Linkedin, X } from 'lucide-react';
import { RAMADAN_TIMETABLE, type RamadanDay } from './data/timetable';

// Helper to format time remaining
const formatTime = (ms: number) => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  return {
    hours: hours.toString().padStart(2, '0'),
    minutes: minutes.toString().padStart(2, '0'),
    seconds: seconds.toString().padStart(2, '0'),
  };
};

// Helper to convert 24h to 12h format
const to12Hour = (time24: string) => {
  const [hours, minutes] = time24.split(':');
  const h = parseInt(hours);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${minutes} ${ampm}`;
};

type View = 'home' | 'timetable' | 'info';

export default function App() {
  const [now, setNow] = useState(new Date());
  const [activeView, setActiveView] = useState<View>('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Current status logic
  const status = useMemo(() => {
    const todayStr = now.toISOString().split('T')[0];
    const todayIndex = RAMADAN_TIMETABLE.findIndex(d => d.date === todayStr);
    
    if (todayIndex === -1) {
      const firstDay = new Date(RAMADAN_TIMETABLE[0].date);
      if (now < firstDay) {
        return { type: 'PRE_RAMADAN', target: firstDay, day: RAMADAN_TIMETABLE[0] };
      }
      return { type: 'POST_RAMADAN', target: null, day: null };
    }

    const today = RAMADAN_TIMETABLE[todayIndex];
    const sehriTime = new Date(`${today.date}T${today.sehri}:00`);
    const iftarTime = new Date(`${today.date}T${today.iftar}:00`);

    if (now < sehriTime) {
      return { type: 'SEHRI', target: sehriTime, day: today };
    } else if (now < iftarTime) {
      return { type: 'IFTAR', target: iftarTime, day: today };
    } else {
      const nextDay = RAMADAN_TIMETABLE[todayIndex + 1];
      if (nextDay) {
        const nextSehri = new Date(`${nextDay.date}T${nextDay.sehri}:00`);
        return { type: 'NEXT_SEHRI', target: nextSehri, day: today };
      }
      return { type: 'EID_SOON', target: null, day: today };
    }
  }, [now]);

  const timeRemaining = status.target ? status.target.getTime() - now.getTime() : 0;
  const { hours, minutes, seconds } = formatTime(timeRemaining);

  const getStatusLabel = () => {
    switch (status.type) {
      case 'SEHRI': return 'Time remaining for Sehri';
      case 'IFTAR': return 'Time remaining for Iftar';
      case 'NEXT_SEHRI': return 'Time remaining for next Sehri';
      case 'PRE_RAMADAN': return 'Ramadan starts in';
      case 'POST_RAMADAN': return 'Ramadan has ended';
      case 'EID_SOON': return 'Eid-ul-Fitr is tomorrow!';
      default: return '';
    }
  };

  const currentRamadanDay = status.day?.ramadan || '-';

  const themeClasses = isDarkMode 
    ? "bg-[#0a0a0a] text-white" 
    : "bg-[#fdfcfb] text-zinc-900";

  const cardClasses = isDarkMode
    ? "bg-zinc-900/40 border-zinc-800/50"
    : "bg-white border-zinc-200 shadow-xl shadow-red-500/5";

  const accentColor = "text-red-500";
  const accentBg = "bg-red-500";
  const accentBorder = "border-red-500/20";

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans selection:bg-red-500/30 ${themeClasses}`}>
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] right-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full transition-colors duration-1000 ${isDarkMode ? 'bg-red-900/20' : 'bg-red-200/40'}`} />
        <div className={`absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] blur-[120px] rounded-full transition-colors duration-1000 ${isDarkMode ? 'bg-amber-900/10' : 'bg-amber-100/30'}`} />
      </div>

      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-8 pb-32 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className={`text-3xl font-black tracking-tighter uppercase ${accentColor}`}>Ramadan 2026</h1>
            <div className="flex items-center gap-1.5 text-zinc-500 text-xs font-bold uppercase tracking-widest mt-1">
              <MapPin size={12} />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-3 rounded-2xl border transition-all duration-300 ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-amber-400' : 'bg-white border-zinc-200 text-zinc-500 shadow-sm'}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className={`border px-5 py-2.5 rounded-2xl font-black text-sm tracking-tighter uppercase ${isDarkMode ? 'bg-zinc-900 border-zinc-800 text-red-500' : 'bg-white border-zinc-200 text-red-600 shadow-sm'}`}>
              Day {currentRamadanDay}
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeView === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col justify-center"
            >
              {/* Main Countdown Card */}
              <div className={`border rounded-[3rem] p-10 backdrop-blur-xl relative overflow-hidden mb-10 ${cardClasses}`}>
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  {status.type === 'IFTAR' ? <Sun size={120} /> : <Moon size={120} />}
                </div>

                <div className="relative z-10">
                  <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.2em] mb-6">
                    {getStatusLabel()}
                  </p>

                  <div className="flex items-baseline justify-center md:justify-start gap-3 mb-12">
                    <div className="flex flex-col items-center">
                      <span className="text-7xl md:text-9xl font-black tracking-tighter tabular-nums leading-none">{hours}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mt-4">Hours</span>
                    </div>
                    <span className="text-5xl font-black text-zinc-300 mb-8">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-7xl md:text-9xl font-black tracking-tighter tabular-nums leading-none">{minutes}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mt-4">Minutes</span>
                    </div>
                    <span className="text-5xl font-black text-zinc-300 mb-8">:</span>
                    <div className="flex flex-col items-center">
                      <span className={`text-7xl md:text-9xl font-black tracking-tighter tabular-nums leading-none ${accentColor}`}>{seconds}</span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mt-4">Seconds</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`rounded-3xl p-6 border transition-colors ${isDarkMode ? 'bg-zinc-800/30 border-zinc-700/30' : 'bg-zinc-50 border-zinc-100'}`}>
                      <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">
                        <Moon size={14} className="text-red-500" />
                        <span>Sehri End</span>
                      </div>
                      <p className="text-3xl font-black tracking-tighter">{status.day ? to12Hour(status.day.sehri) : '--:-- --'}</p>
                    </div>
                    <div className={`rounded-3xl p-6 border transition-colors ${isDarkMode ? 'bg-zinc-800/30 border-zinc-700/30' : 'bg-zinc-50 border-zinc-100'}`}>
                      <div className="flex items-center gap-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-2">
                        <Sun size={14} className="text-red-500" />
                        <span>Iftar Time</span>
                      </div>
                      <p className="text-3xl font-black tracking-tighter">{status.day ? to12Hour(status.day.iftar) : '--:-- --'}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Duas Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`border rounded-[2rem] p-8 ${isDarkMode ? 'bg-red-950/10 border-red-900/20' : 'bg-red-50 border-red-100'}`}>
                  <h3 className="text-red-500 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sun size={16} /> Iftar Dua
                  </h3>
                  <p className={`text-2xl leading-relaxed font-serif text-right mb-4 ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`} dir="rtl">
                    اَللّٰهُمَّ اِنِّی لَکَ صُمْتُ وَبِکَ اٰمَنْتُ وَعَلَیْکَ تَوَکَّلْتُ وَعَلٰی رِزْقِکَ اَفْطَرْتُ
                  </p>
                  <p className="text-zinc-500 text-xs italic font-medium">
                    "O Allah! I fasted for You and I believe in You and I put my trust in You and I break my fast with Your sustenance."
                  </p>
                </div>

                <div className={`border rounded-[2rem] p-8 ${isDarkMode ? 'bg-amber-950/10 border-amber-900/20' : 'bg-amber-50 border-amber-100'}`}>
                  <h3 className="text-amber-600 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Moon size={16} /> Sehri Intention
                  </h3>
                  <p className={`text-2xl leading-relaxed font-serif text-right mb-4 ${isDarkMode ? 'text-zinc-200' : 'text-zinc-800'}`} dir="rtl">
                    نَوَيْتُ اَنْ اَصُوْمَ غَدًا مِّنْ شَهْرِ رَمَضَانَ الْمُبَارَکِ فَرْضًا لَّکَ يَا اَللهُ فَتَقَبَّلْ مِنِّی اِنَّکَ اَنْتَ السَّمِيْعُ الْعَلِيْمُ
                  </p>
                  <p className="text-zinc-500 text-xs italic font-medium">
                    "I intend to keep the fast for tomorrow in the month of Ramadan, which is obligatory upon me for the sake of Allah."
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {activeView === 'timetable' && (
            <motion.div 
              key="timetable"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1"
            >
              <div className={`border rounded-[2.5rem] overflow-hidden ${cardClasses}`}>
                <div className="p-8 border-b border-zinc-800/50 flex justify-between items-center">
                  <h2 className="text-xl font-black tracking-tighter uppercase">Full Schedule</h2>
                  <button onClick={() => setActiveView('home')} className="p-2 rounded-full hover:bg-zinc-800/50 transition-colors">
                    <X size={20} />
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className={`text-[10px] font-black uppercase tracking-widest ${isDarkMode ? 'bg-zinc-800/50 text-zinc-500' : 'bg-zinc-50 text-zinc-400'}`}>
                      <tr>
                        <th className="px-6 py-4">Day</th>
                        <th className="px-6 py-4">Date</th>
                        <th className="px-6 py-4">Sehri</th>
                        <th className="px-6 py-4">Iftar</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y ${isDarkMode ? 'divide-zinc-800' : 'divide-zinc-100'}`}>
                      {RAMADAN_TIMETABLE.map((day) => {
                        const isToday = day.date === now.toISOString().split('T')[0];
                        return (
                          <tr 
                            key={day.ramadan} 
                            className={`transition-colors ${isToday ? 'bg-red-500/10' : ''}`}
                          >
                            <td className={`px-6 py-4 font-black ${isToday ? 'text-red-500' : ''}`}>{day.ramadan}</td>
                            <td className={`px-6 py-4 font-medium ${isToday ? 'text-red-500' : 'text-zinc-500'}`}>
                              {new Date(day.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                            </td>
                            <td className={`px-6 py-4 tabular-nums font-bold ${isToday ? 'text-red-500' : ''}`}>{to12Hour(day.sehri)}</td>
                            <td className={`px-6 py-4 tabular-nums font-bold ${isToday ? 'text-red-500' : ''}`}>{to12Hour(day.iftar)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {activeView === 'info' && (
            <motion.div 
              key="info"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex-1 flex flex-col items-center justify-center text-center"
            >
              <div className={`border rounded-[3rem] p-12 max-w-md w-full ${cardClasses}`}>
                <div className={`w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center ${accentBg}`}>
                  <Info size={48} className="text-white" />
                </div>
                <h2 className="text-2xl font-black tracking-tighter uppercase mb-2">Developed By</h2>
                <p className={`text-xl font-bold mb-8 ${accentColor}`}>Istiaque Zaman Choyon</p>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.facebook.com/izchoyon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#1877F2] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity"
                  >
                    <Facebook size={20} />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/izchoyon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#0A66C2] text-white py-4 rounded-2xl font-bold hover:opacity-90 transition-opacity"
                  >
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <button 
                  onClick={() => setActiveView('home')}
                  className="mt-10 text-zinc-500 font-bold uppercase text-xs tracking-widest hover:text-red-500 transition-colors"
                >
                  Back to Timer
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Info */}
        <footer className="mt-auto pt-12 text-center text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] space-y-3">
          <p>© 2026 Dhaka Ramadan Schedule</p>
          <p>Developed by <span className={accentColor}>Istiaque Zaman Choyon</span></p>
        </footer>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-md z-50">
        <div className={`border backdrop-blur-2xl rounded-full p-2 flex justify-around items-center shadow-2xl transition-colors ${isDarkMode ? 'bg-zinc-900/80 border-zinc-800' : 'bg-white/80 border-zinc-200'}`}>
          <button 
            onClick={() => setActiveView('home')}
            className={`p-4 rounded-full transition-all duration-300 flex items-center gap-2 ${activeView === 'home' ? `${accentBg} text-white shadow-lg shadow-red-500/20` : 'text-zinc-500 hover:text-red-500'}`}
          >
            <Clock size={20} />
            {activeView === 'home' && <span className="text-xs font-black uppercase tracking-widest pr-1">Timer</span>}
          </button>
          <button 
            onClick={() => setActiveView('timetable')}
            className={`p-4 rounded-full transition-all duration-300 flex items-center gap-2 ${activeView === 'timetable' ? `${accentBg} text-white shadow-lg shadow-red-500/20` : 'text-zinc-500 hover:text-red-500'}`}
          >
            <Calendar size={20} />
            {activeView === 'timetable' && <span className="text-xs font-black uppercase tracking-widest pr-1">Schedule</span>}
          </button>
          <button 
            onClick={() => setActiveView('info')}
            className={`p-4 rounded-full transition-all duration-300 flex items-center gap-2 ${activeView === 'info' ? `${accentBg} text-white shadow-lg shadow-red-500/20` : 'text-zinc-500 hover:text-red-500'}`}
          >
            <Info size={20} />
            {activeView === 'info' && <span className="text-xs font-black uppercase tracking-widest pr-1">About</span>}
          </button>
        </div>
      </nav>
    </div>
  );
}
