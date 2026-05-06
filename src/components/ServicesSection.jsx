import React, { useEffect, useRef, useState } from 'react';

const servicos = [
  {
    num: '01',
    titulo: 'Decoração',
    subtitulo: 'O cenário que encanta',
    img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85',
    texto: 'A decoração vai muito além das flores. É a transformação técnica de um espaço vazio no cenário dos seus sonhos — com arquitetos de eventos, floristas e um acervo exclusivo de mobiliário.',
    destaques: ['5 estilos exclusivos', 'Flores naturais e artificiais', 'Iluminação personalizada', 'Cenários para fotos'],
    accent: '#7B1F3A',
    bg: '#F5E8EC',
  },
  {
    num: '02',
    titulo: 'Buffet & Drinks',
    subtitulo: 'Experiências sensoriais',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=85',
    texto: 'O buffet e os drinks são o "abraço" nos convidados. Como montar um restaurante de luxo exclusivo para vocês, com chefs e barmans que garantem agilidade, sabor e apresentação impecável.',
    destaques: ['Cardápio personalizado', 'Chefs especializados', 'Open bar premium', 'Mesa de doces artesanais'],
    accent: '#9B2E50',
    bg: '#FDFAF8',
  },
  {
    num: '03',
    titulo: 'Som, Luz & Música',
    subtitulo: 'A energia da festa',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=85',
    texto: 'A estrutura de som e iluminação garante que seus convidados saiam das cadeiras e a pista brilhe nas fotos. DJ ou banda qualificados lendo a pista para manter a energia alta do início ao fim.',
    destaques: ['Sistema de som premium', 'Iluminação cênica', 'DJ ou banda ao vivo', 'Cabine de fotos'],
    accent: '#7B1F3A',
    bg: '#F5E8EC',
  },
  {
    num: '04',
    titulo: 'Os Pilares',
    subtitulo: 'Assessoria, Foto & Doces',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=900&q=85',
    texto: 'A assessoria é seu seguro-festa. A fotografia eterniza tudo. E o bolo maquete garante a estética nas fotos enquanto o bolo de corte entrega frescor e sabor a todos os convidados.',
    destaques: ['Assessoria completa', 'Fotografia profissional', 'Álbum impresso', 'Bolo artístico'],
    accent: '#9B2E50',
    bg: '#FDFAF8',
  },
];

