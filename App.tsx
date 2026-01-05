
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import TrackList from './components/TrackList';
import RSVPForm from './components/RSVPForm';
import GiftSection from './components/GiftSection';
import VideoOverlay from './components/VideoOverlay';
import InvitationScroll from './components/InvitationScroll';
import { Icons, COLORS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (e: any) => {
      setScrolled(e.target.scrollTop > 50);
    };
    const mainContent = document.getElementById('main-content');
    mainContent?.addEventListener('scroll', handleScroll);
    return () => mainContent?.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePlayVideo = () => {
    setIsVideoOpen(true);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black font-sans text-white select-none">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Container */}
      <main 
        id="main-content"
        className="flex-1 relative overflow-y-auto bg-gradient-to-b from-[#121212] via-[#121212] to-black m-2 ml-0 rounded-lg"
      >
        {/* Top Header */}
        <header 
          className={`fixed top-2 left-[2px] md:left-[240px] right-2 z-30 flex items-center justify-between p-4 transition-all duration-300 rounded-t-lg ${
            scrolled ? 'bg-[#121212]' : 'bg-transparent'
          }`}
        >
          <div className="flex gap-4">
            <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black transition-colors">
              <svg viewBox="0 0 16 16" className="w-5 h-5 fill-white"><path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8.53a.75.75 0 010-1.06l7.53-7.53a.75.75 0 011.06 0z"/></svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black transition-colors">
              <svg viewBox="0 0 16 16" className="w-5 h-5 fill-white"><path d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06l7.53-7.53a.75.75 0 000-1.06L5.03.47a.75.75 0 00-1.06 0z"/></svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setActiveSection('rsvp')}
              className="bg-[#1DB954] text-black text-sm font-black py-2 px-6 rounded-full hover:scale-105 transition-transform"
            >
              Hadir? Kabarin disini!
            </button>
            <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center border border-white/10 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" alt="Profile" />
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative pt-28 pb-12 px-8 bg-gradient-to-b from-[#1DB95455] to-transparent">
          <div className="flex flex-col md:flex-row items-end gap-10">
            <div 
              onClick={handlePlayVideo}
              className="group cursor-pointer w-56 h-56 md:w-72 md:h-72 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex-shrink-0 bg-[#282828] rounded-[2rem] overflow-hidden relative ring-4 ring-white/5"
            >
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" 
                alt="Dhea & Emil Wedding" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all shadow-[0_0_30px_rgba(29,185,84,0.6)]">
                  <Icons.Play />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                 <div className="bg-[#1DB954] text-black text-[10px] font-black px-2 py-0.5 rounded tracking-widest uppercase">Special Edition</div>
                 <span className="text-xs font-black text-white uppercase tracking-[0.3em]">Full Invitation</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4 leading-[0.9]">
                Dhea & Emil
              </h1>
              <div className="flex items-center flex-wrap gap-3 text-sm font-bold">
                <div className="flex items-center gap-2 text-[#1DB954]">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                   <span>Marrify Verified</span>
                </div>
                <span className="text-white/40">•</span>
                <span className="text-white">2026 Season</span>
                <span className="text-white/40">•</span>
                <span className="text-[#B3B3B3]">Oct 25, 2026</span>
                <span className="text-white/40">•</span>
                <span className="text-[#B3B3B3]">Cukanggalih Kidul</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="px-8 mt-12 flex items-center gap-10">
            <button 
              onClick={handlePlayVideo}
              className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center text-black hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(29,185,84,0.4)]"
            >
                <Icons.Play />
            </button>
            <button className="text-[#1DB954] hover:scale-125 transition-all"><Icons.Heart filled /></button>
            <button 
              onClick={() => setActiveSection('library')}
              className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-black text-sm tracking-widest uppercase transition-all"
            >
                View Album Details
            </button>
        </div>

        {/* Content Area */}
        <div className="px-8 mt-16">
            {activeSection === 'home' && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <section>
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl font-black">Our Journey Tracklist</h2>
                    </div>
                    <TrackList />
                  </section>
                  
                  <section className="mt-32 pb-48">
                    <h2 className="text-3xl font-black mb-10">Message from Artists</h2>
                    <div className="bg-[#181818] p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden group max-w-5xl">
                      <div className="relative z-10">
                        <p className="text-white font-medium leading-[1.8] text-3xl md:text-4xl italic opacity-90 tracking-tight">
                          "Bagaikan nada yang saling melengkapi, perjalanan kami adalah tentang menemukan harmoni. Kami tak sabar untuk merayakan peluncuran 'album baru' kehidupan kami bersama Anda semua di Cukanggalih Kidul."
                        </p>
                        <div className="mt-16 flex items-center gap-6">
                           <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#1DB954] shadow-2xl">
                              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=200" alt="D&E" />
                           </div>
                           <div>
                              <p className="font-black text-3xl text-white">Dhea & Emil</p>
                              <p className="text-[#1DB954] font-black uppercase tracking-[0.4em] text-xs">OFFICIALLY VERIFIED</p>
                           </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1DB95422] to-transparent pointer-events-none" />
                    </div>
                  </section>
                </div>
            )}

            {activeSection === 'library' && (
                <div className="animate-in fade-in duration-1000">
                    <InvitationScroll />
                    <GiftSection />
                    <div className="pb-48" />
                </div>
            )}

            {activeSection === 'rsvp' && (
                <div className="pb-48 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <RSVPForm />
                </div>
            )}
            
            {activeSection === 'search' && (
                <div className="pb-48 animate-in fade-in duration-700">
                    <h2 className="text-4xl font-black mb-12">Search for Vibes</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {[
                          { name: 'Pop Kita', color: '#E91429', img: 'https://images.unsplash.com/photo-1514525253361-bee8718a300a?auto=format&fit=crop&q=80&w=200' },
                          { name: 'Jazz Nikah', color: '#1DB954', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=200' },
                          { name: 'Soul Family', color: '#27856A', img: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&q=80&w=200' },
                          { name: 'After Party', color: '#1E3264', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=200' },
                          { name: 'Religius', color: '#8D67AB', img: 'https://images.unsplash.com/photo-1471341971476-3ae970cf99c4?auto=format&fit=crop&q=80&w=200' }
                        ].map((genre) => (
                            <div key={genre.name} className="aspect-square rounded-3xl p-6 relative overflow-hidden cursor-pointer group shadow-2xl transition-all" style={{ backgroundColor: genre.color }}>
                                <span className="text-2xl md:text-3xl font-black tracking-tighter leading-none relative z-10">{genre.name}</span>
                                <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-black/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 rounded-2xl overflow-hidden">
                                   <img src={genre.img} className="w-full h-full object-cover grayscale opacity-60" alt={genre.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
      </main>

      {/* Music Video Overlay */}
      <VideoOverlay isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* Bottom Player */}
      <Player />
      
      {/* Mobile Nav Overlay */}
      <div className="md:hidden fixed bottom-28 left-0 right-0 h-16 bg-gradient-to-t from-black via-black to-transparent flex items-center justify-around z-40 px-6 backdrop-blur-md">
        <button onClick={() => setActiveSection('home')} className={`flex flex-col items-center gap-1 text-[10px] font-black transition-all ${activeSection === 'home' ? 'text-[#1DB954] scale-110' : 'text-[#B3B3B3]'}`}>
            <Icons.Home />
            <span>HOME</span>
        </button>
        <button onClick={() => setActiveSection('search')} className={`flex flex-col items-center gap-1 text-[10px] font-black transition-all ${activeSection === 'search' ? 'text-[#1DB954] scale-110' : 'text-[#B3B3B3]'}`}>
            <Icons.Search />
            <span>SEARCH</span>
        </button>
        <button onClick={() => setActiveSection('library')} className={`flex flex-col items-center gap-1 text-[10px] font-black transition-all ${activeSection === 'library' ? 'text-[#1DB954] scale-110' : 'text-[#B3B3B3]'}`}>
            <Icons.Library />
            <span>INVITE</span>
        </button>
        <button onClick={() => setActiveSection('rsvp')} className={`flex flex-col items-center gap-1 text-[10px] font-black transition-all ${activeSection === 'rsvp' ? 'text-[#1DB954] scale-110' : 'text-[#B3B3B3]'}`}>
            <Icons.Play />
            <span>RSVP</span>
        </button>
      </div>
    </div>
  );
};

export default App;
