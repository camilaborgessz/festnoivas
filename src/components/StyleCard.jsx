import React, { useState } from 'react';

export default function StyleCard({ estilo, selected, onToggle }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const imagens = estilo.imgs && estilo.imgs.length ? estilo.imgs : (estilo.img ? [estilo.img] : []);
  const totalImgs = imagens.length;

  function prevImg(e) {
    e.stopPropagation();
    setImgIndex(i => (i - 1 + totalImgs) % totalImgs);
  }
  function nextImg(e) {
    e.stopPropagation();
    setImgIndex(i => (i + 1) % totalImgs);
  }
  function toggleExpand(e) {
    e.stopPropagation();
    setExpanded(v => !v);
  }

  return (
    <div
      onClick={onToggle}
      style={{
        border: `2px solid ${selected ? '#7B1F3A' : '#E8D5DA'}`,
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'pointer',
        background: '#FDFAF8',
        boxShadow: selected ? '0 0 0 3px rgba(123,31,58,0.15), 0 12px 32px rgba(123,31,58,0.18)' : '0 4px 16px rgba(123,31,58,0.08)',
        transition: 'all 0.25s',
        transform: selected ? 'translateY(-4px)' : 'none',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', background: estilo.bg || '#F5E8EC' }}>
        {imagens.length > 0 ? (
          <img
            src={imagens[imgIndex]}
            alt={estilo.nome}
            loading="lazy"
            style={{
              width: '100%',
              height: 180,
              objectFit: 'cover',
              display: 'block',
              transition: 'opacity 0.25s',
            }}
          />
        ) : (
          <div style={{ width: '100%', height: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 38 }}>
            {estilo.emoji || '🌸'}
          </div>
        )}

        {totalImgs > 1 && (
          <>
            <button
              onClick={prevImg}
              aria-label="Foto anterior"
              style={{
                position: 'absolute', top: '50%', left: 8,
                transform: 'translateY(-50%)',
                width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(253,250,248,0.9)',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#7B1F3A',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={nextImg}
              aria-label="Próxima foto"
              style={{
                position: 'absolute', top: '50%', right: 8,
                transform: 'translateY(-50%)',
                width: 28, height: 28, borderRadius: '50%',
                background: 'rgba(253,250,248,0.9)',
                border: 'none', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#7B1F3A',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div style={{
              position: 'absolute', bottom: 8, left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex', gap: 5,
              padding: '4px 8px',
              background: 'rgba(26,13,18,0.55)',
              borderRadius: 20,
              backdropFilter: 'blur(4px)',
            }}>
              {imagens.map((_, i) => (
                <div key={i} style={{
                  width: i === imgIndex ? 14 : 5,
                  height: 5,
                  borderRadius: 3,
                  background: i === imgIndex ? '#FDFAF8' : 'rgba(253,250,248,0.5)',
                  transition: 'all 0.25s',
                }} />
              ))}
            </div>
          </>
        )}

        {selected && (
          <div style={{
            position: 'absolute', top: 10, right: 10,
            background: '#7B1F3A',
            color: '#FDFAF8',
            width: 28, height: 28,
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(123,31,58,0.4)',
            animation: 'popIn 0.3s ease',
          }}>
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.8">
              <polyline points="2,6 5,9 10,3" />
            </svg>
          </div>
        )}
      </div>

      <div style={{ padding: '16px 16px 14px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 18, fontWeight: 600,
          color: '#2A1A20',
          marginBottom: 4,
          lineHeight: 1.2,
        }}>
          {estilo.nome}
        </div>

        <div style={{
          fontSize: 12,
          color: '#6B4A55',
          lineHeight: 1.5,
          fontWeight: 400,
          marginBottom: 12,
        }}>
          {estilo.descricao}
        </div>

        {estilo.paleta && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <span style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A07A87', fontWeight: 600 }}>
              Paleta
            </span>
            <div style={{ display: 'flex', gap: 4 }}>
              {estilo.paleta.map((c, i) => (
                <div key={i} title={c} style={{
                  width: 14, height: 14, borderRadius: '50%',
                  background: c,
                  border: '1.5px solid #FDFAF8',
                  boxShadow: '0 0 0 1px rgba(123,31,58,0.15)',
                }} />
              ))}
            </div>
          </div>
        )}

        {(estilo.descricaoLonga || estilo.elementos) && (
          <button
            onClick={toggleExpand}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 11, color: '#7B1F3A', fontWeight: 500,
              padding: 0, marginBottom: 10,
              alignSelf: 'flex-start',
              display: 'inline-flex', alignItems: 'center', gap: 4,
              fontFamily: 'Jost, sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            {expanded ? 'Mostrar menos' : 'Saiba mais sobre o estilo'}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        )}

        {expanded && (
          <div style={{
            background: '#FAF5F2',
            borderRadius: 8,
            padding: '12px 14px',
            marginBottom: 12,
            animation: 'slideDown 0.25s ease',
          }}>
            {estilo.descricaoLonga && (
              <p style={{
                fontSize: 11.5,
                color: '#4A2A35',
                lineHeight: 1.6,
                margin: 0,
                marginBottom: estilo.elementos ? 10 : 0,
                fontWeight: 400,
              }}>
                {estilo.descricaoLonga}
              </p>
            )}
            {estilo.elementos && (
              <>
                <div style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A07A87', fontWeight: 600, marginBottom: 6 }}>
                  Elementos típicos
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {estilo.elementos.map((el, i) => (
                    <span key={i} style={{
                      fontSize: 10,
                      background: '#F5E8EC',
                      color: '#7B1F3A',
                      padding: '3px 8px',
                      borderRadius: 12,
                      fontWeight: 500,
                    }}>
                      {el}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        <div style={{
          marginTop: 'auto',
          paddingTop: 10,
          borderTop: '1px dashed #E8D5DA',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
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
          <span style={{
            fontSize: 12,
            color: selected ? '#7B1F3A' : '#A07A87',
            fontWeight: selected ? 500 : 400,
            transition: 'all 0.2s',
          }}>
            {selected ? 'Estilo selecionado' : 'Clique para selecionar'}
          </span>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 400px; }
        }
      `}</style>
    </div>
  );
}