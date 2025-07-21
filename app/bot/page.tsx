// app/bot/page.tsx

'use client';

import { useState } from 'react';

export default function BotPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = async () => {
    // Beispiel: Platzhalter-Antwort
    setResponse(`Analysiere: ${input} ...`);
    // Hier später Chartanalyse oder Backend-Call einfügen
  };

  return (
    <main>
      <h1>VaultAI Bot</h1>
      <input
        type="text"
        placeholder="Gib z. B. PEPU/ETH ein"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAsk}>Analyse starten</button>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Antwort:</strong>
          <p>{response}</p>
        </div>
      )}
    </main>
  );
}
