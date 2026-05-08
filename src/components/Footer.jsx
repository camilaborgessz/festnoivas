import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: '#1A0D12', padding: '56px 24px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

     
        <div className="footer-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>

          
          <div style={{ maxWidth: 320 }}>
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '12px 16px', display: 'inline-block', marginBottom: 16 }}>
              <img src={`${process.env.PUBLIC_URL}/logoFestnoivas.svg`} alt="Fest Noivas"
                style={{ height: 60, width: 'auto', display: 'block', filter: 'brightness(0) invert(1)' }} />
            </div>
            <p style={{ fontSize: 13, color: '#C4889A', lineHeight: 1.8, fontWeight: 300, marginBottom: 14 }}>
              Há 20 anos criando cenários inspiradores, exclusivos e inesquecíveis em Porto Velho. Cada decoração representa a personalidade do casal.
            </p>
            <div style={{ fontSize: 12, color: '#C4889A', opacity: 0.7, lineHeight: 1.6 }}>
              📍Av. Rogerio Weber, 1867<br />
              Centro, Porto Velho - RO, 76801-030
            </div>
          </div>

         
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#E8A0B4', marginBottom: 16 }}>
              Navegação
            </div>
            {[
              { label: 'Início',      id: 'hero'       },
              { label: 'Quem Somos',  id: 'sobre'      },
              { label: 'Serviços',    id: 'servicos'   },
              { label: 'Eventos',     id: 'portfolio'  },
              { label: 'Depoimentos', id: 'depoimentos'},
              { label: 'Formulário',  id: 'formulario' },
            ].map(l => (
              <div key={l.id} style={{ marginBottom: 10 }}>
                <a href={`#${l.id}`}
                  style={{ fontSize: 14, color: '#C4889A', textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#C4889A'}
                >
                  {l.label}
                </a>
              </div>
            ))}
          </div>

         
          <div>
            <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#E8A0B4', marginBottom: 16 }}>
              Contato
            </div>
            <a href="https://www.instagram.com/festnoivass" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#C4889A', textDecoration: 'none', marginBottom: 12, fontWeight: 300 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/>
              </svg>
              @festnoivass
            </a>
            <a href="https://wa.me/5569992242374" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#C4889A', textDecoration: 'none', marginBottom: 12, fontWeight: 300 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
            <a href="https://www.casamentos.com.br/decoracao-casamento/fest-noivas--e280307" target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: '#C4889A', textDecoration: 'none', fontWeight: 300 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Casamentos.com.br
            </a>
          </div>
        </div>

      
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 12, color: 'rgba(196,136,154,0.5)' }}>
            © {new Date().getFullYear()} Fest Noivas. Todos os direitos reservados.
          </span>
          <span style={{ fontSize: 12, color: 'rgba(196,136,154,0.5)' }}>
            Feito com 💍 para casamentos inesquecíveis
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .footer-top { gap: 28px !important; }
          .footer-bottom { justify-content: center !important; text-align: center; }
        }
      `}</style>
    </footer>
  );
}