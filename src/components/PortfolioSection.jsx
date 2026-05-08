import React, { useEffect, useRef, useState } from 'react';

const eventos = [
  {
    src: `${process.env.PUBLIC_URL}/imgs/branco4.jpeg`,
    titulo: 'Flores Brancas',
    tag: 'Clássico',
    radius: '160px 24px 160px 24px',
    size: 'large',
  },
  {
    src: `${process.env.PUBLIC_URL}/imgs/rustico3.jpeg`,
    titulo: 'Rústico',
    tag: 'Charme campestre',
    radius: '24px 120px 24px 120px',
    size: 'small',
  },
  {
    src: `${process.env.PUBLIC_URL}/imgs/terracota.jpeg`,
    titulo: 'Coloridas',
    tag: 'Tropical',
    radius: '120px 24px 24px 24px',
    size: 'small',
  },
  {
    src: `${process.env.PUBLIC_URL}/imgs/azul.jpeg`,
    titulo: 'Tema Azul',
    tag: 'Romântico',
    radius: '24px 24px 160px 24px',
    size: 'medium',
  },
  {
    src: `${process.env.PUBLIC_URL}/imgs/livre3.jpeg`,
    titulo: 'Ao Ar Livre',
    tag: 'Moderno',
    radius: '24px 24px 24px 120px',
    size: 'medium',
  },
  {
    src: `${process.env.PUBLIC_URL}/imgs/espelho.jpeg`,
    titulo: 'Passarela Espelhada',
    tag: 'Glamour',
    radius: '24px 160px 24px 24px',
    size: 'large',
  },
];

function PortfolioCard({ ev, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const sizes = {
    large:  { gridColumn: 'span 7', aspectRatio: '4/3' },
    medium: { gridColumn: 'span 5', aspectRatio: '4/4' },
    small:  { gridColumn: 'span 5', aspectRatio: '4/3.5' },
  };
  const size = sizes[ev.size] || sizes.medium;

  return (
    <div ref={ref} className="port-card" style={{
      ...size,
      borderRadius: ev.radius,
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 20px 50px rgba(123,31,58,0.12)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(50px)',
      transition: `opacity 0.9s cubic-bezier(0.2, 0.8, 0.3, 1) ${index * 0.1}s, transform 0.9s cubic-bezier(0.2, 0.8, 0.3, 1) ${index * 0.1}s, box-shadow 0.4s, scale 0.4s`,
    }}
      onMouseEnter={e => { e.currentTarget.style.scale = '1.02'; e.currentTarget.style.boxShadow = '0 30px 80px rgba(123,31,58,0.25)'; }}
      onMouseLeave={e => { e.currentTarget.style.scale = '1'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(123,31,58,0.12)'; }}
    >
      <img
        src={ev.src}
        alt={ev.titulo}
        className="port-img"
        loading="lazy"
        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
      />

      <div className="port-overlay" style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(26,13,18,0.88) 0%, rgba(26,13,18,0.45) 35%, rgba(26,13,18,0.1) 60%, transparent 100%)',
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
          textShadow: '0 2px 12px rgba(0,0,0,0.5)',
        }}>
          {ev.titulo}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
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
            ver mais no @festnoivass
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10" /></svg>
          </a>
        </div>

        <div className="port-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 24,
        }}>
          {eventos.map((ev, i) => (
            <PortfolioCard key={i} ev={ev} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .port-card:hover .port-img { transform: scale(1.08); }
        @media (max-width: 900px) {
          .port-grid > * { grid-column: span 12 !important; aspect-ratio: 4/3 !important; border-radius: 24px !important; }
          .port-overlay { padding: 24px 20px !important; }
        }
        @media (max-width: 500px) {
          .port-overlay { padding: 20px 16px !important; }
        }
      `}</style>
    </section>
  );
}