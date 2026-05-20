import React, { useEffect, useRef, useState } from 'react';

const base = process.env.PUBLIC_URL || '';
const servicos = [
  {
    num: '01',
    titulo: 'Decoração',
    subtitulo: 'O cenário que transforma sonhos em experiências inesquecíveis',
    img: `${base}/imgs/decoracao.jpeg`,
    texto: 'A decoração é a alma visual do evento — o elemento que desperta emoções, encanta os convidados e traduz a personalidade de cada celebração. Muito além das flores, ela envolve um trabalho minucioso de criação, planejamento e execução, realizado por uma equipe especializada que transforma espaços vazios em cenários sofisticados e memoráveis',
    destaques: ['Acervo exclusivo de mobiliário e peças decorativas', 'Floristas e arquitetos especializados em eventos', 'Projetos de iluminação personalizados', 'Cenários elegantes e instagramáveis para fotos', 'Montagem técnica'],
    accent: '#7B1F3A',
    bg: '#F5E8EC',
  },
  {
    num: '02',
    titulo: 'Buffet',
    subtitulo: 'O buffet é a forma mais elegante de acolher os convidados — um verdadeiro abraço traduzido em sabores, aromas e experiências memoráveis. ',
    img: `${base}/imgs/drinks.jpeg`,
    texto: 'Nossa equipe de chefs e profissionais especializados trabalha com precisão e sensibilidade para entregar um serviço impecável, unindo agilidade, alta gastronomia e uma apresentação visual refinada em cada prato servido. Mais do que um menu, desenvolvemos experiências gastronômicas personalizadas, alinhadas ao estilo e à essência de cada celebração.',
    destaques: ['Menu degustação exclusivo e personalizado', 'Chefs treinados e equipe altamente qualificada', "Sobremesas autorais e personalizadas", "Alta gastronomia com apresentação sofisticada", "Serviço elegante, ágil e profissional"],
    accent: '#9B2E50',
    bg: '#FDFAF8',
  },
];

