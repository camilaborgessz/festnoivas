import React from 'react';
import { gerarLinkWhatsApp } from '../utils/sendWhatsApp';

export default function SuccessScreen({ dados }) {
  const [y, m, d] = dados.data.split('-');
  const dataFormatada = `${d}/${m}/${y}`;

  const resumo = [
    { label: 'Data do casamento',    value: dataFormatada },
    { label: 'Quantidade de convidados', value: `${dados.convidados} convidados` },
    { label: 'Local',                value: dados.local },
    { label: 'Cerimonial',           value: dados.cerimonial },
    { label: 'Estilo(s) de decoração', value: dados.estilos.join(', ') },
    { label: 'Como chegou até nós',    value: dados.comoChegou },
  ];

  return (
    <div style={{ textAlign: 'center', padding: '48px 0 80px', animation: 'slideIn 0.5s ease' }}>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .btn-wpp:hover {
          background: #1DA851 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,211,102,0.4) !important;
        }
      `}</style>

      <div style={{
        width: 72, height: 72, background: '#F5E8EC', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 24px',
      }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7B1F3A" strokeWidth="2">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 400, color: '#2A1A20', marginBottom: 12 }}>
        Tudo preenchido!
      </h2>

      <div style={{
        background: '#fff',
        border: '1px solid #E8D5DA',
        borderRadius: 16,
        padding: '28px 32px',
        textAlign: 'left',
        boxShadow: '0 4px 24px rgba(123,31,58,0.08)',
        margin: '32px 0 28px',
      }}>
        <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#A07A87', fontWeight: 500, marginBottom: 20 }}>
          📋 Resumo das suas respostas
        </div>

        {resumo.map((item, i) => (
          <div key={i} style={{
            paddingBottom: 14, marginBottom: 14,
            borderBottom: i < resumo.length - 1 ? '1px solid #F0E4E8' : 'none',
          }}>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#A07A87', fontWeight: 500, marginBottom: 4 }}>
              {item.label}
            </div>
            <div style={{ fontSize: 15, color: '#2A1A20', fontWeight: 400 }}>
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <a
        href={gerarLinkWhatsApp(dados)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wpp"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          background: '#25D366',
          color: '#fff',
          textDecoration: 'none',
          padding: '16px 32px',
          borderRadius: 50,
          fontSize: 16,
          fontFamily: 'Jost, sans-serif',
          fontWeight: 500,
          boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
          transition: 'all 0.2s',
          letterSpacing: '0.02em',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Enviar respostas pelo WhatsApp
      </a>
    </div>
  );
}
