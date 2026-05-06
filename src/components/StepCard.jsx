import React from 'react';

export default function StepCard({ number, question, sub, error, children }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #E8D5DA',
      borderRadius: 16,
      padding: '36px 40px',
      boxShadow: '0 4px 24px rgba(123,31,58,0.10)',
      animation: 'slideIn 0.35s ease',
    }}>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A07A87', marginBottom: 8 }}>
        Pergunta {number}
      </div>

      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 400, color: '#2A1A20', lineHeight: 1.4, marginBottom: 6 }}>
        {question}
        <span style={{ display: 'inline-block', background: '#F5E8EC', color: '#7B1F3A', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 20, marginLeft: 10, verticalAlign: 'middle' }}>
          Obrigatório
        </span>
      </div>

      {sub && (
        <div style={{ fontSize: 13, color: '#A07A87', marginBottom: 28, fontWeight: 300 }}>
          {sub}
        </div>
      )}

      {children}

      {error && (
        <div style={{ marginTop: 12, padding: '10px 14px', background: '#FEF0F0', borderLeft: '3px solid #C0392B', borderRadius: 8, fontSize: 13, color: '#C0392B' }}>
          {error}
        </div>
      )}
    </div>
  );
}
