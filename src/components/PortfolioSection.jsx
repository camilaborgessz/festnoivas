import React, { useEffect, useRef, useState } from 'react';
const eventos = [
  {
    tipo: 'foto',
    src: `${process.env.PUBLIC_URL}/imgs/branco4.jpeg`,
    titulo: 'Flores Brancas',
    tag: 'Clássico',
    radius: '160px 24px 160px 24px',
    size: 'large',
    fotos: [
      `${process.env.PUBLIC_URL}/imgs/branco4.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/branca2.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/branca3.jpeg`,
    ],
  },
  {
    tipo: 'foto',
    src: `${process.env.PUBLIC_URL}/imgs/rustico.jpeg`,
    titulo: 'Terracota',
    tag: 'Boho',
    radius: '24px 120px 24px 120px',
    size: 'small',
    fotos: [
      `${process.env.PUBLIC_URL}/imgs/rustico.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/rustico1.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/rustico2.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/rustico3.jpeg`,
    ],
  },
  {
    tipo: 'foto',
    src: `${process.env.PUBLIC_URL}/imgs/terracota.jpeg`,
    titulo: 'Coloridas',
    tag: 'Tropical',
    radius: '120px 24px 24px 24px',
    size: 'small',
    fotos: [
      `${process.env.PUBLIC_URL}/imgs/terracota.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/terracota1.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/terracota2.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/terracota3.jpeg`,
    ],
  },
  {
    tipo: 'foto',
    src: `${process.env.PUBLIC_URL}/imgs/azul.jpeg`,
    titulo: 'Tema Azul',
    tag: 'Romântico',
    radius: '24px 24px 160px 24px',
    size: 'medium',
    fotos: [
      `${process.env.PUBLIC_URL}/imgs/azul.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/azul1.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/azul2.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/branca1.jpeg`,
    ],
  },
  {
    tipo: 'foto',
    src: `${process.env.PUBLIC_URL}/imgs/livre3.jpeg`,
    titulo: 'Ao Ar Livre',
    tag: 'Moderno',
    radius: '24px 24px 24px 120px',
    size: 'medium',
    fotos: [
      `${process.env.PUBLIC_URL}/imgs/livre3.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/livre.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/livre1.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/livre2.jpeg`,
    ],
  },
  {
    tipo: 'foto',
    src: `${process.env.PUBLIC_URL}/imgs/espelho.jpeg`,
    titulo: 'Passarela Espelhada',
    tag: 'Glamour',
    radius: '24px 160px 24px 24px',
    size: 'large',
    fotos: [
      `${process.env.PUBLIC_URL}/imgs/espelho1.jpeg`,
      `${process.env.PUBLIC_URL}/imgs/espelho2.jpeg`,
    ],
  },
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
          <img src={evento.fotos[fotoAtiva] || evento.src} alt={evento.titulo} loading="lazy" style={{ width: '100%', borderRadius: 16, objectFit: 'cover', maxHeight: 460 }} />
          {evento.fotos.length > 1 && (
            <div style={{ display: 'flex', gap: 10, marginTop: 16, overflowX: 'auto', paddingBottom: 4 }}>
              {evento.fotos.map((f, i) => (
                <img key={i} src={f} alt="" loading="lazy" onClick={() => setFotoAtiva(i)} style={{ width: 90, height: 65, objectFit: 'cover', borderRadius: 10, cursor: 'pointer', flexShrink: 0, border: `2px solid ${i === fotoAtiva ? '#7B1F3A' : 'transparent'}`, opacity: i === fotoAtiva ? 1 : 0.6, transition: 'all 0.2s' }} />
              ))}
            </div>
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


  const sizes = {
    large: { gridColumn: 'span 7', aspectRatio: '4/3' },
    medium: { gridColumn: 'span 5', aspectRatio: '4/4' },
    small: { gridColumn: 'span 5', aspectRatio: '4/3.5' },
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
      <img src={ev.src} alt={ev.titulo}
        className="port-img"
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }} />


      <div className="port-overlay" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(26,13,18,0.92) 0%, rgba(26,13,18,0.55) 35%, rgba(26,13,18,0.15) 60%, transparent 100%)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: '36px 32px',
        color: '#FDFAF8',
      }}>
 
        <div style={{
          display: 'inline-flex',
          alignSelf: 'flex-start',
          background: 'rgba(253,250,248,0.18)',
          backdropFilter: 'blur(10px)',
          padding: '5px 12px',
          borderRadius: 20,
          fontSize: 10,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: 12,
          border: '1px solid rgba(253,250,248,0.25)',
        }}>
          {ev.tag}
        </div>

        <div style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(22px, 2.4vw, 32px)',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: 14,
          textShadow: '0 2px 12px rgba(0,0,0,0.5)',
        }}>
          {ev.titulo}
        </div>


        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          alignSelf: 'flex-start',
          gap: 10,
          fontSize: 12,
          fontWeight: 500,
          color: '#FDFAF8',
          padding: '8px 14px',
          background: 'rgba(123,31,58,0.85)',
          borderRadius: 50,
          backdropFilter: 'blur(6px)',
          letterSpacing: '0.05em',
        }}>
          {ev.fotos.length} fotos
          <span style={{ width: 1, height: 12, background: 'rgba(253,250,248,0.35)' }} />
          ver galeria
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
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
              — Coleções —
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 300, color: '#FDFAF8', lineHeight: 1.1, margin: 0,
              paddingBottom: 6,
            }}>
              cenários que já<br />
              <em style={{ fontStyle: 'italic', color: '#E8A0B4', display: 'inline-block', paddingBottom: 4 }}>
                eternizamos juntos
              </em>
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </a>
        </div>

   
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
          .port-overlay { padding: 24px 20px !important; }
        }
        @media (max-width: 500px) {
          .port-overlay { padding: 20px 16px !important; }
        }
      `}</style>
    </section>
  );
}