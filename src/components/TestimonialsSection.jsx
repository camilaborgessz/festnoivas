import React, { useEffect, useRef, useState } from 'react';

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
    nota: 5.0,
    texto: 'Ótimo trabalho, super recomendo. Trabalham com seriedade, compromisso e responsabilidade. A Fest Noivas entrega exatamente o que promete.',
    rotate: 1.5,
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
    nome: 'Fernanda',
    data: 'Nov 2025',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'A Décor mais linda que Rio Branco já viu! Vocês arrasaram, ficou tudo perfeito, uma Décor planejada e executada com menos de 1 mês! Superou nossas expectativas e surpreendeu todos os nossos convidados! Indico de olhos fechados!',
    rotate: 1,
    real: true,
  },
  {
    nome: 'Gabriella Palitot',
    data: 'Nov 2025',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'A festa mais linda que a @festnoivass já fez!! Sou muito fã do trabalho de vocês. Tudo ficou impecável, do jeito que eu queria. Que venha muitos e muitos anos de parceria e festas, estou prontaaa!',
    rotate: 1,
    real: true,
  },
  {
    nome: 'Carolaine Lemos',
    data: 'Nov 2026',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Que lindoooo Leo, Desde o dia que nos encontramos primeira vez já te escolhi!!! Obrigada Leo, Jana e Pedro e toda equipe Fest Noivas por transformar nossas expectativas em realidade! Gratidão por todo esse tempo que sonhamos juntos, ficou maravilhosooo.',
    rotate: 1,
    real: true,
  },
  {
    nome: 'Thaina',
    data: 'Nov 2026',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Muito obrigada por fazerem esse dia tão lindo, foi espetacular a decoração de vocês, com toda certeza ficará marcado em nossas vidas!',
    rotate: 1,
    real: true,
  },
  {
    nome: 'Orlando',
    data: 'Jan 2025',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Tudo muito perfeito!!! Vcs entregaram muito além do que eu sonhei e pedi a Deus. Muita, muita gratidão por fazerem parte da realização do nosso sonho.',
    rotate: 1,
    real: true,
  },
  {
    nome: 'Bremer',
    data: 'Jan 2025',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Pedro e Janayna, gratidão!!! Essa é a palavra que define o que estamos sentindo. Estou com o coração realizado em ter vivido um sonho tão lindo. Só tenho a agradecer ao tamanho profissionalismo e sensibilidade de captar tudo que eu sonhava....na verdade até mais, realmente não é para qualquer um. O noe disso é vocação!! Meus olhos se enchem de lágrimas só de reviver tudo através dessas fotos!',
    rotate: 1,
    real: true,
  },
  {
    nome: 'Bruna Caroline',
    data: 'Jan 2025',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Eu lembro da nossa primeira reunião, onde eu já havia colocado na cabeça que queria minha mesa de bolo diferente, e com docinhos pendurados. Por meses vcs aguentaram as minhas alterações, cada uma mais louca que a outra kkk mas por incrível que pareça. em todas vcs toparam. Eu só possp agradecer, o que vcs fizeram por mim durante 1 ano, não tem preço, vcs transformaram uma idealização em realidade. Tenho muito carinho por todos da equipe Fest Noivas, muito obrigada por absolutamente tudo, vcs foram realmente enviados por Deus para concretizar esse dia lindo!',
    rotate: 1,
    real: true,
  },
  {
    nome: 'Raphaela e Thiago',
    data: 'Jan 2025',
    estilo: 'Decoração',
    nota: 5.0,
    texto: 'Pedro e Janaína, gostaríamos de agradecer imensamente pelo talento, dedicação e criatividade na decoração do nosso casamento. Vocês transformaram nosso grande dia em um verdadeiro sonho, com cada detalhe pensado com muito carinho e beleza. Desde o início, ficamos impressionados com o profissionalismo e sensibilidade de vocês em entender exatamente o que desejávamos. O resultado final ficou ainda mais lindo do que imaginávamos e superou todas as nossas expectativas.Vocês foram fundamentais para tornar esse momento inesquecível e guardaríamos essa memória com muito carinho para sempre. Muito obrigada por tudo!',
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

const COLLAPSED_H = 108; // ~4 linhas de texto

function CardDepoimento({ d }) {
  const [expanded, setExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) setHasOverflow(el.scrollHeight > COLLAPSED_H + 4);
  }, []);

  return (
    <div className="testimonial-card" style={{
      width: 340,
      flexShrink: 0,
      background: '#FDFAF8',
      borderRadius: '24px 8px 24px 8px',
      padding: '32px 28px',
      boxShadow: '0 12px 36px rgba(123,31,58,0.12)',
      transform: `rotate(${d.rotate}deg)`,
      transition: 'transform 0.4s ease',
      position: 'relative',
      boxSizing: 'border-box',
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
        pointerEvents: 'none',
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

      <div style={{ position: 'relative', margin: '20px 0 0' }}>
        <p
          ref={textRef}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 17, color: '#2A1A20',
            lineHeight: 1.55, fontWeight: 400,
            fontStyle: 'italic',
            margin: 0,
            maxHeight: expanded ? 2000 : COLLAPSED_H,
            overflow: 'hidden',
            transition: 'max-height 0.4s ease',
          }}
        >
          {d.texto}
        </p>
        {hasOverflow && !expanded && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: 48,
            background: 'linear-gradient(to bottom, transparent, #FDFAF8)',
            pointerEvents: 'none',
          }} />
        )}
      </div>

      {hasOverflow && (
        <button
          onClick={e => { e.stopPropagation(); setExpanded(v => !v); }}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#7B1F3A', fontFamily: 'Jost, sans-serif',
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '8px 0 4px',
            marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 4,
          }}
        >
          {expanded ? 'Ver menos ↑' : 'Ver mais ↓'}
        </button>
      )}

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
  );
}

