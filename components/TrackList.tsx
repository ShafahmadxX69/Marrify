
import React from 'react';
import { Icons, TRACKS } from '../constants';
import { Track } from '../types';

const TrackList: React.FC = () => {
  return (
    <div className="mt-8 px-8">
      <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 border-b border-[#ffffff1a] text-[#B3B3B3] text-xs uppercase tracking-wider font-semibold sticky top-0 bg-[#121212] z-10">
        <div>#</div>
        <div>Title</div>
        <div className="hidden md:block">Time / Schedule</div>
        <div className="flex justify-end pr-8">
          <svg viewBox="0 0 16 16" className="w-4 h-4 fill-current"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"/><path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4a.75.75 0 01.75-.75z"/></svg>
        </div>
      </div>

      <div className="mt-4 pb-24">
        {TRACKS.map((track, index) => (
          <div 
            key={track.id} 
            className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-3 rounded-md hover:bg-[#ffffff1a] group transition-colors cursor-pointer"
          >
            <div className="flex items-center text-sm text-[#B3B3B3]">
                <span className="group-hover:hidden">{index + 1}</span>
                <span className="hidden group-hover:block text-white"><Icons.Play /></span>
            </div>
            
            <div className="flex items-center gap-4">
              <img src={track.imageUrl} alt={track.title} className="w-10 h-10 rounded object-cover" />
              <div className="flex flex-col truncate">
                <span className="text-white font-semibold truncate group-hover:text-[#1DB954]">{track.title}</span>
                <span className="text-xs text-[#B3B3B3] group-hover:text-white">{track.artist}</span>
              </div>
            </div>

            <div className="hidden md:flex items-center text-sm text-[#B3B3B3]">
              {track.timestamp}
            </div>

            <div className="flex items-center justify-end gap-4 pr-4">
              <span className="opacity-0 group-hover:opacity-100 text-[#B3B3B3] hover:text-white">
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
