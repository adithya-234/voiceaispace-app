import React from 'react';

export default function VoiceCard({ emotion, price, text }) {
  
  return (
    <div style={{
      border: '2px solid #888',
      borderRadius: 12,
      padding: 16,
      margin: 8,
      background: '#f7f7fb',
      width: 260,
      display: 'inline-block'
    }}>
      <h3>{emotion}</h3>
      <p>Price: ${price.toFixed(3)}</p>
      <audio controls src="">
        <source src="" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div style={{marginTop: 10, fontStyle: 'italic'}}>{text}</div>
    </div>
  );
}
