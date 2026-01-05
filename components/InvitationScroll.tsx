
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('October 25, 2026 08:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-3 md:gap-6 justify-center mt-12 px-4">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center flex-1">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl w-full h-16 md:h-24 flex items-center justify-center text-xl md:text-4xl font-black border border-white/10 shadow-xl">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-[10px] uppercase tracking-widest mt-3 font-black text-[#1DB954]">{label}</span>
        </div>
      ))}
    </div>
  );
};

const InvitationScroll: React.FC = () => {
  return (
    <div className="flex flex-col gap-32 pb-48">
      {/* SECTION 1: COVER & COUNTDOWN */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center p-4">
        <div className="w-full max-w-lg aspect-[3/4] bg-[#282828] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] mb-12 relative group border-2 border-white/5">
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-left">
             <div className="w-16 h-1 mb-4 bg-[#1DB954]" />
             <h2 className="text-3xl md:text-4xl font-black tracking-tighter italic text-white/80">The Wedding of</h2>
             <h1 className="text-6xl md:text-8xl font-black text-white leading-none mt-2">Dhea <span className="text-[#1DB954]">&</span> Emil</h1>
             <p className="text-[#B3B3B3] font-bold tracking-widest uppercase mt-4 text-sm">Save the Date • 25.10.2026</p>
          </div>
        </div>
        <Countdown />
        <div className="mt-12 opacity-40 animate-bounce">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white"><path d="M12 21l-12-18h24z"/></svg>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="px-8 max-w-3xl mx-auto text-center animate-in fade-in duration-1000">
        <div className="text-4xl md:text-5xl mb-8 font-serif text-[#1DB954]">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</div>
        <div className="text-2xl md:text-3xl mb-12 font-bold text-white leading-relaxed">Assalamu’alaikum Wr. Wb.</div>
        <p className="text-xl md:text-2xl text-[#B3B3B3] leading-loose font-medium px-4">
          Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, serta kerabat sekalian, untuk menghadiri acara pernikahan kami:
        </p>
      </section>

      {/* SECTION 3: BRIDE PROFILE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-8 lg:px-24">
        <div className="grid grid-cols-3 gap-3 md:gap-6 order-2 md:order-1">
          <div className="aspect-[3/4] bg-[#181818] rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1623091211237-17a7e70ec486?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] bg-[#181818] rounded-2xl overflow-hidden shadow-2xl mt-8 hover:-translate-y-2 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1549416878-b9ca95e26903?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] bg-[#181818] rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1550005814-38703a11880e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col gap-6 order-1 md:order-2">
          <div className="flex items-center gap-4">
             <div className="w-12 h-0.5 bg-[#1DB954]" />
             <span className="text-[#1DB954] font-black tracking-[0.2em] uppercase text-xs md:text-sm">THE BRIDE</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Dhea Listiani, S.Pd</h2>
          <div className="p-6 bg-[#181818] rounded-3xl border border-white/5">
             <p className="text-[#B3B3B3] text-lg font-bold leading-relaxed">
               Putri dari Bapak <span className="text-white">Doni Supriyadi</span> & Ibu <span className="text-white">Sutini</span>
             </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: GROOM PROFILE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-8 lg:px-24">
        <div className="flex flex-col gap-6 text-right items-end">
          <div className="flex items-center gap-4">
             <span className="text-[#1DB954] font-black tracking-[0.2em] uppercase text-xs md:text-sm">THE GROOM</span>
             <div className="w-12 h-0.5 bg-[#1DB954]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Shafa Millah Ahmad, S.Pd</h2>
          <div className="p-6 bg-[#181818] rounded-3xl border border-white/5">
             <p className="text-[#B3B3B3] text-lg font-bold leading-relaxed">
               Putra dari Bapak <span className="text-white">Joko Prayogo</span> & Ibu <span className="text-white">Yoyoh Rokayah</span>
             </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          <div className="aspect-[3/4] bg-[#181818] rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] bg-[#181818] rounded-2xl overflow-hidden shadow-2xl mt-8 hover:-translate-y-2 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] bg-[#181818] rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* SECTION 5: AR-RUM VERSE */}
      <section className="px-8 py-24 bg-[#121212] rounded-[3rem] mx-4 md:mx-12 text-center flex flex-col items-center border border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB95411] to-transparent pointer-events-none" />
        <div className="relative z-10">
          <div className="text-3xl md:text-5xl mb-12 font-serif leading-[2.5] text-white/90 max-w-4xl px-4">
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </div>
          <h3 className="text-[#1DB954] font-black text-2xl mb-6 flex items-center gap-4 justify-center">
            <div className="w-8 h-1 bg-[#1DB954]" />
            QS Ar-rum 21
            <div className="w-8 h-1 bg-[#1DB954]" />
          </h3>
          <p className="text-[#B3B3B3] max-w-2xl leading-relaxed text-xl font-medium italic px-6">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
        </div>
      </section>

      {/* SECTION 6: THE EVENT DETAILS */}
      <section className="px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* AKAD */}
        <div className="bg-[#181818] p-12 rounded-[3rem] border border-white/5 relative group transition-all hover:bg-[#222]">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
             <svg viewBox="0 0 24 24" className="w-24 h-24 fill-white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-[#1DB954] text-black text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 tracking-widest uppercase">The Ceremony</div>
            <h3 className="text-6xl font-black mb-8">Akad Nikah</h3>
            <div className="space-y-6 mb-12 flex-1">
               <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-[#1DB954]/20 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1DB954]"><path d="M19 19H5V8h14v11zM16 1h-8v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-3V1z"/></svg>
                  </div>
                  <div className="text-xl font-black">25 Minggu Oktober 2026</div>
               </div>
               <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-[#1DB954]/20 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1DB954]"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                  </div>
                  <div className="text-xl font-black">08.00 s/d 10.00</div>
               </div>
               <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-[#1DB954]/20 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1DB954]"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                  </div>
                  <div className="text-xl font-bold text-[#B3B3B3]">Cukanggalih Kidul</div>
               </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/i4AoBh3gViT74d9B9" 
              target="_blank" 
              className="mt-auto bg-white text-black font-black py-5 px-10 rounded-full text-center hover:bg-[#1DB954] hover:scale-105 transition-all shadow-xl text-lg"
            >
              BUKA MAPS
            </a>
          </div>
        </div>

        {/* RESEPSI */}
        <div className="bg-[#181818] p-12 rounded-[3rem] border border-white/5 relative group transition-all hover:bg-[#222]">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
             <svg viewBox="0 0 24 24" className="w-24 h-24 fill-white"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 17l4.5-6 3.5 4.5 5-7 5 8.5H5z"/></svg>
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-[#1DB954] text-black text-[10px] font-black px-4 py-1 rounded-full w-fit mb-4 tracking-widest uppercase">The Celebration</div>
            <h3 className="text-6xl font-black mb-8">Resepsi</h3>
            <div className="space-y-6 mb-12 flex-1">
               <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-[#1DB954]/20 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1DB954]"><path d="M19 19H5V8h14v11zM16 1h-8v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-3V1z"/></svg>
                  </div>
                  <div className="text-xl font-black">Coming Soon</div>
               </div>
               <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-[#1DB954]/20 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1DB954]"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                  </div>
                  <div className="text-xl font-black">10.00 s/d Selesai</div>
               </div>
               <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover/item:bg-[#1DB954]/20 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1DB954]"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
                  </div>
                  <div className="text-xl font-bold text-[#B3B3B3]">Cukanggalih Kidul</div>
               </div>
            </div>
            <a 
              href="https://maps.app.goo.gl/i4AoBh3gViT74d9B9" 
              target="_blank" 
              className="mt-auto bg-white text-black font-black py-5 px-10 rounded-full text-center hover:bg-[#1DB954] hover:scale-105 transition-all shadow-xl text-lg"
            >
              BUKA MAPS
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InvitationScroll;
