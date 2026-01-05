
import React, { useState } from 'react';
import { Icons, TRACKS } from '../constants';
import { Track } from '../types';

const TrackList: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  return (
    <div className="mt-8 px-4 md:px-8">
      {/* Modal for viewing the photo */}
      {selectedTrack && (
        <div 
          className="fixed inset-0 z-[110] bg-black/95 flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in duration-300"
          onClick={() => setSelectedTrack(null)}
        >
          <div className="max-w-4xl w-full h-full relative flex flex-col items-center justify-center">
             <button 
               className="absolute top-0 right-0 p-4 text-white hover:text-[#1DB954] transition-colors"
               onClick={() => setSelectedTrack(null)}
             >
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7a.996.996 0 10-1.41 1.41L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>
             </button>
             <div className="bg-[#181818] p-4 rounded-3xl shadow-2xl max-h-[80vh] overflow-hidden">
                <img src={selectedTrack.imageUrl} className="w-full h-full object-contain rounded-xl" alt={selectedTrack.title} />
             </div>
             <div className="mt-8 text-center">
                <h3 className="text-3xl font-black text-[#1DB954]">{selectedTrack.title}</h3>
                <p className="text-[#B3B3B3] text-lg">{selectedTrack.artist}</p>
             </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 border-b border-[#ffffff1a] text-[#B3B3B3] text-xs uppercase tracking-wider font-semibold sticky top-0 bg-[#121212] z-10">
        <div>#</div>
        <div>Title</div>
        <div className="hidden md:block">Time / Story</div>
        <div className="flex justify-end pr-8">
          <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"/><path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4a.75.75 0 01.75-.75z"/></svg>
        </div>
      </div>

      <div className="mt-4 pb-24">
        {TRACKS.map((track, index) => (
          <div 
            key={track.id} 
            onClick={() => setSelectedTrack(track)}
            className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-3 rounded-md hover:bg-[#ffffff1a] group transition-colors cursor-pointer"
          >
            <div className="flex items-center text-sm text-[#B3B3B3]">
                <span className="group-hover:hidden">{index + 1}</span>
                <span className="hidden group-hover:block text-white"><Icons.Play /></span>
            </div>
            
            <div className="flex items-center gap-4">
              <img src={track.imageUrl} alt={track.title} className="w-10 h-10 rounded object-cover shadow-lg" />
              <div className="flex flex-col truncate">
                <span className="text-white font-semibold truncate group-hover:text-[#1DB954]">{track.title}</span>
                <span className="text-xs text-[#B3B3B3] group-hover:text-white">{track.artist}</span>
              </div>
            </div>

            <div className="hidden md:flex items-center text-sm text-[#B3B3B3]">
              {track.timestamp}
            </div>

            <div className="flex items-center justify-end gap-4 pr-4">
              <span className="opacity-0 group-hover:opacity-100 text-[#B3B3B3] hover:text-[#1DB954]">
                <Icons.Heart />
              </span>
              <span className="text-sm text-[#B3B3B3]">{track.duration}</span>
              <span className="opacity-0 group-hover:opacity-100 text-[#B3B3B3]">
                <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current"><path d="M3 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
