
import React from 'react';
import { Icons, COLORS } from '../constants';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Icons.Home /> },
    { id: 'search', label: 'Search Music', icon: <Icons.Search /> },
    { id: 'library', label: 'Our Story', icon: <Icons.Library /> },
  ];

  return (
    <div className="w-[240px] bg-black h-full flex flex-col p-2 space-y-2 hidden md:flex">
      {/* Brand */}
      <div className="p-4 mb-2">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-[#1DB954]">●</span> Marrify
        </h1>
      </div>

      {/* Navigation */}
      <nav className="bg-[#121212] rounded-lg p-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-4 p-3 rounded-md transition-all duration-200 group ${
              activeSection === item.id ? 'text-white' : 'text-[#B3B3B3] hover:text-white'
            }`}
          >
            <div className="group-hover:scale-105 transition-transform">{item.icon}</div>
            <span className="font-bold">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Secondary Library Area */}
      <div className="flex-1 bg-[#121212] rounded-lg p-2 overflow-y-auto">
        <div className="flex items-center justify-between p-3 text-[#B3B3B3]">
          <div className="flex items-center gap-3">
            <Icons.Library />
            <span className="font-bold">Your Invitations</span>
          </div>
          <button className="hover:text-white transition-colors">
            <Icons.Plus />
          </button>
        </div>
        
        <div className="mt-4 space-y-1">
            <div className="p-2 hover:bg-[#1A1A1A] rounded-md cursor-pointer group">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#282828] rounded-md flex items-center justify-center overflow-hidden">
                        <img src="https://picsum.photos/id/101/48/48" alt="Playlist" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white truncate">The Wedding Day</p>
                        <p className="text-xs text-[#B3B3B3]">Playlist • Marrify</p>
                    </div>
                </div>
            </div>
            <div className="p-2 hover:bg-[#1A1A1A] rounded-md cursor-pointer group">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#282828] rounded-md flex items-center justify-center">
                        <Icons.Heart filled />
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-white truncate">Loved Songs</p>
                        <p className="text-xs text-[#B3B3B3]">Playlist • 12 songs</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
