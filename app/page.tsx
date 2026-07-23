"use client";

import Link from "next/link";
import AlternatingImage from "./components/AlternatingImage";
import { useT } from "./components/LanguageProvider";

const dict = {
  pt: {
    badge: "disponível para projetos",
    intro: "Cientista de dados por formação, desenvolvedor full stack na prática. Construindo sistemas escaláveis e interfaces limpas com a bagagem de múltiplos setores (indústria, educação, construção civil). Foco em código eficiente e gestão organizada, do zero ao deploy.",
    cta1: "Ver projetos",
    cta2: "Entrar em contato",
  },
  en: {
    badge: "available for projects",
    intro: "Data scientist by training, full stack developer in practice. Building scalable systems and clean interfaces with experience across multiple industries (manufacturing, education, construction). Focused on efficient code and organized management, from zero to deploy.",
    cta1: "View projects",
    cta2: "Get in touch",
  },
};

export default function Home() {
  const t = useT(dict);
  return (
    <section className="hero-section">
      <div style={{ maxWidth: '56rem', margin: '0 auto', width: '100%' }}>
        <div className="hero-grid">

          {/* Texto */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.3rem 0.75rem',
              border: '1px solid var(--border)',
              borderRadius: '9999px',
              marginBottom: '2.5rem',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#22c55e', flexShrink: 0 }} />
              <span style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-geist-mono)',
                color: 'var(--muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {t.badge}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 7vw, 5rem)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: 'var(--text)',
              marginBottom: '1.25rem',
            }}>
              Kaleu
            </h1>

            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}>
              {t.intro}
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/projetos" className="btn-primary">{t.cta1}</Link>
              <Link href="/contato" className="btn-ghost">{t.cta2}</Link>
            </div>
          </div>

          {/* Foto */}
          <div className="hero-photo">
            <AlternatingImage />
          </div>

        </div>
      </div>
    </section>
  );
}
