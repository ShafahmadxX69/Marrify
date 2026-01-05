
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import TrackList from './components/TrackList';
import RSVPForm from './components/RSVPForm';
import GiftSection from './components/GiftSection';
import VideoOverlay from './components/VideoOverlay';
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
              className="bg-white text-black text-sm font-bold py-1 px-4 rounded-full hover:scale-105 transition-transform"
            >
              RSVP Now
            </button>
            <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#1DB954] to-[#1ed760] flex items-center justify-center text-[10px] font-bold">DE</div>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative pt-24 pb-12 px-8 bg-gradient-to-b from-[#1DB95444] to-transparent">
          <div className="flex flex-col md:flex-row items-end gap-6">
            <div 
              onClick={handlePlayVideo}
              className="group cursor-pointer w-48 h-48 md:w-60 md:h-60 shadow-[0_8px_40px_rgba(0,0,0,0.5)] flex-shrink-0 bg-[#282828] rounded-md overflow-hidden relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600" 
                alt="Dhea & Emil Wedding" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-16 h-16 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all shadow-2xl">
                  <Icons.Play />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest md:text-sm flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1DB954]"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                Wedding Invitation
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-tight">
                Dhea & Emil <br/> Wedding Day
              </h1>
              <div className="flex items-center flex-wrap gap-2 text-sm">
                <div className="w-6 h-6 rounded-full bg-[#1DB954] flex items-center justify-center text-[10px] font-bold">M</div>
                <span className="font-bold hover:underline cursor-pointer">Marrify Originals</span>
                <span className="text-[#B3B3B3]">•</span>
                <span className="font-bold text-white">2025 Release</span>
                <span className="text-[#B3B3B3]">•</span>
                <span className="text-white font-medium">October 25, 2025</span>
                <span className="text-[#B3B3B3]">•</span>
                <span className="text-[#B3B3B3]">Cukanggalih Kidul</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="px-8 mt-6">
            <div className="flex items-center gap-8 mb-8">
                <button 
                  onClick={handlePlayVideo}
                  className="w-14 h-14 bg-[#1DB954] rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform shadow-lg"
                >
                    <Icons.Play />
                </button>
                <button className="text-[#B3B3B3] hover:text-[#1DB954] transition-colors"><Icons.Heart filled /></button>
                <button 
                  onClick={() => setActiveSection('rsvp')}
                  className="text-[#B3B3B3] hover:text-white transition-colors flex items-center gap-2"
                >
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M12 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" transform="rotate(90 12 12)"/></svg>
                </button>
            </div>

            {activeSection === 'home' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <section>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold">Wedding Tracklist</h2>
                      <span className="text-xs font-bold text-[#B3B3B3] uppercase tracking-widest cursor-pointer hover:underline">See itinerary</span>
                    </div>
                    <TrackList />
                  </section>
                  
                  {/* Digital Envelope / Gift Section */}
                  <section>
                    <GiftSection />
                  </section>
                  
                  <section className="mt-12 pb-32">
                    <h2 className="text-2xl font-bold mb-4">About the Couple</h2>
                    <div className="bg-[#181818] p-8 rounded-lg border border-[#282828] relative overflow-hidden group">
                      <div className="relative z-10">
                        <p className="text-[#B3B3B3] leading-relaxed max-w-2xl text-lg italic">
                          "Our story isn't just a romance; it's a symphony. We've spent years composing the perfect melody together, and on October 25th, we're finally performing our grand finale as singles and our debut as a couple. Join us at Cukanggalih Kidul for the celebration of a lifetime."
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                           <div className="w-12 h-12 rounded-full overflow-hidden">
                              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=100" alt="D&E" />
                           </div>
                           <div>
                              <p className="font-bold text-white">Dhea & Emil</p>
                              <p className="text-xs text-[#B3B3B3]">The Lead Artists</p>
                           </div>
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#1DB95422] to-transparent pointer-events-none" />
                    </div>
                  </section>
                </div>
            )}

            {activeSection === 'rsvp' && (
                <div className="pb-32 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <RSVPForm />
                </div>
            )}

            {activeSection === 'library' && (
                <div className="pb-32 flex flex-col items-center justify-center min-h-[400px] text-center animate-in fade-in duration-500">
                    <div className="w-20 h-20 bg-[#282828] rounded-full flex items-center justify-center mb-6">
                        <Icons.Library />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Our Love Story</h2>
                    <p className="text-[#B3B3B3] max-w-md text-lg">The full documentary of Dhea & Emil's journey. Premiere scheduled for the wedding day!</p>
                </div>
            )}
            
            {activeSection === 'search' && (
                <div className="pb-32 animate-in fade-in duration-500">
                    <h2 className="text-2xl font-bold mb-6">Explore the Vibes</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                          { name: 'Ceremony Jazz', color: '#E91429' },
                          { name: 'Banquet Classics', color: '#1DB954' },
                          { name: 'Dinner Soul', color: '#27856A' },
                          { name: 'Afterparty Hits', color: '#1E3264' },
                          { name: 'Romantic Mix', color: '#8D67AB' }
                        ].map((genre) => (
                            <div key={genre.name} className="aspect-square rounded-lg p-4 relative overflow-hidden cursor-pointer group hover:opacity-90 transition-all" style={{ backgroundColor: genre.color }}>
                                <span className="text-xl md:text-2xl font-bold tracking-tighter">{genre.name}</span>
                                <div className="absolute -bottom-2 -right-6 w-24 h-24 bg-white/20 rotate-[25deg] group-hover:rotate-[15deg] transition-transform" />
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
      <div className="md:hidden fixed bottom-24 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent flex items-center justify-around z-40 px-4">
        <button onClick={() => setActiveSection('home')} className={`flex flex-col items-center text-[10px] transition-colors ${activeSection === 'home' ? 'text-white' : 'text-[#B3B3B3]'}`}>
            <Icons.Home />
            <span className="mt-1 font-medium">Home</span>
        </button>
        <button onClick={() => setActiveSection('search')} className={`flex flex-col items-center text-[10px] transition-colors ${activeSection === 'search' ? 'text-white' : 'text-[#B3B3B3]'}`}>
            <Icons.Search />
            <span className="mt-1 font-medium">Search</span>
        </button>
        <button onClick={() => setActiveSection('rsvp')} className={`flex flex-col items-center text-[10px] transition-colors ${activeSection === 'rsvp' ? 'text-white' : 'text-[#B3B3B3]'}`}>
            <Icons.Play />
            <span className="mt-1 font-medium">RSVP</span>
        </button>
      </div>
    </div>
  );
};

export default App;
