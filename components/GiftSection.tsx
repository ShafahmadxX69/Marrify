
import React, { useState } from 'react';

const GiftSection: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const accounts = [
    { name: 'Shafa Millah Ahmad', bank: 'BCA', code: '25102000', img: 'https://images.unsplash.com/photo-1518131394551-9969f7b9278c?auto=format&fit=crop&q=80&w=300' },
    { name: 'Dhea Listiani', bank: 'BCA', code: '16022001', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300' }
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="mt-24 p-8 md:p-12 bg-gradient-to-br from-[#121212] to-[#1DB95411] rounded-[3rem] border border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10 ring-2 ring-[#1DB954] ring-offset-4 ring-offset-black">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=150" alt="D&E" />
        </div>
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#1DB954]"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span className="text-xs font-black uppercase tracking-widest text-[#B3B3B3]">Artist's Pick</span>
            </div>
            <h2 className="text-4xl font-black text-white">Wedding Gift</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {accounts.map((acc) => (
          <div 
            key={acc.code}
            className="flex items-center gap-8 group"
          >
            <div className="w-32 h-32 md:w-48 md:h-48 bg-[#282828] rounded-3xl overflow-hidden flex-shrink-0 shadow-2xl group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
               <img src={acc.img} className="w-full h-full object-cover" alt={acc.name} />
            </div>
            <div className="flex flex-col gap-4">
               <div className="bg-[#00529C] text-white text-[12px] font-black px-3 py-1 rounded w-fit italic shadow-lg">BCA</div>
               <p className="font-black text-2xl md:text-3xl text-white group-hover:text-[#1DB954] transition-colors leading-tight">{acc.name}</p>
               <p className="text-[#B3B3B3] font-bold text-lg tracking-wider">{acc.code}</p>
               <button 
                onClick={() => handleCopy(acc.code)}
                className={`w-fit px-8 py-3 rounded-full font-black text-sm transition-all shadow-xl ${
                  copied === acc.code 
                    ? 'bg-[#1DB954] text-black scale-105' 
                    : 'bg-white text-black hover:bg-[#1DB954] hover:scale-110 active:scale-95'
                }`}
              >
                {copied === acc.code ? '✓ DI SALIN' : 'SALIN NOMOR'}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-[#B3B3B3] font-medium max-w-xl mx-auto italic">
        "Terima kasih atas segala bentuk dukungan dan doa restu yang diberikan kepada kami. Kehadiran Anda adalah kado terindah."
      </div>
    </div>
  );
};

export default GiftSection;
