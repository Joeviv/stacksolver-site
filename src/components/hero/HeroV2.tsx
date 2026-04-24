// ARCHIVO: src/components/hero/HeroV2.tsx
// Hero section v2 — dot-matrix world map + copy + CTAs.
// Adaptado del handoff Claude Design 2026-04-23.
// Lee el tema del site (.dark class en <html>) y reacciona a cambios.
import { useEffect, useState } from 'react';
import HeroDotMap from './HeroDotMap';

export default function HeroV2() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const readTheme = () => setTheme(root.classList.contains('dark') ? 'dark' : 'light');
    const readLang = () => {
      const bodyClass = document.body?.className || '';
      setLang(bodyClass.includes('lang-en') ? 'en' : 'es');
    };
    readTheme();
    readLang();
    const obs = new MutationObserver(() => { readTheme(); readLang(); });
    obs.observe(root, { attributes: true, attributeFilter: ['class'] });
    if (document.body) obs.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const isDark = theme === 'dark';
  const olive = '#85a03a';
  const oliveBright = isDark ? '#a6c04d' : '#6d8530';
  const strong = isDark ? '#fafafa' : '#18181b';
  const muted = isDark ? '#a1a1aa' : '#52525b';
  const bg = isDark ? '#0a0a0a' : '#ffffff';

  const copy = {
    es: {
      eyebrow: 'GRC · IA ÉTICA · IA LOCAL',
      headline: 'Integrar IA en sistemas que ya gobiernan su empresa.',
      sub: 'GRC nativo, IA local, gobernanza primero. Operamos entre Latinoamérica y Europa.',
      quote: 'No confíes solo en los datos que puedes ver. Escucha lo que está ausente —',
      quoteBold: 'nosotros te ayudamos a encontrarlo.',
      primary: 'Iniciar diagnóstico',
      secondary: 'Ver el método',
    },
    en: {
      eyebrow: 'GRC · ETHICAL AI · LOCAL AI',
      headline: 'Integrate AI into the systems that already run your business.',
      sub: 'GRC-native, local AI, governance-first. We operate between Latin America and Europe.',
      quote: "Don't trust only the data you can see. Listen to what's missing —",
      quoteBold: "we'll help you find it.",
      primary: 'Start diagnostic',
      secondary: 'See the method',
    },
  }[lang];

  return (
    <section style={{
      position: 'relative',
      minHeight: 'calc(100vh - 52px)',
      background: bg,
      color: strong,
      overflow: 'hidden',
    }}>
      {/* Full-bleed map layer */}
      <div aria-hidden="false" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <HeroDotMap theme={theme} regionHighlight="both" arcDensity="latameu" arcIntensity="normal" />
      </div>

      {/* Left-side fade so copy stays legible over the map */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: isDark
          ? 'linear-gradient(90deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.75) 32%, rgba(10,10,10,0.25) 55%, rgba(10,10,10,0) 75%)'
          : 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.82) 32%, rgba(255,255,255,0.35) 55%, rgba(255,255,255,0) 75%)',
      }} />

      {/* Subtle dot grid on top of fade */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        backgroundImage: isDark
          ? 'radial-gradient(rgba(250,250,250,0.035) 1px, transparent 1px)'
          : 'radial-gradient(rgba(24,24,27,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'linear-gradient(90deg, black 0%, black 30%, transparent 60%)',
        WebkitMaskImage: 'linear-gradient(90deg, black 0%, black 30%, transparent 60%)',
      }} />

      {/* Content grid */}
      <div className="ss-hero-grid" style={{
        position: 'relative', zIndex: 3,
        maxWidth: 1440, margin: '0 auto', padding: '0 32px',
        minHeight: 'calc(100vh - 52px)',
        display: 'grid', gridTemplateColumns: 'minmax(0, 560px) 1fr',
        gap: 48, alignItems: 'center', pointerEvents: 'none',
      }}>
        <div style={{ padding: '48px 0', maxWidth: 600, pointerEvents: 'auto' }}>
          {/* Eyebrow */}
          <div style={{
            fontFamily: 'JetBrains Mono, monospace', fontSize: 12, fontWeight: 600,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: oliveBright, marginBottom: 24,
            display: 'inline-flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 9999, background: oliveBright, boxShadow: isDark ? `0 0 10px ${oliveBright}` : 'none' }} />
            {copy.eyebrow}
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(40px, 5.2vw, 72px)',
            lineHeight: 1.02, letterSpacing: '-0.03em', fontWeight: 700,
            margin: '0 0 20px', color: strong, textWrap: 'balance' as 'balance',
          }}>
            {copy.headline}
          </h1>

          {/* Johann's signature quote */}
          <div style={{
            margin: '0 0 24px', padding: '12px 16px',
            borderLeft: `2px solid ${olive}`,
            background: isDark ? 'rgba(133,160,58,0.08)' : 'rgba(133,160,58,0.06)',
            borderRadius: '0 10px 10px 0',
          }}>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: muted, margin: 0 }}>
              {copy.quote} <strong style={{ color: oliveBright, fontWeight: 700 }}>{copy.quoteBold}</strong>
            </p>
          </div>

          {/* Subtitle */}
          <p style={{ fontSize: 18, lineHeight: 1.55, color: muted, margin: '0 0 32px', maxWidth: 560 }}>
            {copy.sub}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="/diagnostico" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 22px', background: olive, color: '#0a0a0a',
              borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none',
              border: `1px solid ${olive}`,
              boxShadow: isDark
                ? '0 0 0 1px rgba(133,160,58,0.35) inset, 0 0 32px rgba(133,160,58,0.28), 0 2px 0 rgba(0,0,0,0.2)'
                : '0 1px 2px rgba(24,24,27,0.08), 0 0 0 1px rgba(109,133,48,0.2)',
              transition: 'background 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#94b043'; }}
              onMouseLeave={e => { e.currentTarget.style.background = olive; }}>
              {copy.primary} <span aria-hidden>→</span>
            </a>
            <a href="/metodo" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '14px 22px', background: 'transparent', color: strong,
              borderRadius: 8, fontSize: 15, fontWeight: 500, textDecoration: 'none',
              border: `1px solid ${olive}`, transition: 'background 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(133,160,58,0.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}>
              {copy.secondary}
            </a>
          </div>
        </div>
        <div />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ss-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 0 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
