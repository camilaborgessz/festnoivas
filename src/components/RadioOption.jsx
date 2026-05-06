import React from 'react';

export default function RadioOption({ label, sublabel, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      style={{
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '14px 18px',
        border: `1.5px solid ${selected ? '#7B1F3A' : '#E8D5DA'}`,
        borderRadius: 10,
        cursor: 'pointer',
        background: selected ? '#F5E8EC' : '#FDFAF8',
        transition: 'all 0.2s',
      }}
    >

      <div style={{
        width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
        border: `2px solid ${selected ? '#7B1F3A' : '#E8D5DA'}`,
        background: selected ? '#7B1F3A' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all 0.2s',
      }}>
        {selected && <div style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%' }} />}
      </div>

      <div>
        <div style={{ fontSize: 15, color: '#2A1A20', fontWeight: 400 }}>{label}</div>
        {sublabel && <div style={{ fontSize: 12, color: '#A07A87', marginTop: 2, fontWeight: 300 }}>{sublabel}</div>}
      </div>
    </div>
  );
}