export default function TestimonialsSection() {
  // Detecta mobile para escolher o modo de scroll
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ===== Auto-scroll (desktop apenas) =====
  const trackRef = useRef(null);
  const pauseRef = useRef(false);
  const animRef  = useRef(null);
  const posRef   = useRef(0);

  // ===== Drag (desktop) =====
  const isDraggingRef   = useRef(false);
  const dragStartXRef   = useRef(0);
  const dragStartPosRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isMobile) return; // mobile usa scroll-snap nativo, sem RAF
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
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const delta = e.clientX - dragStartXRef.current;
      const track = trackRef.current;
      if (!track) return;
      const halfW = track.scrollWidth / 2;
      let newPos = dragStartPosRef.current - delta;
      newPos = ((newPos % halfW) + halfW) % halfW;
      posRef.current = newPos;
      track.style.transform = `translateX(-${newPos}px)`;
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);
      pauseRef.current = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMobile]);

  const handleDesktopMouseDown = (e) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartPosRef.current = posRef.current;
    setIsDragging(true);
    e.preventDefault();
  };

  // ===== Mobile: navegação por dots =====
  const mobileTrackRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!isMobile) return;
    const track = mobileTrackRef.current;
    if (!track) return;

    const onScroll = () => {
      const cardWidth = track.firstChild?.offsetWidth || 1;
      const gap = 20;
      const idx = Math.round(track.scrollLeft / (cardWidth + gap));
      setActiveIdx(Math.min(idx, depoimentos.length - 1));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  const goToCard = (idx) => {
    const track = mobileTrackRef.current;
    if (!track) return;
    const cardWidth = track.firstChild?.offsetWidth || 1;
    const gap = 20;
    track.scrollTo({ left: idx * (cardWidth + gap), behavior: 'smooth' });
  };

  // Para o desktop: duplica para criar loop contínuo
  const todosDesktop = [...depoimentos, ...depoimentos];

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
          Casais reais,<br />
          <em style={{ fontStyle: 'italic', color: '#7B1F3A', display: 'inline-block', paddingBottom: 4 }}>
            histórias verdadeiras
          </em>
        </h2>
      </div>

      {/* Desktop: auto-scroll com pause no hover + drag */}
      {!isMobile && (
        <div
          onMouseEnter={() => { pauseRef.current = true; }}
          onMouseLeave={() => { if (!isDraggingRef.current) pauseRef.current = false; }}
          onMouseDown={handleDesktopMouseDown}
          style={{
            overflow: 'hidden',
            cursor: isDragging ? 'grabbing' : 'grab',
            padding: '20px 0',
            userSelect: 'none',
          }}
        >
          <div ref={trackRef} style={{ display: 'flex', gap: 28, width: 'max-content', padding: '20px 24px', alignItems: 'flex-start' }}>
            {todosDesktop.map((d, i) => (
              <CardDepoimento key={i} d={d} />
            ))}
          </div>
        </div>
      )}

      {/* Mobile: scroll-snap nativo (swipe horizontal) */}
      {isMobile && (
        <>
          <div
            ref={mobileTrackRef}
            className="testimonial-mobile-track"
            style={{
              display: 'flex',
              gap: 20,
              overflowX: 'auto',
              overflowY: 'visible',
              alignItems: 'flex-start',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              padding: '20px 24px',
              scrollPaddingLeft: 24,
              scrollbarWidth: 'none',
            }}
          >
            {depoimentos.map((d, i) => (
              <div key={i} style={{
                flex: '0 0 auto',
                scrollSnapAlign: 'start',
                paddingTop: 8,
                paddingBottom: 8,
              }}>
                <CardDepoimento d={d} />
              </div>
            ))}
            {/* Espaço final para permitir snap do último card */}
            <div style={{ flex: '0 0 8px' }} />
          </div>

          {/* Indicadores (dots) */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            marginTop: 24,
            padding: '0 20px',
            flexWrap: 'wrap',
          }}>
            {depoimentos.map((_, i) => (
              <button
                key={i}
                onClick={() => goToCard(i)}
                aria-label={`Depoimento ${i + 1}`}
                style={{
                  width: i === activeIdx ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: 'none',
                  background: i === activeIdx ? '#7B1F3A' : 'rgba(123,31,58,0.25)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </>
      )}

      <div style={{ textAlign: 'center', marginTop: 28, padding: '0 20px' }}>
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

      <style>{`
        .testimonial-mobile-track::-webkit-scrollbar { display: none; }

        @media (max-width: 500px) {
          .testimonial-card {
            width: 280px !important;
            padding: 26px 22px !important;
          }
        }
      `}</style>
    </section>
  );
}