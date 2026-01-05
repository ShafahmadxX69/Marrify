
import React from 'react';
import { Track } from './types';

export const COLORS = {
  spotifyGreen: '#1DB954',
  spotifyBlack: '#121212',
  spotifyDarkGray: '#181818',
  spotifyLightGray: '#282828',
  textPrimary: '#FFFFFF',
  textSecondary: '#B3B3B3',
};

export const Icons = {
  Home: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011-1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H3a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z" />
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M10.533 1.271a9.262 9.262 0 102.828 17.76l4.481 4.481a1 1 0 001.414-1.414l-4.481-4.481a9.262 9.262 0 00-4.242-16.346zm0 2a7.262 7.262 0 11-7.262 7.262 7.262 7.262 0 017.262-7.262z" />
    </svg>
  ),
  Library: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zM15.5 2.134A1 1 0 0014 3v18a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1.5-.866l-5 3z" />
    </svg>
  ),
  Play: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z" />
    </svg>
  ),
  Pause: () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm9.3 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z" />
    </svg>
  ),
  Next: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M17.7 3a.7.7 0 00-.7.7v6.91L5.05 3.312A.7.7 0 004 3.918v16.164a.7.7 0 001.05.606L17 13.39V20.3a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z" />
    </svg>
  ),
  Prev: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current rotate-180">
      <path d="M17.7 3a.7.7 0 00-.7.7v6.91L5.05 3.312A.7.7 0 004 3.918v16.164a.7.7 0 001.05.606L17 13.39V20.3a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z" />
    </svg>
  ),
  Heart: ({ filled }: { filled?: boolean }) => (
    <svg viewBox="0 0 24 24" className={`w-5 h-5 ${filled ? 'text-[#1DB954] fill-current' : 'fill-none stroke-current stroke-2'}`}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  Plus: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
      <path d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6z" />
    </svg>
  ),
};

// Fixed error: Added import for Track above
export const TRACKS: Track[] = [
  {
    id: '1',
    title: 'The Grand Ceremony',
    artist: 'Our Eternal Promise',
    duration: '02:00:00',
    imageUrl: 'https://picsum.photos/id/237/400/400',
    type: 'event',
    timestamp: 'Saturday, June 14, 2025 • 4:00 PM'
  },
  {
    id: '2',
    title: 'Cocktail Hour Mix',
    artist: 'Cheers to Love',
    duration: '01:30:00',
    imageUrl: 'https://picsum.photos/id/102/400/400',
    type: 'event',
    timestamp: '5:30 PM'
  },
  {
    id: '3',
    title: 'Wedding Banquet Feast',
    artist: 'A Culinary Journey',
    duration: '03:00:00',
    imageUrl: 'https://picsum.photos/id/103/400/400',
    type: 'event',
    timestamp: '7:00 PM'
  },
  {
    id: '4',
    title: 'First Dance (Remastered)',
    artist: 'Alex & Sam',
    duration: '04:20',
    imageUrl: 'https://picsum.photos/id/104/400/400',
    type: 'story',
    timestamp: '9:00 PM'
  },
  {
    id: '5',
    title: 'Afterparty Beats',
    artist: 'Late Night Crew',
    duration: '04:00:00',
    imageUrl: 'https://picsum.photos/id/106/400/400',
    type: 'event',
    timestamp: '10:00 PM'
  }
];
