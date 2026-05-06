import React, { useEffect, useRef, useState } from 'react';

const numeros = [
  { valor: '200+', label: 'Casamentos realizados' },
  { valor: '8',    label: 'Anos de experiência'   },
  { valor: '98%',  label: 'Clientes satisfeitos'  },
  { valor: '5★',   label: 'Avaliação média'        },
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
      {/* Número gigante decorativo no fundo */}
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
        08
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
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
            mais que uma empresa,<br />
            <em style={{ fontStyle: 'italic', color: '#7B1F3A', fontWeight: 400 }}>guardiões</em> de memórias
          </h2>
        </div>

        {/* Layout editorial assimétrico */}
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 80,
          alignItems: 'start',
        }}>
          {/* Coluna esquerda: imagem grande com cantos arredondados estilo AE */}
          <div style={{
            position: 'relative',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-50px)',
            transition: 'all 1s cubic-bezier(0.2, 0.8, 0.3, 1) 0.2s',
          }}>
            <div style={{
              borderRadius: '180px 24px 180px 24px',
              overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: '0 30px 60px rgba(123,31,58,0.18)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=85"
                alt="Casal sorrindo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Selo flutuante */}
            <div style={{
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
              <div style={{ fontSize: 44, fontWeight: 500, lineHeight: 1, fontStyle: 'italic' }}>2017</div>
            </div>
          </div>

          {/* Coluna direita: texto */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(50px)',
            transition: 'all 1s cubic-bezier(0.2, 0.8, 0.3, 1) 0.4s',
            paddingTop: 40,
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 24, fontStyle: 'italic',
              color: '#7B1F3A', lineHeight: 1.4,
              marginBottom: 28,
              fontWeight: 400,
            }}>
              "Cada casamento é uma história única — e nós existimos para fazê-la inesquecível."
            </p>
            <p style={{ fontSize: 15, color: '#6B4A55', lineHeight: 1.9, fontWeight: 300, marginBottom: 18 }}>
              A Fest Noivas nasceu da paixão por transformar sonhos em realidade. Há mais de 8 anos, cuidamos de cada detalhe — do espaço à decoração, do buffet à cerimônia — para que o casal viva cada momento com leveza, presença e emoção.
            </p>
            <p style={{ fontSize: 15, color: '#6B4A55', lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
              Nossa equipe multidisciplinar une arquitetos de eventos, floristas, chefs e cerimonialistas com um único objetivo: que você não precise se preocupar com nada no seu grande dia.
            </p>

            {/* Assinatura tipo manuscrita */}
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

        {/* Números — em linha embaixo, estilo editorial */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          marginTop: 100,
          paddingTop: 48,
          borderTop: '1px solid #E8D5DA',
        }} className="about-stats">
          {numeros.map((n, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '0 16px',
              borderRight: i < 3 ? '1px solid #E8D5DA' : 'none',
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
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .about-stats { grid-template-columns: repeat(2, 1fr) !important; gap: 32px 0 !important; }
          .about-stats > div:nth-child(2) { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
