import React, { useEffect, useRef } from 'react';

const depoimentos = [
  { nome: 'Ana & Rafael',    data: 'Mar 2025', estilo: 'Clássico',    nota: 5, texto: 'A Fest Noivas transformou completamente nosso casamento! Cada detalhe foi pensado com tanto carinho. A decoração ficou deslumbrante.', rotate: -2 },
  { nome: 'Júlia & Marcos',  data: 'Out 2024', estilo: 'Boho',        nota: 5, texto: 'Desde o primeiro contato, a equipe nos fez sentir especiais. A decoração boho ficou simplesmente incrível e os fotógrafos capturaram tudo com sensibilidade.', rotate: 1.5 },
  { nome: 'Camila & Pedro',  data: 'Jun 2024', estilo: 'Minimalista', nota: 5, texto: 'Profissionalismo e criatividade em cada etapa. O cerimonial foi conduzido com muita emoção. Foi o dia mais lindo das nossas vidas.', rotate: -1 },
  { nome: 'Beatriz & Lucas', data: 'Fev 2025', estilo: 'Rústico',     nota: 5, texto: 'Contratamos o pacote completo e foi a melhor decisão. O buffet incrível, decoração rústica ainda mais bonita do que imaginávamos.', rotate: 2 },
  { nome: 'Sofia & Diego',   data: 'Nov 2024', estilo: 'Tropical',    nota: 5, texto: 'Nossa cerimônia tropical foi um sonho. As flores, as cores, a música — tudo perfeito. Equipe simplesmente incrível do início ao fim.', rotate: -1.5 },
  { nome: 'Laura & Thiago',  data: 'Ago 2024', estilo: 'Clássico',    nota: 5, texto: 'Nunca imaginei que meu casamento pudesse ser tão perfeito. A assessoria cuida de absolutamente tudo. Conseguimos aproveitar cada segundo.', rotate: 1 },
];

function Estrelas() {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#7B1F3A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
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
      {/* Padrão decorativo de fundo */}
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
          fontSize: 'clamp(36px, 5vw, 64px)',
          fontWeight: 300, color: '#2A1A20', lineHeight: 1.05, margin: 0,
        }}>
          casais reais,<br />
          <em style={{ fontStyle: 'italic', color: '#7B1F3A' }}>histórias verdadeiras</em>
        </h2>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginTop: 28, padding: '8px 20px',
          background: '#fff', borderRadius: 50,
          boxShadow: '0 4px 16px rgba(123,31,58,0.08)',
        }}>
          <Estrelas />
          <span style={{ fontSize: 13, color: '#2A1A20', fontWeight: 500 }}>5.0 · 200+ avaliações</span>
        </div>
      </div>

      {/* Carrossel — bilhetes estilo postal com rotação */}
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
              {/* Aspas decorativas */}
              <div style={{
                position: 'absolute', top: -10, left: 24,
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 100, color: '#7B1F3A',
                lineHeight: 1, opacity: 0.15,
                fontStyle: 'italic',
              }}>"</div>

              <Estrelas />

              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 18, color: '#2A1A20',
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
                }}>
                  {d.estilo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p style={{ textAlign: 'center', marginTop: 24, fontSize: 12, color: '#A07A87', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        Passe o mouse para pausar
      </p>
    </section>
  );
}
