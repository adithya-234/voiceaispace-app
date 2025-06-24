import React, { useState } from 'react';
import VoiceCard from './VoiceCard';

const EMOTIONS = ['Joy', 'Sadness', 'Anger', 'Surprise', 'Calm'];

function mockPrice(text, emotion) {
  // Simulate price calculation
  const base = 0.05;
  const lengthFactor = Math.max(1, text.length / 50);
  const emotionFactor = 1 + EMOTIONS.indexOf(emotion) * 0.1;
  return base * lengthFactor * emotionFactor;
}

export default function App() {
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);

  const handleGenerate = () => {
    if (!text.trim()) return;
    const results = EMOTIONS.map(emotion => ({
      emotion,
      price: mockPrice(text, emotion),
      text
    }));
    setVoices(results);
  };

  return (
    <div style={{padding: 30, background: '#e8f0fe', minHeight: '100vh'}}>
      <h1 style={{textAlign: 'center', color: '#333'}}>VoiceAI Space Demo</h1>
      <div style={{textAlign: 'center', marginBottom: 24}}>
        <textarea
          rows={4}
          cols={50}
          placeholder="Enter your text here..."
          value={text}
          onChange={e => setText(e.target.value)}
          style={{padding: 10, fontSize: 16, borderRadius: 8, border: '1px solid #ccc'}}
        /><br />
        <button
          onClick={handleGenerate}
          style={{
            marginTop: 10,
            padding: '10px 24px',
            fontSize: 18,
            borderRadius: 8,
            background: '#1976d2',
            color: '#fff',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Generate Voices
        </button>
      </div>
      <div style={{textAlign: 'center'}}>
        {voices.map((v, i) => (
          <VoiceCard key={i} emotion={v.emotion} price={v.price} text={v.text} />
        ))}
      </div>
    </div>
  );
}
