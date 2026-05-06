import React from 'react';

export default function ProgressBar({ current, total }) {
  const pct = Math.round(((current + 1) / total) * 100);

  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#A07A87', marginBottom: 8, fontWeight: 400 }}>
        <span>Pergunta {current + 1} de {total}</span>
        <span>{pct}%</span>
      </div>

      <div style={{ height: 3, background: '#E8D5DA', borderRadius: 2, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${pct}%`, background: '#7B1F3A', borderRadius: 2, transition: 'width 0.4s ease' }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            width: i === current ? 10 : 8,
            height: i === current ? 10 : 8,
            borderRadius: '50%',
            background: i <= current ? '#7B1F3A' : '#E8D5DA',
            opacity: i < current ? 0.45 : 1,
            transition: 'all 0.3s',
          }} />
        ))}
      </div>
    </div>
  );
}