export default function ServicesSection() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1100 || window.innerHeight < 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // desktop apenas (≥1100px)

    function onScroll() {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const viewport = window.innerHeight;

      const scrollable = wrapperHeight - viewport;
      const scrolled = Math.max(0, Math.min(scrollable, -rect.top));
      const p = scrollable > 0 ? scrolled / scrollable : 0;

      setProgress(p);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  const totalPanels = servicos.length;
  const wrapperHeight = isMobile ? 'auto' : `${(totalPanels + 0.5) * 100}vh`;
  const translateX = -progress * (totalPanels - 1) * 100;

  const activePanel = Math.min(totalPanels - 1, Math.floor(progress * (totalPanels - 1) + 0.001));

  if (isMobile) {
    return (
      <section id="servicos" style={{ background: '#FDFAF8', padding: '20px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#A07A87', marginBottom: 14 }}>
            — O que oferecemos —
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 8vw, 36px)',
            fontWeight: 300,
            color: '#2A1A20',
            lineHeight: 1.2,
            paddingBottom: 8,
          }}>
            Cada detalhe pensado<br />
            <em style={{ color: '#7B1F3A', display: 'inline-block', paddingBottom: 6 }}>para o seu grande dia</em>
          </h2>
        </div>
        {servicos.map((s, i) => (
          <div key={i} style={{
            background: s.bg, borderRadius: 24, padding: 24, marginBottom: 20,
            border: '1px solid #E8D5DA',
          }}>
            <div style={{ borderRadius: '40px 8px 40px 8px', overflow: 'hidden', height: 'min(60vw, 360px)', marginBottom: 20, position: 'relative' }}>
              <img src={s.img} alt={s.titulo} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{
                position: 'absolute', top: 14, left: 14,
                background: 'rgba(253,250,248,0.95)',
                backdropFilter: 'blur(8px)',
                padding: '6px 12px', borderRadius: 50,
                fontSize: 10, letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: s.accent, fontWeight: 600,
              }}>
                {s.num} / 0{totalPanels}
              </div>
            </div>
            <div style={{ fontSize: 11, color: '#A07A87', letterSpacing: '0.2em', marginBottom: 8 }}>{s.num}</div>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 400, color: '#2A1A20', margin: 0, lineHeight: 1.3 }}>{s.titulo}</h3>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', color: s.accent, fontSize: 18, marginTop: 4, marginBottom: 14 }}>{s.subtitulo}</div>
            <p style={{ fontSize: 14, color: '#6B4A55', lineHeight: 1.8, marginBottom: 16 }}>{s.texto}</p>
            {s.destaques.map((d, j) => (
              <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8, fontSize: 13, color: '#4A2A35' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: s.accent, flexShrink: 0 }} />
                {d}
              </div>
            ))}
          </div>
        ))}
        </div>
      </section>
    );
  }

  return (
    <section id="servicos" ref={wrapperRef} style={{
      background: '#FDFAF8',
      height: wrapperHeight,
      position: 'relative',
    }}>
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>

        <div className="service-header" style={{
          padding: '60px 48px 24px',
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
              fontWeight: 300,
              color: '#2A1A20',
              lineHeight: 1.15,           
              margin: 0,
              paddingBottom: 8,        
            }}>
              Cada detalhe pensado<br />
              <em style={{
                fontStyle: 'italic',
                color: '#7B1F3A',
                display: 'inline-block',
                paddingBottom: 6,
              }}>
                para o seu grande dia
              </em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12, marginBottom: 8 }}>
            <div style={{ fontSize: 11, color: '#A07A87', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              <span style={{ color: '#7B1F3A', fontWeight: 600 }}>
                {String(Math.min(totalPanels, activePanel + 1)).padStart(2, '0')}
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <div ref={trackRef} style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            transform: `translateX(${translateX}%)`,
            transition: 'transform 0.05s linear',
            willChange: 'transform',
          }}>
            {servicos.map((s, i) => {
              const panelProgress = progress * (totalPanels - 1);
              const distance = Math.abs(panelProgress - i);
              const isActive = distance < 0.5;
              const localOpacity = Math.max(0, 1 - distance * 1.4);
              const localTranslateY = isActive ? 0 : 40;
              const localScale = isActive ? 1 : 0.94;

              return (
                <div key={i} className="service-panel" style={{
                  flex: '0 0 100%',
                  height: '100%',
                  padding: '24px 80px 60px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 60,
                  alignItems: 'center',
                  background: s.bg,
                }}>

                  <div className="service-img-wrap" style={{
                    position: 'relative',
                    height: '70vh',
                    maxHeight: 560,
                    borderRadius: i % 2 === 0 ? '200px 32px 200px 32px' : '32px 200px 32px 200px',
                    overflow: 'hidden',
                    boxShadow: '0 30px 60px rgba(123,31,58,0.18)',
                    opacity: localOpacity,
                    transform: `translateY(${localTranslateY}px) scale(${localScale})`,
                    transition: 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.3, 1), transform 0.7s cubic-bezier(0.2, 0.8, 0.3, 1)',
                  }}>
                    <img src={s.img} alt={s.titulo} loading="lazy" style={{
                      width: '100%', height: '100%', objectFit: 'cover',
                      transform: isActive ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 1.5s cubic-bezier(0.2, 0.8, 0.3, 1)',
                    }} />

                    <div style={{
                      position: 'absolute',
                      top: 32,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'rgba(253,250,248,0.97)',
                      backdropFilter: 'blur(8px)',
                      padding: '10px 22px', borderRadius: 50,
                      fontSize: 11, letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: s.accent, fontWeight: 600,
                      boxShadow: '0 4px 16px rgba(123,31,58,0.15)',
                      whiteSpace: 'nowrap',
                    }}>
                      {s.num} / 0{totalPanels}
                    </div>
                  </div>

                  <div style={{
                    opacity: localOpacity,
                    transform: `translateX(${isActive ? 0 : 30}px)`,
                    transition: 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.3, 1), transform 0.7s cubic-bezier(0.2, 0.8, 0.3, 1) 0.05s',
                  }}>
                    <div aria-hidden className="service-num-deco" style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontSize: 180,
                      fontWeight: 300,
                      color: 'transparent',
                      WebkitTextStroke: `1.5px ${s.accent}`,
                      opacity: isActive ? 0.4 : 0.1,
                      lineHeight: 0.8,
                      marginBottom: -20,
                      transition: 'opacity 0.8s ease 0.1s',
                    }}>
                      {s.num}
                    </div>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(36px, 4.5vw, 64px)',
                      fontWeight: 400,
                      color: '#2A1A20',
                      lineHeight: 1.1,
                      margin: 0,
                      letterSpacing: '-0.01em',
                      transform: `translateY(${isActive ? 0 : 20}px)`,
                      opacity: isActive ? 1 : 0.5,
                      transition: 'opacity 0.5s ease 0.15s, transform 0.6s cubic-bezier(0.2, 0.8, 0.3, 1) 0.15s',
                    }}>
                      {s.titulo}
                    </h3>
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      fontSize: 22,
                      color: s.accent,
                      marginTop: 8, marginBottom: 24,
                      transform: `translateY(${isActive ? 0 : 20}px)`,
                      opacity: isActive ? 1 : 0.5,
                      transition: 'opacity 0.5s ease 0.2s, transform 0.6s cubic-bezier(0.2, 0.8, 0.3, 1) 0.2s',
                    }}>
                      {s.subtitulo}
                    </div>
                    <p style={{
                      fontSize: 16, color: '#6B4A55',
                      lineHeight: 1.85, fontWeight: 300,
                      marginBottom: 32, maxWidth: 520,
                      transform: `translateY(${isActive ? 0 : 20}px)`,
                      opacity: isActive ? 1 : 0.4,
                      transition: 'opacity 0.5s ease 0.25s, transform 0.6s cubic-bezier(0.2, 0.8, 0.3, 1) 0.25s',
                    }}>
                      {s.texto}
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px', maxWidth: 520 }}>
                      {s.destaques.map((d, j) => (
                        <div key={j} style={{
                          display: 'flex', alignItems: 'center', gap: 10,
                          fontSize: 14, color: '#4A2A35',
                          transform: `translateY(${isActive ? 0 : 20}px)`,
                          opacity: isActive ? 1 : 0,
                          transition: `opacity 0.4s ease ${0.3 + j * 0.06}s, transform 0.5s cubic-bezier(0.2, 0.8, 0.3, 1) ${0.3 + j * 0.06}s`,
                        }}>
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
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Largura ── */
        @media (max-width: 1200px) {
          .service-header { padding: 48px 48px 20px !important; }
          .service-panel  { padding: 16px 48px 40px !important; gap: 40px !important; }
          .service-num-deco { font-size: 130px !important; }
        }
        @media (max-width: 1050px) {
          .service-header { padding: 36px 32px 16px !important; }
          .service-panel  { padding: 12px 32px 32px !important; gap: 24px !important; }
          .service-num-deco { font-size: 100px !important; margin-bottom: -10px !important; }
        }

        /* ── Altura (zoom alto ou tela curta) ── */
        @media (max-height: 820px) {
          .service-header { padding-top: 40px !important; padding-bottom: 14px !important; }
          .service-img-wrap { height: 58vh !important; }
          .service-panel { padding-top: 12px !important; padding-bottom: 36px !important; }
          .service-num-deco { font-size: 110px !important; margin-bottom: -10px !important; }
        }
        @media (max-height: 700px) {
          .service-header { padding-top: 24px !important; padding-bottom: 10px !important; }
          .service-img-wrap { height: 50vh !important; max-height: 380px !important; }
          .service-panel { padding-top: 8px !important; padding-bottom: 24px !important; }
          .service-num-deco { font-size: 90px !important; margin-bottom: -8px !important; }
        }
        @media (max-height: 600px) {
          .service-header { padding-top: 16px !important; padding-bottom: 8px !important; }
          .service-img-wrap { height: 44vh !important; max-height: 300px !important; }
          .service-panel { padding-top: 4px !important; padding-bottom: 16px !important; }
          .service-num-deco { display: none !important; }
        }
      `}</style>
    </section>
  );
}