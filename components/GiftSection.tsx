
import React, { useState } from 'react';

const GiftSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const accounts = [
    { name: 'Shafa Millah Ahmad', bank: 'BCA', code: '25102000' },
    { name: 'Dhea Listiani', bank: 'BCA', code: '16022001' }
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Support the Couple</h2>
        <span className="text-xs font-bold text-[#B3B3B3] uppercase tracking-widest cursor-pointer hover:underline">Show all</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accounts.map((acc) => (
          <div 
            key={acc.code}
            className="bg-[#181818] p-5 rounded-lg border border-transparent hover:border-[#282828] hover:bg-[#282828] transition-all group cursor-default"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#00529C] rounded flex items-center justify-center font-black italic text-white text-xs">
                  BCA
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{acc.name}</p>
                  <p className="text-[#B3B3B3] text-sm font-medium">Account: {acc.code}</p>
                </div>
              </div>
              <button 
                onClick={() => handleCopy(acc.code)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                  copied === acc.code 
                    ? 'bg-[#1DB954] text-black' 
                    : 'bg-transparent border border-[#B3B3B3] text-white hover:border-white hover:scale-105'
                }`}
              >
                {copied === acc.code ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 bg-gradient-to-r from-[#1DB954] to-[#1ed760] p-6 rounded-lg text-black">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-black">Digital Envelope</h3>
            <p className="font-medium opacity-80">Your blessings mean the world to us.</p>
          </div>
          <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current opacity-40"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
        </div>
      </div>
    </div>
  );
};

export default GiftSection;
