import React, { useEffect, useRef } from 'react';
const depoimentos = [
  {
    nome: 'Ana C.',
    data: 'Set 2020',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Sempre muito atenciosa e disposta a se adequar às vontades dos noivos, deixa tudo bem explicado do jeito que não fique nenhuma dúvida no ar. Não me arrependo de ter escolhido a sua empresa.',
    rotate: -2,
    real: true,
  },
  {
    nome: 'Tainá',
    data: 'Jul 2021',
    estilo: 'Decoração',
    nota: 4.4,
    texto: 'Ótimo trabalho, super recomendo. Trabalham com seriedade, compromisso e responsabilidade. A Fest Noivas entrega exatamente o que promete.',
    rotate: 1.5,
    real: true,
  },
  {
    nome: 'Val Saibel',
    data: 'Out 2026',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Eu confio em vocês, os melhores da cidade, parabéns Pedro e Janaína',
    rotate: -1,
    real: true,
  },
  {
    nome: 'Sara Matos',
    data: 'Jun 2026',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Os melhores, zero arrependimentos, contratei os melhores, impecáveis do início ao fim, eternamente grata.',
    rotate: 2,
    real: true,
  },
  {
    nome: 'Thainâ Bennion',
    data: 'Jan 2026',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Muito obrigada por fazerem esse dia tão lindo, foi espetacular a decoração de vocês, com toda certeza ficará marcado em nossas vidas!',
    rotate: -1.5,
    real: true,
  },
  {
    nome: 'Fernanda Melo',
    data: 'Nov 2025',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Só gratidão, vocês superaram 1000% das minhas expectativas, foi tudo mais do que perfeito',
    rotate: 1,
    real: true,
  },
];

function Estrelas({ nota = 5 }) {
  const cheias = Math.floor(nota);
  const meia = nota % 1 >= 0.4 && nota % 1 < 0.9;
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1, 2, 3, 4, 5].map(i => {
        const isFull = i <= cheias;
        const isHalf = !isFull && i === cheias + 1 && meia;
        return (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="#7B1F3A" />
                <stop offset="50%" stopColor="#E8D5DA" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill={isFull ? '#7B1F3A' : isHalf ? `url(#half-${i})` : '#E8D5DA'}
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef(null);
  const pauseRef = useRef(false);
  const animRef  = useRef(null);
  const posRef   = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function step() {
      if (!pauseRef.current) {
        posRef.current += 0.4;
        const halfW = track.scrollWidth / 2;
        if (posRef.current >= halfW) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    }
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const todos = [...depoimentos, ...depoimentos];

  return (
    <section id="depoimentos" style={{
      background: '#F5E8EC',
      padding: '120px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(123,31,58,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(123,31,58,0.06) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 32px', textAlign: 'center', marginBottom: 64, position: 'relative' }}>
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A07A87', marginBottom: 14 }}>
          — Depoimentos —
        </div>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: 300,
          color: '#2A1A20',
          lineHeight: 1.1,
          margin: 0,
          paddingBottom: 6,
        }}>
          casais reais,<br />
          <em style={{ fontStyle: 'italic', color: '#7B1F3A', display: 'inline-block', paddingBottom: 4 }}>
            histórias verdadeiras
          </em>
        </h2>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginTop: 28, padding: '8px 20px',
          background: '#fff', borderRadius: 50,
          boxShadow: '0 4px 16px rgba(123,31,58,0.08)',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          <Estrelas nota={4.7} />
          <span style={{ fontSize: 13, color: '#2A1A20', fontWeight: 500 }}>
            4.7 · Recomendado por 94% dos casais
          </span>
        </div>
      </div>

      <div
        onMouseEnter={() => pauseRef.current = true}
        onMouseLeave={() => pauseRef.current = false}
        style={{ overflow: 'hidden', cursor: 'grab', padding: '20px 0' }}
      >
        <div ref={trackRef} style={{ display: 'flex', gap: 28, width: 'max-content', padding: '20px 24px' }}>
          {todos.map((d, i) => (
            <div key={i} style={{
              width: 340,
              flexShrink: 0,
              background: '#FDFAF8',
              borderRadius: '24px 8px 24px 8px',
              padding: '32px 28px',
              boxShadow: '0 12px 36px rgba(123,31,58,0.12)',
              transform: `rotate(${d.rotate}deg)`,
              transition: 'transform 0.4s ease',
              position: 'relative',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'rotate(0deg) translateY(-8px)'}
              onMouseLeave={e => e.currentTarget.style.transform = `rotate(${d.rotate}deg)`}
            >
              <div style={{
                position: 'absolute', top: -10, left: 24,
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 100, color: '#7B1F3A',
                lineHeight: 1, opacity: 0.15,
                fontStyle: 'italic',
              }}>"</div>

              {d.real && (
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  background: '#7B1F3A',
                  color: '#FDFAF8',
                  fontSize: 9,
                  fontWeight: 600,
                  padding: '4px 10px',
                  borderRadius: 20,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 4,
                }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                  Verificado
                </div>
              )}

              <Estrelas nota={d.nota} />

              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 17, color: '#2A1A20',
                lineHeight: 1.55, fontWeight: 400,
                fontStyle: 'italic',
                margin: '20px 0 24px',
                position: 'relative',
              }}>
                {d.texto}
              </p>

              <div style={{
                paddingTop: 20,
                borderTop: '1px dashed #E8D5DA',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
              }}>
                <div>
                  <div style={{
                    fontFamily: 'Caveat, cursive',
                    fontSize: 24, color: '#7B1F3A',
                    lineHeight: 1.1,
                  }}>
                    {d.nome}
                  </div>
                  <div style={{ fontSize: 11, color: '#A07A87', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 2 }}>
                    {d.data}
                  </div>
                </div>
                <div style={{
                  background: '#F5E8EC',
                  color: '#7B1F3A',
                  fontSize: 10, fontWeight: 600,
                  padding: '5px 12px',
                  borderRadius: 20,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                }}>
                  {d.estilo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <a
          href="https://www.casamentos.com.br/decoracao-casamento/fest-noivas--e280307"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 12, color: '#7B1F3A', textDecoration: 'none',
            borderBottom: '1px dashed #7B1F3A', paddingBottom: 2,
            fontFamily: 'Jost, sans-serif',
          }}
        >
          Ver mais avaliações no Casamentos.com.br ↗
        </a>
      </div>
    </section>
  );
}