'use client';

import { useState } from 'react';

export default function BotPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    setResponse(`Analysiere: ${input}`);
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Vault Bot</h1>

      <input
        type="text"
        placeholder="Chart oder Token eingeben"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '0.5rem', width: '300px' }}
      />

      <button onClick={handleAsk} style={{ marginLeft: '1rem' }}>
        Analyse starten
      </button>

      {response && (
        <div style={{ marginTop: '2rem' }}>
          <strong>Antwort:</strong>
          <p>{response}</p>
        </div>
      )}
    </main>
  );
}