export default function ServicesSection() {
  const wrapperRef = useRef(null);
  const trackRef   = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    function onScroll() {
      const wrapper = wrapperRef.current;
      const track   = trackRef.current;
      if (!wrapper || !track) return;

      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const viewport = window.innerHeight;

      // Distância total scrollável dentro do wrapper
      const scrollable = wrapperHeight - viewport;
      // Quanto já passou (0 → scrollable)
      const scrolled = Math.max(0, Math.min(scrollable, -rect.top));
      const p = scrollable > 0 ? scrolled / scrollable : 0;

      setProgress(p);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  // Altura do wrapper = 1 viewport para o título + N viewports para os painéis
  const totalPanels = servicos.length;
  const wrapperHeight = isMobile ? 'auto' : `${(totalPanels + 0.5) * 100}vh`;

  // Translação: (totalPanels - 1) * 100% para deslizar todos os painéis
  const translateX = -progress * (totalPanels - 1) * 100;

  /* ============== MOBILE: empilha vertical normal ============== */
  if (isMobile) {
    return (
      <section id="servicos" style={{ background: '#FDFAF8', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A07A87', marginBottom: 14 }}>
            — O que oferecemos —
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, fontWeight: 300, color: '#2A1A20', lineHeight: 1.1 }}>
            cada detalhe pensado<br />
            <em style={{ color: '#7B1F3A' }}>para o seu grande dia</em>
          </h2>
        </div>
        {servicos.map((s, i) => (
          <div key={i} style={{
            background: s.bg, borderRadius: 24, padding: 24, marginBottom: 20,
            border: '1px solid #E8D5DA',
          }}>
            <div style={{ borderRadius: '40px 8px 40px 8px', overflow: 'hidden', aspectRatio: '4/3', marginBottom: 20 }}>
              <img src={s.img} alt={s.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ fontSize: 11, color: '#A07A87', letterSpacing: '0.2em', marginBottom: 8 }}>{s.num}</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 400, color: '#2A1A20', margin: 0 }}>{s.titulo}</h3>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: s.accent, fontSize: 18, marginTop: 4, marginBottom: 14 }}>{s.subtitulo}</div>
            <p style={{ fontSize: 14, color: '#6B4A55', lineHeight: 1.8, marginBottom: 16 }}>{s.texto}</p>
            {s.destaques.map((d, j) => (
              <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, fontSize: 13, color: '#4A2A35' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.accent }} />
                {d}
              </div>
            ))}
          </div>
        ))}
      </section>
    );
  }

  /* ============== DESKTOP: scroll horizontal pinado ============== */
  return (
    <section id="servicos" ref={wrapperRef} style={{
      background: '#FDFAF8',
      height: wrapperHeight,
      position: 'relative',
    }}>
      {/* Container sticky que ocupa 100vh */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Header fixo no topo */}
        <div style={{
          padding: '60px 48px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexShrink: 0,
        }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A07A87', marginBottom: 12 }}>
              — O que oferecemos —
            </div>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 300, color: '#2A1A20', lineHeight: 1.05, margin: 0,
            }}>
              cada detalhe pensado<br />
              <em style={{ fontStyle: 'italic', color: '#7B1F3A' }}>para o seu grande dia</em>
            </h2>
          </div>

          {/* Indicador de progresso */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12, marginBottom: 8 }}>
            <div style={{ fontSize: 11, color: '#A07A87', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              <span style={{ color: '#7B1F3A', fontWeight: 600 }}>
                {String(Math.min(totalPanels, Math.floor(progress * totalPanels) + 1)).padStart(2, '0')}
              </span>
              {' '}/{' '}
              {String(totalPanels).padStart(2, '0')}
            </div>
            <div style={{ width: 200, height: 2, background: '#E8D5DA', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{
                width: `${progress * 100}%`, height: '100%',
                background: '#7B1F3A', transition: 'width 0.1s linear',
              }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: '#A07A87', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Scroll
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Track horizontal que desliza */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <div ref={trackRef} style={{
            display: 'flex',
            height: '100%',
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.05s linear',
            willChange: 'transform',
          }}>
            {servicos.map((s, i) => (
              <div key={i} style={{
                width: '100vw',
                height: '100%',
                flexShrink: 0,
                padding: '40px 80px 60px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 60,
                alignItems: 'center',
                background: s.bg,
              }}>
                {/* Imagem com cantos especiais (estilo AE) */}
                <div style={{
                  position: 'relative',
                  height: '70vh',
                  maxHeight: 560,
                  borderRadius: i % 2 === 0 ? '200px 32px 200px 32px' : '32px 200px 32px 200px',
                  overflow: 'hidden',
                  boxShadow: '0 30px 60px rgba(123,31,58,0.18)',
                }}>
                  <img src={s.img} alt={s.titulo} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                  }} />
                  {/* Tag flutuante */}
                  <div style={{
                    position: 'absolute', top: 24, left: 24,
                    background: 'rgba(253,250,248,0.95)',
                    backdropFilter: 'blur(8px)',
                    padding: '8px 16px', borderRadius: 50,
                    fontSize: 11, letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: s.accent, fontWeight: 600,
                  }}>
                    {s.num} / {String(totalPanels).padStart(2, '0')}
                  </div>
                </div>

                {/* Texto */}
                <div>
                  <div aria-hidden style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: 180,
                    fontWeight: 300,
                    color: 'transparent',
                    WebkitTextStroke: `1.5px ${s.accent}`,
                    opacity: 0.4,
                    lineHeight: 0.8,
                    marginBottom: -20,
                  }}>
                    {s.num}
                  </div>
                  <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(36px, 4.5vw, 64px)',
                    fontWeight: 400,
                    color: '#2A1A20',
                    lineHeight: 1, margin: 0,
                    letterSpacing: '-0.01em',
                  }}>
                    {s.titulo}
                  </h3>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: 22,
                    color: s.accent,
                    marginTop: 8, marginBottom: 24,
                  }}>
                    {s.subtitulo}
                  </div>
                  <p style={{
                    fontSize: 16, color: '#6B4A55',
                    lineHeight: 1.85, fontWeight: 300,
                    marginBottom: 32, maxWidth: 520,
                  }}>
                    {s.texto}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', maxWidth: 520 }}>
                    {s.destaques.map((d, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#4A2A35' }}>
                        <div style={{
                          width: 22, height: 22, borderRadius: '50%',
                          background: s.accent,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5">
                            <polyline points="2,6 5,9 10,3" />
                          </svg>
                        </div>
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}