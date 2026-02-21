'use client';
import { useState } from 'react';

export default function AIChat() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<{role: string, content: string}[]>([]);
  const [loading, setLoading] = useState(false); // Opsional: Indikator Loading [cite: 34]

  const sendMessage = async () => {
    if (!input) return;
    setLoading(true);
    const userMsg = { role: 'user', content: input };
    setChat((prev) => [...prev, userMsg]);
    
    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: [...chat, userMsg] }),
    });
    
    const data = await res.json();
    setChat((prev) => [...prev, data]);
    setInput('');
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-lg bg-slate-900 text-white">
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {chat.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'text-blue-400' : 'text-green-400'}>
            <strong>{msg.role === 'user' ? 'You: ' : 'Aigis AI: '}</strong>{msg.content}
          </div>
        ))}
        {loading && <p className="text-gray-500 animate-pulse">Thinking...</p>}
      </div>
      <div className="flex gap-2">
        <input 
          className="flex-1 p-2 rounded bg-slate-800 border border-slate-700"
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask about P3R..."
        />
        <button onClick={sendMessage} className="bg-blue-600 px-4 py-2 rounded">Send</button>
      </div>
    </div>
  );
}