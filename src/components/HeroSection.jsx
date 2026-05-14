import React, { useEffect, useState } from 'react';
const base = process.env.PUBLIC_URL || '';

const polaroids = [
  { src: `${base}/imgs/polaroid1.jpeg`, alt: 'Decoração de casamento Fest Noivas', rotate: -8, top: '18%', left: '2%', delay: 0.2, float: 0 },
  { src: `${base}/imgs/polaroid2.jpeg`, alt: 'Cenário de casamento em Porto Velho', rotate: 6, top: '18%', right: '2%', delay: 0.5, float: 1 },
  { src: `${base}/imgs/polaroid3.jpeg`, alt: 'Festa de casamento decorada pela Fest Noivas', rotate: -5, bottom: '12%', left: '3%', delay: 0.8, float: 2 },
  { src: `${base}/imgs/polaroid4.jpeg`, alt: 'Decoração floral para casamento', rotate: 7, bottom: '12%', right: '3%', delay: 1.0, float: 0 },
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
      paddingTop: 100,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${base}/imgs/fundo.jpeg?v=2)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transform: `translateY(${scrollY * 0.3}px) scale(1.1)`,
        transition: 'transform 0.05s linear',
        filter: 'brightness(0.55) saturate(0.8)',
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(26,13,18,0.5) 0%, rgba(123,31,58,0.35) 40%, rgba(26,13,18,0.85) 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence baseFrequency=%220.9%22/><feColorMatrix values=%220 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0%22/></filter><rect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22/></svg>")',
        opacity: 0.5,
        mixBlendMode: 'overlay',
        pointerEvents: 'none',
      }} />

      {/* Polaroids posicionadas (apenas desktop/tablet) */}
      {polaroids.map((p, i) => (
        <div key={i} className={`polaroid-desktop polaroid-${p.float}`} style={{
          position: 'absolute',
          top: p.top, left: p.left, right: p.right, bottom: p.bottom,
          width: 160, padding: 10, paddingBottom: 32,
          background: '#FDFAF8',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 8px 18px rgba(0,0,0,0.35)',
          transform: `rotate(${p.rotate}deg) translateY(${mounted ? 0 : 60}px)`,
          opacity: mounted ? 1 : 0,
          transition: `opacity 1s ease ${p.delay}s, transform 1s cubic-bezier(0.2, 0.8, 0.3, 1) ${p.delay}s`,
          zIndex: 3,
        }}>
          <img src={p.src} alt={p.alt} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
        </div>
      ))}

      <div className="hero-content" style={{
        position: 'relative',
        zIndex: 5,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: 1200,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <div className="reveal-up hero-logo" style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: 32,
          animationDelay: '0.05s',
        }}>
          <img
            src={`${base}/logoFestnoivas.svg`}
            alt="Fest Noivas"
            style={{
              height: 100,
              width: 'auto',
              filter: 'brightness(0) invert(1) drop-shadow(0 4px 18px rgba(0,0,0,0.4))',
              opacity: 0.95,
            }}
          />
        </div>

        <div className="reveal-up" style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          fontSize: 11, fontWeight: 500, letterSpacing: '0.35em',
          textTransform: 'uppercase', color: '#F5E8EC',
          marginBottom: 28,
          animationDelay: '0.1s',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <span style={{ width: 24, height: 1, background: '#F5E8EC', opacity: 0.6 }} />
          Porto Velho · 20 anos
          <span style={{ width: 24, height: 1, background: '#F5E8EC', opacity: 0.6 }} />
        </div>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontWeight: 300,
          color: '#FDFAF8',
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          <span className="reveal-up" style={{
            display: 'block', fontSize: 'clamp(34px, 6.5vw, 84px)', fontWeight: 300,
            animationDelay: '0.3s',
          }}>
            cenários que contam
          </span>
          <span className="reveal-up word-massive" style={{
            display: 'block',
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(72px, 17vw, 230px)',
            lineHeight: 0.85,
            color: 'transparent',
            WebkitTextStroke: '1.5px #F5E8EC',
            margin: '8px 0',
            animationDelay: '0.5s',
          }}>
            Histórias
          </span>
          <span className="reveal-up" style={{
            display: 'block', fontSize: 'clamp(24px, 4.5vw, 58px)', fontWeight: 300,
            fontStyle: 'italic',
            color: '#E8A0B4',
            animationDelay: '0.7s',
          }}>
            de amor
          </span>
        </h1>

        <p className="reveal-up" style={{
          fontSize: 16,
          color: '#F5E8EC',
          opacity: 0.85,
          maxWidth: 560,
          margin: '40px auto 0',
          lineHeight: 1.8,
          fontWeight: 300,
          animationDelay: '0.9s',
        }}>
          Há 20 anos criando cenários inspiradores, exclusivos e inesquecíveis em Porto Velho, porque cada decoração deve representar a personalidade do casal e a atmosfera única do grande dia.
        </p>

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
            Planejar casamento
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
            @festnoivass
          </a>
        </div>

        {/* Faixa de polaroids — mobile apenas (em fluxo, abaixo dos botões) */}
        <div className="polaroids-mobile" style={{
          marginTop: 36,
          display: 'none',
          gap: 16,
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'nowrap',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1s ease 1.3s, transform 1s cubic-bezier(0.2, 0.8, 0.3, 1) 1.3s',
        }}>
          {polaroids.map((p, i) => (
            <div key={`m-${i}`} style={{
              flex: '0 0 auto',
              width: 86,
              padding: 6,
              paddingBottom: 16,
              background: '#FDFAF8',
              boxShadow: '0 14px 28px rgba(0,0,0,0.45), 0 4px 8px rgba(0,0,0,0.3)',
              transform: `rotate(${p.rotate * 0.6}deg)`,
            }}>
              <img src={p.src} alt={p.alt} style={{ width: '100%', height: 88, objectFit: 'cover', display: 'block' }} />
            </div>
          ))}
        </div>
      </div>


      <div className="scroll-indicator" style={{
        position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
        zIndex: 5,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
        color: '#F5E8EC', opacity: 0.7,
      }}>
      </div>

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

        /* Notebooks menores: encolhe polaroides para não invadir texto */
        @media (max-width: 1100px) {
          .polaroid-desktop {
            width: 130px !important;
          }
          .polaroid-desktop img {
            height: 140px !important;
          }
        }

        /* Tablet: polaroides ainda menores nos cantos */
        @media (max-width: 900px) {
          .polaroid-desktop {
            width: 110px !important;
            padding: 6px !important;
            padding-bottom: 22px !important;
          }
          .polaroid-desktop img {
            height: 110px !important;
          }
        }

        /* Mobile: esconde as absolutas, mostra a faixa horizontal abaixo */
        @media (max-width: 700px) {
          .polaroid-desktop { display: none !important; }
          .polaroids-mobile { display: flex !important; }
          .hero-logo img { height: 64px !important; }
          .scroll-indicator { display: none !important; }
          section { padding-bottom: 80px !important; }
        }

        @media (max-width: 768px) {
          .scroll-indicator { display: none !important; }
        }
        @media (max-width: 600px) {
          section h1 .reveal-up { letter-spacing: -0.01em; }
        }
      `}</style>
    </section>
  );
}