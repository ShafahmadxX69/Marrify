
import React from 'react';
import { Icons } from '../constants';

interface VideoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-in fade-in zoom-in duration-300">
      <div className="absolute top-8 right-8 z-[110]">
        <button 
          onClick={onClose}
          className="w-12 h-12 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex-1 relative overflow-hidden">
        {/* Using a high-quality sample cinematic video to represent the pre-wedding video */}
        <video 
          autoPlay 
          className="w-full h-full object-cover"
          src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-in-the-forest-41165-large.mp4"
          loop
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="absolute bottom-32 left-8 md:left-16 animate-in slide-in-from-bottom-8 duration-700">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#1DB954] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              Music Video
            </div>
            <span className="text-white/60 text-sm font-medium">Now Playing</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-2">Dhea & Emil</h2>
          <p className="text-xl md:text-2xl text-[#1DB954] font-bold">The Wedding Song (Eternal Love Mix)</p>
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;
