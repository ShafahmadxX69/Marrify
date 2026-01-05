
import React, { useState, useEffect } from 'react';
import { Icons, TRACKS } from '../constants';

const Player: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  
  // Custom display for the "Live" track
  const currentTrack = {
    title: 'The Wedding Day (Live)',
    artist: 'Dhea & Emil',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=100'
  };

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-[#282828] flex items-center px-4 z-50">
      {/* Current Song Info */}
      <div className="flex items-center w-1/3 min-w-[180px]">
        <div className="w-14 h-14 rounded overflow-hidden mr-4 shadow-lg group relative cursor-pointer">
          <img src={currentTrack.imageUrl} alt="Cover" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 16 16" className="w-6 h-6 fill-white"><path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8.53a.75.75 0 010-1.06l7.53-7.53a.75.75 0 011.06 0z" transform="rotate(180 8 8)"/></svg>
          </div>
        </div>
        <div className="flex flex-col truncate">
          <span className="text-sm font-semibold hover:underline cursor-pointer text-white truncate">{currentTrack.title}</span>
          <span className="text-xs text-[#B3B3B3] hover:underline cursor-pointer truncate">{currentTrack.artist}</span>
        </div>
        <button className="ml-4 text-[#1DB954] hover:scale-110 transition-transform">
          <Icons.Heart filled />
        </button>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center flex-1 max-w-[600px]">
        <div className="flex items-center gap-6 mb-2">
          <button className="text-[#B3B3B3] hover:text-white transition-colors hidden sm:block">
            <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current"><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H3a2 2 0 00-2 2v10h1.5V5a.5.5 0 01.5-.5h10.109l-1.018 1.018a.75.75 0 001.06 1.06L15.914 3.82a.75.75 0 000-1.06L13.151.922z"/></svg>
          </button>
          <button className="text-[#B3B3B3] hover:text-white transition-colors"><Icons.Prev /></button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:scale-105 transition-transform"
          >
            {isPlaying ? <Icons.Pause /> : <Icons.Play />}
          </button>
          <button className="text-[#B3B3B3] hover:text-white transition-colors"><Icons.Next /></button>
          <button className="text-[#B3B3B3] hover:text-white transition-colors hidden sm:block">
             <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current"><path d="M0 4.75A.75.75 0 01.75 4h14.5a.75.75 0 010 1.5H.75A.75.75 0 010 4.75zM0 11.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H.75a.75.75 0 01-.75-.75z"/></svg>
          </button>
        </div>
        
        <div className="w-full flex items-center gap-2 px-2 sm:px-0">
          <span className="text-[10px] text-[#B3B3B3] w-10 text-right">1:24</span>
          <div className="flex-1 h-1 bg-[#4d4d4d] rounded-full group cursor-pointer relative">
            <div 
              className="h-full bg-white group-hover:bg-[#1DB954] rounded-full" 
              style={{ width: `${progress}%` }}
            />
            <div 
                className="absolute w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-lg -top-1"
                style={{ left: `calc(${progress}% - 6px)` }}
            />
          </div>
          <span className="text-[10px] text-[#B3B3B3] w-10">Eternal</span>
        </div>
      </div>

      {/* Volume Controls */}
      <div className="hidden md:flex items-center justify-end w-1/3 gap-3">
        <button className="text-[#B3B3B3] hover:text-white"><Icons.Search /></button>
        <div className="w-24 h-1 bg-[#4d4d4d] rounded-full relative group cursor-pointer">
            <div className="h-full w-2/3 bg-white group-hover:bg-[#1DB954] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Player;
