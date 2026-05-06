import React from 'react';

export default function StyleCard({ estilo, selected, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        border: `2px solid ${selected ? '#7B1F3A' : '#E8D5DA'}`,
        borderRadius: 12,
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#FDFAF8',
        boxShadow: selected ? '0 0 0 3px rgba(123,31,58,0.15)' : '0 2px 8px rgba(123,31,58,0.06)',
        transition: 'all 0.2s',
        transform: selected ? 'translateY(-2px)' : 'none',
      }}
    >

      {estilo.img ? (
        <img
          src={estilo.img}
          alt={estilo.nome}
          style={{ width: '100%', height: 110, objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{ width: '100%', height: 110, background: estilo.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38 }}>
          {estilo.emoji}
        </div>
      )}

      <div style={{ padding: 12 }}>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 600, color: '#2A1A20', marginBottom: 4 }}>
          {estilo.nome}
        </div>
        <div style={{ fontSize: 11.5, color: '#A07A87', lineHeight: 1.5, fontWeight: 300, marginBottom: 10 }}>
          {estilo.descricao}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 16, height: 16,
            border: `2px solid ${selected ? '#7B1F3A' : '#E8D5DA'}`,
            borderRadius: 4,
            background: selected ? '#7B1F3A' : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s',
          }}>
            {selected && (
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2.5">
                <polyline points="2,6 5,9 10,3" />
              </svg>
            )}
          </div>
          <span style={{ fontSize: 12, color: selected ? '#7B1F3A' : '#A07A87', fontWeight: selected ? 500 : 400, transition: 'all 0.2s' }}>
            {selected ? 'Selecionado ✓' : 'Selecionar'}
          </span>
        </div>
      </div>
    </div>
  );
}
