"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang, useT } from "../components/LanguageProvider";

const PDF_VERSION = "v2";

const dict = {
  pt: {
    kicker: "sobre mim",
    title: "Quem sou eu",
    p1: "Sou desenvolvedor full stack com um equilíbrio entre habilidades técnicas e interpessoais. Atuo em toda a estrutura da aplicação, do banco de dados à interface. Trago experiência de outras áreas profissionais para o desenvolvimento, pois acredito que a rota para a excelência é universal.",
    p2: "Possuo uma visão sistêmica, o que me permite mapear o projeto antes mesmo da execução. Por ter um bom senso de organização, prospero em ambientes de trabalho maduros e bem estruturados. É essa clareza de processos que me faz priorizar sustentabilidade e escalabilidade.",
    p3: "Meu grande objetivo profissional é dedicar essa base técnica a um projeto sólido e duradouro, que gere impacto direto e real na qualidade de vida de pessoas em situação de vulnerabilidade. Para estar à altura desse desafio, mantenho uma rotina contínua de estudos e atualização sobre novas tecnologias.",
    p4: "Encaro o desenvolvimento web, móvel e de software como minha profissão e responsabilidade a longo prazo. No entanto, valorizo profundamente o tempo desconectado. Sou um amante da natureza e encontro meu equilíbrio no esporte e em atividades ao ar livre. No futuro, planejo expandir essa paixão academicamente, realizando uma pós-graduação e um mestrado na área esportiva.",
    cvBtn: "Ver currículo",
    projectsLink: "Ver projetos →",
    stats: [
      { value: "3+", label: "Anos de experiência" },
      { value: "15+", label: "Projetos entregues" },
      { value: "Aberto", label: "Para novos projetos" },
    ],
  },
  en: {
    kicker: "about me",
    title: "Who I am",
    p1: "I'm a full stack developer with a balance between technical and interpersonal skills. I work across the entire application structure, from the database to the interface. I bring experience from other professional fields into development, because I believe the road to excellence is universal.",
    p2: "I have a systemic vision, which allows me to map out the project even before execution. Because of my strong sense of organization, I thrive in mature, well-structured work environments. That clarity of process is what drives me to prioritize sustainability and scalability.",
    p3: "My biggest professional goal is to dedicate this technical foundation to a solid, long-lasting project that creates direct, real impact on the quality of life of people in vulnerable situations. To be up to that challenge, I keep a continuous routine of study and staying current with new technologies.",
    p4: "I see web, mobile, and software development as my long-term profession and responsibility. That said, I deeply value time offline. I'm a nature lover and find my balance in sports and outdoor activities. In the future, I plan to take this passion further academically, pursuing a postgraduate degree and a master's in the sports field.",
    cvBtn: "View resume",
    projectsLink: "View projects →",
    stats: [
      { value: "3+", label: "Years of experience" },
      { value: "15+", label: "Projects delivered" },
      { value: "Open", label: "To new projects" },
    ],
  },
};

export default function SobreMim() {
  const t = useT(dict);
  const { lang } = useLang();
  const cvPdf = `${lang === "pt" ? "/kaleu-pt26-updated.pdf" : "/kaleu-e26-updated.pdf"}?${PDF_VERSION}`;
  return (
    <section className="page-section">
      <div style={{ maxWidth: '56rem', margin: '0 auto', width: '100%' }}>

        <p style={{
          fontSize: '0.72rem',
          fontFamily: 'var(--font-geist-mono)',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          {t.kicker}
        </p>

        <h1 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          color: 'var(--text)',
          marginBottom: '4rem',
        }}>
          {t.title}
        </h1>

        {/* Foto + Bio lado a lado */}
        <div className="about-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Image
              src="/kl1.jpeg"
              alt="Kaleu"
              width={500}
              height={500}
              style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', objectFit: 'cover' }}
            />
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1280 / 1120', borderRadius: '0.75rem', overflow: 'hidden' }}>
              <Image
                src="/kl3.jpeg"
                alt="Kaleu"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
            {[t.p1, t.p2, t.p3, t.p4].map((p, i) => (
              <p key={i} style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
                {p}
              </p>
            ))}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem', alignItems: 'center' }}>
              <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="btn-primary">{t.cvBtn}</a>
              <Link
                href="/projetos"
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {t.projectsLink}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{
          borderTop: '1px solid var(--border)',
          marginTop: '3rem',
          paddingTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(10rem, 1fr))',
          gap: '2rem',
        }}>
          {t.stats.map(({ value, label }) => (
            <div key={label}>
              <p style={{
                fontSize: '2.25rem',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                lineHeight: 1,
                marginBottom: '0.4rem',
              }}>
                {value}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
