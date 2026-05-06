import React, { useEffect, useRef, useState } from 'react';

const eventos = [
  { tipo: 'foto',  src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85', titulo: 'Ana & Rafael',    tag: 'Clássico',    radius: '160px 24px 160px 24px', size: 'large',
    fotos: ['https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85','https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85','https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=85'] },
  { tipo: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cover: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=85', titulo: 'Júlia & Marcos', tag: 'Boho',    radius: '24px 120px 24px 120px', size: 'small', fotos: [] },
  { tipo: 'foto',  src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85', titulo: 'Camila & Pedro',  tag: 'Minimalista', radius: '120px 24px 24px 24px', size: 'small',
    fotos: ['https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85','https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85'] },
  { tipo: 'foto',  src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85', titulo: 'Beatriz & Lucas', tag: 'Rústico',     radius: '24px 24px 160px 24px', size: 'medium',
    fotos: ['https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85','https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=85'] },
  { tipo: 'video', src: 'https://www.youtube.com/embed/dQw4w9WgXcQ', cover: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=900&q=85', titulo: 'Sofia & Diego',  tag: 'Tropical', radius: '24px 24px 24px 120px', size: 'medium', fotos: [] },
  { tipo: 'foto',  src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=85', titulo: 'Maria & João',   tag: 'Boho',        radius: '24px 160px 24px 24px', size: 'large',
    fotos: ['https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=85','https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85','https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85','https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85'] },
];

function Modal({ evento, onClose }) {
  const [fotoAtiva, setFotoAtiva] = useState(0);
  if (!evento) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(26,13,18,0.92)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, animation: 'fadeIn 0.3s ease' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#FDFAF8', borderRadius: '32px 8px 32px 8px', overflow: 'hidden', maxWidth: 800, width: '100%', maxHeight: '90vh', animation: 'scaleIn 0.4s cubic-bezier(0.2, 0.8, 0.3, 1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 28px', borderBottom: '1px solid #E8D5DA' }}>
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 500, color: '#2A1A20', fontStyle: 'italic' }}>{evento.titulo}</div>
            <div style={{ fontSize: 11, color: '#A07A87', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 4 }}>{evento.tag}</div>
          </div>
          <button onClick={onClose} style={{ background: '#F5E8EC', border: 'none', cursor: 'pointer', width: 36, height: 36, borderRadius: '50%', color: '#7B1F3A', fontSize: 18 }}>✕</button>
        </div>
        <div style={{ padding: 24, overflowY: 'auto', maxHeight: 'calc(90vh - 90px)' }}>
          {evento.tipo === 'video' ? (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe src={evento.src} title={evento.titulo} frameBorder="0" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: 16 }} />
            </div>
          ) : (
            <>
              <img src={evento.fotos[fotoAtiva] || evento.src} alt={evento.titulo} style={{ width: '100%', borderRadius: 16, objectFit: 'cover', maxHeight: 460 }} />
              {evento.fotos.length > 1 && (
                <div style={{ display: 'flex', gap: 10, marginTop: 16, overflowX: 'auto', paddingBottom: 4 }}>
                  {evento.fotos.map((f, i) => (
                    <img key={i} src={f} alt="" onClick={() => setFotoAtiva(i)} style={{ width: 90, height: 65, objectFit: 'cover', borderRadius: 10, cursor: 'pointer', flexShrink: 0, border: `2px solid ${i === fotoAtiva ? '#7B1F3A' : 'transparent'}`, opacity: i === fotoAtiva ? 1 : 0.6, transition: 'all 0.2s' }} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}

function PortfolioCard({ ev, index, onClick }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Tamanhos para mosaico assimétrico
  const sizes = {
    large:  { gridColumn: 'span 7', aspectRatio: '4/3' },
    medium: { gridColumn: 'span 5', aspectRatio: '4/4' },
    small:  { gridColumn: 'span 5', aspectRatio: '4/3.5' },
  };
  const size = sizes[ev.size] || sizes.medium;

  return (
    <div ref={ref} onClick={onClick} className="port-card" style={{
      ...size,
      borderRadius: ev.radius,
      overflow: 'hidden',
      cursor: 'pointer',
      position: 'relative',
      boxShadow: '0 20px 50px rgba(123,31,58,0.12)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(50px)',
      transition: `opacity 0.9s cubic-bezier(0.2, 0.8, 0.3, 1) ${index * 0.1}s, transform 0.9s cubic-bezier(0.2, 0.8, 0.3, 1) ${index * 0.1}s, box-shadow 0.4s, scale 0.4s`,
    }}
      onMouseEnter={e => { e.currentTarget.style.scale = '1.02'; e.currentTarget.style.boxShadow = '0 30px 80px rgba(123,31,58,0.25)'; }}
      onMouseLeave={e => { e.currentTarget.style.scale = '1'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(123,31,58,0.12)'; }}
    >
      <img src={ev.tipo === 'video' ? ev.cover : ev.src} alt={ev.titulo}
        className="port-img"
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />

      {/* Overlay gradient com info */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(26,13,18,0.85) 0%, rgba(26,13,18,0.2) 50%, transparent 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 28,
        color: '#FDFAF8',
      }}>
        <div style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: 0.85, marginBottom: 6 }}>
          {ev.tag}
        </div>
        <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1 }}>
          {ev.titulo}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, fontSize: 12, opacity: 0.9 }}>
          {ev.tipo === 'video' ? (
            <><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Ver vídeo</>
          ) : (
            <>{ev.fotos.length} fotos · <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></>
          )}
        </div>
      </div>

      {/* Badge de vídeo */}
      {ev.tipo === 'video' && (
        <div style={{
          position: 'absolute', top: 20, right: 20,
          width: 56, height: 56, borderRadius: '50%',
          background: 'rgba(253,250,248,0.95)',
          backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#7B1F3A"><path d="M8 5v14l11-7z"/></svg>
        </div>
      )}
    </div>
  );
}

export default function PortfolioSection() {
  const [modalEvento, setModalEvento] = useState(null);

  return (
    <section id="portfolio" style={{
      background: '#1A0D12',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorativo de fundo: palavra gigante */}
      <div aria-hidden style={{
        position: 'absolute',
        top: 60,
        left: '-2%',
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontSize: 'clamp(140px, 18vw, 280px)',
        fontWeight: 300,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(245,232,236,0.08)',
        lineHeight: 0.9,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
      }}>
        portfolio · portfolio
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: 64,
          flexWrap: 'wrap',
          gap: 24,
        }} className="port-header">
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#E8A0B4', marginBottom: 14 }}>
              — Portfólio —
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontWeight: 300, color: '#FDFAF8', lineHeight: 1.05, margin: 0,
            }}>
              eventos que já<br />
              <em style={{ fontStyle: 'italic', color: '#E8A0B4' }}>eternizamos juntos</em>
            </h2>
          </div>
          <a href="https://www.instagram.com/festnoivass" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            color: '#FDFAF8', textDecoration: 'none',
            border: '1px solid rgba(253,250,248,0.3)',
            padding: '14px 24px', borderRadius: 50,
            fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#7B1F3A'; e.currentTarget.style.borderColor = '#7B1F3A'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(253,250,248,0.3)'; }}
          >
            @festnoivass
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>

        {/* Mosaico assimétrico 12 colunas */}
        <div className="port-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24,
        }}>
          {eventos.map((ev, i) => (
            <PortfolioCard key={i} ev={ev} index={i} onClick={() => setModalEvento(ev)} />
          ))}
        </div>
      </div>

      <Modal evento={modalEvento} onClose={() => setModalEvento(null)} />

      <style>{`
        .port-card:hover .port-img { transform: scale(1.08); }
        @media (max-width: 900px) {
          .port-grid > * { grid-column: span 12 !important; aspect-ratio: 4/3 !important; }
        }
      `}</style>
    </section>
  );
}