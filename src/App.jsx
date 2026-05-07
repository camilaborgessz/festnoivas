import React, { useState, useRef } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

import ProgressBar from './components/ProgressBar';
import StepCard from './components/StepCard';
import RadioOption from './components/RadioOption';
import StyleCard from './components/StyleCard';
import NavButtons from './components/NavButtons';
import SuccessScreen from './components/SuccessScreen';
import { estilosDecoracao, locaisEvento } from './data/formData';

const TOTAL_STEPS = 5;
const inputStyle = {
  width: '100%', border: '1.5px solid #E8D5DA', borderRadius: 10,
  padding: '14px 16px', fontFamily: 'Jost, sans-serif', fontSize: 15,
  color: '#2A1A20', background: '#FDFAF8', outline: 'none', marginTop: 4,
};

export default function App() {
  const formRef = useRef(null);

  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const [data, setData] = useState('');
  const [convidados, setConvidados] = useState('');
  const [local, setLocal] = useState('');
  const [outroLocal, setOutroLocal] = useState('');
  const [cerimonial, setCerimonial] = useState('');
  const [estilos, setEstilos] = useState([]);
  const [dadosFinais, setDadosFinais] = useState(null);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function validate(s) {
    switch (s) {
      case 0: if (!data) return { 0: 'Por favor, informe a data do casamento.' }; break;
      case 1: if (!convidados || parseInt(convidados) < 1) return { 1: 'Por favor, informe a quantidade de convidados.' }; break;
      case 2:
        if (!local) return { 2: 'Por favor, selecione o local.' };
        if (local === 'outro' && !outroLocal.trim()) return { 2: 'Por favor, informe o nome do local.' };
        break;
      case 3: if (!cerimonial) return { 3: 'Por favor, selecione uma opção.' }; break;
      case 4: if (estilos.length === 0) return { 4: 'Por favor, selecione ao menos um estilo.' }; break;
      default: break;
    }
    return {};
  }

  function handleNext() {
    const errs = validate(step);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    if (step < TOTAL_STEPS - 1) { setStep(s => s + 1); scrollToForm(); }
    else handleSubmit();
  }

  function handlePrev() {
    setErrors({});
    setStep(s => s - 1);
    scrollToForm();
  }

  function handleSubmit() {
    const localFinal = local === 'outro' ? outroLocal.trim() : local;
    setDadosFinais({ data, convidados, local: localFinal, cerimonial, estilos });
    setDone(true);
    scrollToForm();
  }

  function toggleEstilo(nome) {
    setEstilos(prev => prev.includes(nome) ? prev.filter(e => e !== nome) : [...prev, nome]);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#FDFAF8' }}>
      <Navbar />

      <div id="hero">
        <HeroSection onStartForm={scrollToForm} />
      </div>

      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />

      <section id="formulario" ref={formRef} style={{ background: '#FDFAF8', padding: '80px 0 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 24px' }}>
          <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A07A87', marginBottom: 12 }}>
            Formulário
          </div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 5vw, 46px)',
            fontWeight: 300,
            color: '#2A1A20',
            lineHeight: 1.2,
            paddingBottom: 4,
          }}>
            Conte-nos sobre o seu<br />
            <em style={{ fontStyle: 'italic', color: '#7B1F3A', display: 'inline-block', paddingBottom: 4 }}>
              casamento dos sonhos
            </em>
          </h2>
          <p style={{ fontSize: 15, color: '#6B4A55', maxWidth: 420, margin: '16px auto 0', lineHeight: 1.7, fontWeight: 300 }}>
            Preencha o questionário e nossa equipe entrará em contato para dar vida ao seu sonho.
          </p>
          <div style={{ width: 48, height: 2, background: '#7B1F3A', margin: '20px auto 0', opacity: 0.4 }} />
        </div>

        <main style={{ maxWidth: 720, margin: '0 auto', padding: '0 20px 80px' }}>
          {done ? (
            <SuccessScreen dados={dadosFinais} />
          ) : (
            <>
              <ProgressBar current={step} total={TOTAL_STEPS} />

              {step === 0 && (
                <StepCard number={1} question="Qual é a data do casamento?" sub="Informe a data prevista para a cerimônia." error={errors[0]}>
                  <input type="date" value={data} onChange={e => setData(e.target.value)}
                    style={{ ...inputStyle, display: 'block', WebkitAppearance: 'none', appearance: 'none', lineHeight: '1.5' }} />
                </StepCard>
              )}

              {step === 1 && (
                <StepCard number={2} question="Quantidade de convidados?" sub="Número aproximado esperado. Esse é o item que mais reflete no investimento final." error={errors[1]}>
                  <input type="number" value={convidados} onChange={e => setConvidados(e.target.value)}
                    placeholder="Ex: 150" min="1" style={inputStyle} />
                </StepCard>
              )}

              {step === 2 && (
                <StepCard number={3} question="Já possui local definido?" sub="Selecione uma das opções abaixo." error={errors[2]}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {locaisEvento.map(op => (
                      <RadioOption key={op.value} label={op.label} selected={local === op.value}
                        onSelect={() => { setLocal(op.value); setErrors({}); }} />
                    ))}
                  </div>
                  {local === 'outro' && (
                    <input type="text" value={outroLocal} onChange={e => setOutroLocal(e.target.value)}
                      placeholder="Nome do local…" style={{ ...inputStyle, marginTop: 12 }} />
                  )}
                </StepCard>
              )}

              {step === 3 && (
                <StepCard number={4} question="Já possui equipe de cerimonial contratada?" sub="Selecione uma opção." error={errors[3]}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {['Sim, já tenho cerimonial', 'Não, ainda estou procurando', 'Não pretendo contratar cerimonial'].map(op => (
                      <RadioOption key={op} label={op} selected={cerimonial === op}
                        onSelect={() => { setCerimonial(op); setErrors({}); }} />
                    ))}
                  </div>
                </StepCard>
              )}

              {step === 4 && (
                <StepCard
                  number={5}
                  question="Qual é o estilo da decoração?"
                  sub="Clique em 'Saiba mais' para entender cada estilo, e selecione um ou mais que combinem com vocês."
                  error={errors[4]}
                >

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 16,
                  }}>
                    {estilosDecoracao.map(est => (
                      <StyleCard
                        key={est.id}
                        estilo={est}
                        selected={estilos.includes(est.nome)}
                        onToggle={() => { toggleEstilo(est.nome); setErrors({}); }}
                      />
                    ))}
                  </div>

                  {estilos.length > 0 && (
                    <div style={{
                      marginTop: 20, padding: '12px 16px',
                      background: '#fff',
                      border: '1.5px solid #7B1F3A',
                      borderRadius: 10,
                      fontSize: 13, color: '#2A1A20',
                      display: 'flex', alignItems: 'center', gap: 8,
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B1F3A" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <strong style={{ color: '#7B1F3A', fontWeight: 600 }}>
                        {estilos.length} estilo{estilos.length > 1 ? 's' : ''} selecionado{estilos.length > 1 ? 's' : ''}:
                      </strong>
                      <span>{estilos.join(', ')}</span>
                    </div>
                  )}
                </StepCard>
              )}

              <NavButtons onPrev={handlePrev} onNext={handleNext}
                isFirst={step === 0} isLast={step === TOTAL_STEPS - 1} />
            </>
          )}
        </main>
      </section>

      <Footer />
    </div>
  );
}