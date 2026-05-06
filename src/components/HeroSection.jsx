import React, { useEffect, useState } from 'react';

/* Polaroids — fotos do Unsplash com leve rotação e flutuação */
const polaroids = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80', label: 'Ana & Rafael · 2025', rotate: -8, top: '14%',  left: '4%',  delay: 0.2, float: 0 },
  { src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=500&q=80', label: 'Júlia & Marcos',     rotate:  6, top: '8%',   right: '5%', delay: 0.5, float: 1 },
  { src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=500&q=80', label: 'Camila & Pedro',     rotate: -5, bottom: '14%', left: '7%', delay: 0.8, float: 2 },
];

export default function HeroSection({ onStartForm }) {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      overflow: 'hidden',
      background: '#1A0D12',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* IMAGEM DE FUNDO com parallax + overlay vinho */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        transition: 'transform 0.05s linear',
        filter: 'brightness(0.55) saturate(0.8)',
      }} />

      {/* Gradiente vinho + grão */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(26,13,18,0.5) 0%, rgba(123,31,58,0.35) 40%, rgba(26,13,18,0.85) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Textura de grão (SVG noise) */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22/><feColorMatrix values=%220 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/></svg>")',
        opacity: 0.5,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />

      {/* POLAROIDS flutuantes */}
      {polaroids.map((p, i) => (
        <div key={i} className={`polaroid polaroid-${p.float}`} style={{
          position: 'absolute',
          top: p.top, left: p.left, right: p.right, bottom: p.bottom,
          width: 180, padding: 10, paddingBottom: 32,
          background: '#FDFAF8',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 8px 18px rgba(0,0,0,0.35)',
          transform: `rotate(${p.rotate}deg) translateY(${mounted ? 0 : 60}px)`,
          opacity: mounted ? 1 : 0,
          transition: `opacity 1s ease ${p.delay}s, transform 1s cubic-bezier(0.2, 0.8, 0.3, 1) ${p.delay}s`,
          zIndex: 3,
        }}>
          <img src={p.src} alt="" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
          <div style={{
            position: 'absolute', bottom: 8, left: 0, right: 0,
            textAlign: 'center',
            fontFamily: 'Caveat, cursive',
            fontSize: 16,
            color: '#7B1F3A',
          }}>
            {p.label}
          </div>
        </div>
      ))}

      {/* CONTEÚDO CENTRAL */}
      <div style={{
        position: 'relative',
        zIndex: 5,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: 1200,
      }}>
        {/* Eyebrow */}
        <div className="reveal-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          fontSize: 11, fontWeight: 500, letterSpacing: '0.35em',
          textTransform: 'uppercase', color: '#F5E8EC',
          marginBottom: 28,
          animationDelay: '0.1s',
        }}>
          <span style={{ width: 24, height: 1, background: '#F5E8EC', opacity: 0.6 }} />
          Fest Noivas · Desde 2017
          <span style={{ width: 24, height: 1, background: '#F5E8EC', opacity: 0.6 }} />
        </div>

        {/* TÍTULO STATEMENT GIGANTE */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          color: '#FDFAF8',
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          <span className="reveal-up" style={{
            display: 'block', fontSize: 'clamp(40px, 7vw, 90px)', fontWeight: 300,
            animationDelay: '0.3s',
          }}>
            transformando o
          </span>
          <span className="reveal-up word-massive" style={{
            display: 'block',
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(80px, 18vw, 240px)',
            lineHeight: 0.85,
            color: 'transparent',
            WebkitTextStroke: '1.5px #F5E8EC',
            margin: '8px 0',
            animationDelay: '0.5s',
          }}>
            "sim"
          </span>
          <span className="reveal-up" style={{
            display: 'block', fontSize: 'clamp(28px, 5vw, 64px)', fontWeight: 300,
            fontStyle: 'italic',
            color: '#E8A0B4',
            animationDelay: '0.7s',
          }}>
            em momentos eternos
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="reveal-up" style={{
          fontSize: 16,
          color: '#F5E8EC',
          opacity: 0.85,
          maxWidth: 520,
          margin: '40px auto 0',
          lineHeight: 1.8,
          fontWeight: 300,
          animationDelay: '0.9s',
        }}>
          Cuidamos de cada detalhe — do espaço à decoração, do buffet à cerimônia — para que você viva o seu grande dia com leveza e emoção.
        </p>

        {/* CTAs */}
        <div className="reveal-up" style={{
          display: 'flex', gap: 16, justifyContent: 'center',
          flexWrap: 'wrap', marginTop: 44,
          animationDelay: '1.1s',
        }}>
          <button onClick={onStartForm} style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: '#FDFAF8', color: '#1A0D12', border: 'none',
            padding: '18px 36px', borderRadius: 50, fontSize: 14,
            fontFamily: 'Jost, sans-serif', fontWeight: 500, cursor: 'pointer',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#7B1F3A'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#FDFAF8'; e.currentTarget.style.color = '#1A0D12'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Planejar meu casamento
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>

          <a href="https://www.instagram.com/festnoivass" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', color: '#FDFAF8',
            border: '1px solid rgba(253,250,248,0.5)',
            padding: '18px 32px', borderRadius: 50, fontSize: 14,
            fontFamily: 'Jost, sans-serif', fontWeight: 500, textDecoration: 'none',
            letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(253,250,248,0.1)'; e.currentTarget.style.borderColor = '#FDFAF8'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(253,250,248,0.5)'; }}
          >
            Instagram
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        zIndex: 5,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        color: '#F5E8EC', opacity: 0.7,
      }}>
        <div style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Scroll</div>
        <div style={{ width: 1, height: 40, background: '#F5E8EC', position: 'relative', overflow: 'hidden' }}>
          <div className="scroll-line" />
        </div>
      </div>

      {/* Estilos globais e animações */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap');

        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          animation: revealUp 1.1s cubic-bezier(0.2, 0.8, 0.3, 1) forwards;
        }
        @keyframes revealUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .word-massive {
          background: linear-gradient(180deg, rgba(245,232,236,0.0) 0%, rgba(245,232,236,1) 100%);
          -webkit-background-clip: text;
        }

        .polaroid-0 { animation: float0 7s ease-in-out infinite; animation-delay: 1.5s; }
        .polaroid-1 { animation: float1 8s ease-in-out infinite; animation-delay: 2s; }
        .polaroid-2 { animation: float2 9s ease-in-out infinite; animation-delay: 2.5s; }

        @keyframes float0 { 0%,100% { translate: 0 0; } 50% { translate: 0 -14px; } }
        @keyframes float1 { 0%,100% { translate: 0 0; } 50% { translate: 0 -18px; } }
        @keyframes float2 { 0%,100% { translate: 0 0; } 50% { translate: 0 -12px; } }

        .scroll-line {
          position: absolute; top: -100%; left: 0; width: 100%; height: 100%;
          background: linear-gradient(to bottom, transparent, #fff);
          animation: scrollDown 2s ease-in-out infinite;
        }
        @keyframes scrollDown {
          0% { top: -100%; } 100% { top: 100%; }
        }

        @media (max-width: 900px) {
          .polaroid { display: none; }
        }
      `}</style>
    </section>
  );
}