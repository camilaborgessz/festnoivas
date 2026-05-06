import React from 'react';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const ArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default function NavButtons({ onPrev, onNext, isFirst, isLast, loading }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32 }}>
      <button
        onClick={onPrev}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '13px 24px', borderRadius: 50,
          fontFamily: 'Jost, sans-serif', fontSize: 14, fontWeight: 500,
          cursor: isFirst ? 'default' : 'pointer',
          border: '1.5px solid #E8D5DA',
          background: 'transparent', color: '#6B4A55',
          visibility: isFirst ? 'hidden' : 'visible',
          transition: 'all 0.2s',
        }}
      >
        <ArrowLeft /> Voltar
      </button>

      <button
        onClick={onNext}
        disabled={loading}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '13px 28px', borderRadius: 50,
          fontFamily: 'Jost, sans-serif', fontSize: 14, fontWeight: 500,
          cursor: loading ? 'wait' : 'pointer',
          border: 'none',
          background: loading ? '#A0596A' : '#7B1F3A',
          color: 'white',
          boxShadow: '0 4px 16px rgba(123,31,58,0.3)',
          transition: 'all 0.2s',
        }}
      >
        {loading ? 'Enviando…' : isLast ? 'Enviar' : 'Próximo'}
        {!loading && <ArrowRight />}
      </button>
    </div>
  );
}
