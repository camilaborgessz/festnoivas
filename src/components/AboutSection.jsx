import React, { useEffect, useRef, useState } from 'react';

const numeros = [
  { valor: '500+', label: 'Casamentos realizados' },
  { valor: '20', label: 'Anos de experiência' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="sobre" ref={ref} style={{
      background: '#FDFAF8',
      padding: '120px 24px',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div aria-hidden style={{
        position: 'absolute',
        top: '-40px',
        right: '-30px',
        fontFamily: 'Cormorant Garamond, serif',
        fontStyle: 'italic',
        fontSize: 'clamp(280px, 40vw, 520px)',
        fontWeight: 300,
        color: '#F0DDE3',
        lineHeight: 0.8,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: visible ? 1 : 0,
        transition: 'opacity 1.5s ease',
      }}>
        20
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 80,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s cubic-bezier(0.2, 0.8, 0.3, 1)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A07A87', marginBottom: 16 }}>
            — Quem somos —
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 300,
            color: '#2A1A20',
            lineHeight: 1.05,
            margin: 0,
          }}>
            há 20 anos criando<br />
            <em style={{ fontStyle: 'italic', color: '#7B1F3A', fontWeight: 400 }}>cenários inesquecíveis</em>
          </h2>
        </div>

        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>
          <div className="about-image-wrap" style={{
            position: 'relative',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 1s cubic-bezier(0.2, 0.8, 0.3, 1) 0.2s',
          }}>
            <div style={{
              borderRadius: '24px 130px 24px 130px',
              overflow: 'hidden',
              aspectRatio: '4/3',
              boxShadow: '0 30px 60px rgba(123,31,58,0.18)',
            }}>
              <img
                src={`${process.env.PUBLIC_URL}/imgs/equipe.jpeg`}
                alt="Equipe Fest Noivas"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>

            <div className="about-badge" style={{
              position: 'absolute',
              bottom: -30,
              right: -20,
              width: 130, height: 130,
              borderRadius: '50%',
              background: '#7B1F3A',
              color: '#FDFAF8',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Cormorant Garamond, serif',
              boxShadow: '0 12px 32px rgba(123,31,58,0.4)',
              animation: visible ? 'spin 30s linear infinite' : 'none',
            }}>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8 }}>desde</div>
              <div style={{ fontSize: 44, fontWeight: 500, lineHeight: 1, fontStyle: 'italic' }}>2005</div>
            </div>
          </div>

          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 1s cubic-bezier(0.2, 0.8, 0.3, 1) 0.4s',
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 24, fontStyle: 'italic',
              color: '#7B1F3A', lineHeight: 1.4,
              marginTop: 0,
              marginBottom: 28,
              fontWeight: 400,
            }}>
              "A decoração do casamento deve representar a personalidade e os gostos do casal e criar uma atmosfera única para o grande dia."
            </p>
            <p style={{ fontSize: 15, color: '#6B4A55', lineHeight: 1.9, fontWeight: 300, marginBottom: 18 }}>
              A Fest Noivas está há mais de 20 anos no mercado de decoração para casamentos em Porto Velho, criando cenários inspiradores, exclusivos e inesquecíveis para casais que querem viver o seu grande dia em um ambiente cuidadosamente planejado nos mínimos detalhes.
            </p>
            <p style={{ fontSize: 15, color: '#6B4A55', lineHeight: 1.9, fontWeight: 300, marginBottom: 18 }}>
              Nosso atendimento é reconhecido pelos noivos pela sensibilidade em compreender cada sonho, inspiração e desejo do casal, transformando suas ideias em um projeto exclusivo, elegante e alinhado às suas expectativas.
            </p>
            <p style={{ fontSize: 15, color: '#6B4A55', lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
              Um grande dia envolve, em média, mais de<strong style={{ color: '#7B1F3A', fontWeight: 500 }}> 40 profissionais altamente capacitados</strong> dedicados a entregar uma experiência inesquecível. E o nosso compromisso contribuir com leveza e serenidade, para que vocês vivam o “sim” mais importante de suas vidas com tranquilidade e emoção.
            </p>

            <div style={{
              fontFamily: 'Caveat, cursive',
              fontSize: 32,
              color: '#7B1F3A',
              transform: 'rotate(-3deg)',
              display: 'inline-block',
              marginTop: 8,
            }}>
              Equipe Fest Noivas
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 280px))',
          gap: 0,
          marginTop: 100,
          paddingTop: 48,
          borderTop: '1px solid #E8D5DA',
          justifyContent: 'center',
          maxWidth: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        }} className="about-stats">
          {numeros.map((n, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '0 16px',
              borderRight: i < numeros.length - 1 ? '1px solid #E8D5DA' : 'none',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.7s cubic-bezier(0.2, 0.8, 0.3, 1) ${0.6 + i * 0.12}s`,
            }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(40px, 5vw, 64px)',
                fontWeight: 400,
                color: '#7B1F3A',
                lineHeight: 1,
                fontStyle: 'italic',
              }}>
                {n.valor}
              </div>
              <div style={{
                fontSize: 11,
                color: '#6B4A55',
                marginTop: 12,
                fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                {n.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 64px !important;
            align-items: stretch !important;
          }
          .about-image-wrap {
            max-width: 520px;
            margin: 0 auto;
            width: 100%;
          }
        }
        @media (max-width: 500px) {
          .about-badge {
            width: 100px !important;
            height: 100px !important;
            bottom: -20px !important;
            right: -10px !important;
          }
          .about-badge > div:nth-child(2) {
            font-size: 34px !important;
          }
          .about-stats {
            grid-template-columns: 1fr !important;
            max-width: 320px !important;
          }
          .about-stats > div {
            border-right: none !important;
            padding: 20px 0 !important;
            border-bottom: 1px solid #E8D5DA;
          }
          .about-stats > div:last-child { border-bottom: none; }
        }
      `}</style>
    </section>
  );
}