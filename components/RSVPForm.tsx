
import React, { useState } from 'react';
import { geminiService } from '../services/gemini';

const RSVPForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    attending: 'yes',
    relationship: 'friend',
    songRequest: '',
    mood: 'energetic'
  });
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSuggest = async () => {
    setLoading(true);
    const suggestion = await geminiService.suggestSong(formData.songRequest || 'wedding dance', formData.mood);
    setAiSuggestion(suggestion);
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#181818] rounded-xl p-8 max-w-2xl mx-auto text-center border border-[#282828] shadow-2xl animate-in fade-in slide-in-from-bottom-4">
        <div className="w-20 h-20 bg-[#1DB954] rounded-full flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">You're Added to the Playlist!</h2>
        <p className="text-[#B3B3B3] text-lg mb-8">We can't wait to see you at Alex & Sam's wedding. Your RSVP has been synced to our guest collection.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-[#1DB954] text-black font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform"
        >
          Edit Response
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#181818] rounded-xl p-8 max-w-2xl mx-auto border border-[#282828] shadow-2xl">
      <h2 className="text-2xl font-bold mb-6">RSVP & Request a Song</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-[#B3B3B3] mb-2 uppercase tracking-tighter">Your Name</label>
          <input 
            type="text" 
            required
            className="w-full bg-[#282828] border-none rounded-md p-3 text-white focus:ring-2 focus:ring-[#1DB954] outline-none"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-[#B3B3B3] mb-2 uppercase tracking-tighter">Attending?</label>
            <select 
              className="w-full bg-[#282828] border-none rounded-md p-3 text-white focus:ring-2 focus:ring-[#1DB954] outline-none"
              value={formData.attending}
              onChange={(e) => setFormData({...formData, attending: e.target.value})}
            >
              <option value="yes">I'm there! (Yes)</option>
              <option value="no">Sadly, I can't (No)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-[#B3B3B3] mb-2 uppercase tracking-tighter">Relationship</label>
            <select 
              className="w-full bg-[#282828] border-none rounded-md p-3 text-white focus:ring-2 focus:ring-[#1DB954] outline-none"
              value={formData.relationship}
              onChange={(e) => setFormData({...formData, relationship: e.target.value})}
            >
              <option value="friend">Friend</option>
              <option value="family">Family</option>
              <option value="colleague">Colleague</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-[#282828]">
          <label className="block text-sm font-bold text-[#B3B3B3] mb-2 uppercase tracking-tighter">AI DJ Helper: What's your vibe?</label>
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              className="flex-1 bg-[#282828] border-none rounded-md p-3 text-white focus:ring-2 focus:ring-[#1DB954] outline-none"
              placeholder="Suggest a genre or mood..."
              value={formData.songRequest}
              onChange={(e) => setFormData({...formData, songRequest: e.target.value})}
            />
            <button 
              type="button"
              onClick={handleSuggest}
              disabled={loading}
              className="bg-white text-black font-bold py-2 px-4 rounded-md hover:bg-[#1DB954] transition-colors disabled:opacity-50"
            >
              {loading ? 'Thinking...' : 'Get Suggestion'}
            </button>
          </div>
          
          {aiSuggestion && (
            <div className="bg-[#121212] p-4 rounded-md text-sm text-[#B3B3B3] border-l-4 border-[#1DB954] mb-4">
              <p className="whitespace-pre-wrap">{aiSuggestion}</p>
            </div>
          )}
        </div>

        <button 
          type="submit"
          className="w-full bg-[#1DB954] text-black font-bold py-4 rounded-full text-lg hover:scale-105 transition-transform mt-4"
        >
          Confirm My Reservation
        </button>
      </form>
    </div>
  );
};

export default RSVPForm;
