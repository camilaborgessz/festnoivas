import React, { useState, useEffect } from 'react';

const links = [
  { label: 'Início',      id: 'hero'         },
  { label: 'Quem Somos',  id: 'sobre'        },
  { label: 'Serviços',    id: 'servicos'     },
  { label: 'Eventos',     id: 'portfolio'    },
  { label: 'Depoimentos', id: 'depoimentos'  },
  { label: 'Formulário',  id: 'formulario'   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = links.map(l => document.getElementById(l.id)).filter(Boolean);
      const current = sections.reverse().find(s => s.getBoundingClientRect().top <= 120);
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  }

  // Cores adaptativas: hero escuro -> texto claro; resto -> texto vinho
  const onDark = !scrolled;
  const textColor = onDark ? '#FDFAF8' : '#4A2A35';
  const activeBg  = onDark ? 'rgba(253,250,248,0.15)' : '#F5E8EC';
  const activeColor = onDark ? '#FDFAF8' : '#7B1F3A';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'rgba(253,250,248,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid #E8D5DA' : 'none',
        transition: 'all 0.4s ease',
        padding: scrolled ? '14px 32px' : '22px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div onClick={() => goTo('hero')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={`${process.env.PUBLIC_URL}/logoFestnoivas.svg`}
            alt="Fest Noivas"
            style={{
              height: scrolled ? 36 : 44,
              transition: 'all 0.3s',
              filter: onDark ? 'brightness(0) invert(1)' : 'none',
            }}
          />
        </div>

        {/* Links desktop */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="nav-links">
          {links.map(l => (
            <button key={l.id} onClick={() => goTo(l.id)} style={{
              border: 'none', cursor: 'pointer',
              fontFamily: 'Jost, sans-serif', fontSize: 12, fontWeight: 500,
              color: active === l.id ? activeColor : textColor,
              padding: '8px 16px', borderRadius: 50,
              background: active === l.id ? activeBg : 'transparent',
              transition: 'all 0.25s',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => goTo('formulario')} style={{
            marginLeft: 12,
            background: onDark ? '#FDFAF8' : '#7B1F3A',
            color: onDark ? '#1A0D12' : '#FDFAF8',
            border: 'none', borderRadius: 50, padding: '10px 22px',
            fontFamily: 'Jost, sans-serif', fontSize: 12, fontWeight: 500,
            cursor: 'pointer',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            transition: 'all 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Quero meu casamento
          </button>
        </div>

        {/* Hamburguer mobile */}
        <button onClick={() => setMenuOpen(o => !o)} style={{
          display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 4,
        }} className="hamburger">
          <div style={{ width: 26, height: 2, background: textColor, marginBottom: 6, transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(6px,6px)' : 'none' }} />
          <div style={{ width: 26, height: 2, background: textColor, marginBottom: 6, opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
          <div style={{ width: 26, height: 2, background: textColor, transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(6px,-6px)' : 'none' }} />
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999,
          background: 'rgba(26,13,18,0.98)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          {links.map((l, i) => (
            <button key={l.id} onClick={() => goTo(l.id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 36, fontWeight: 300, fontStyle: 'italic',
              color: active === l.id ? '#E8A0B4' : '#FDFAF8',
              padding: '10px 24px',
              animation: `slideIn 0.4s ease ${i * 0.06}s both`,
            }}>
              {l.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
