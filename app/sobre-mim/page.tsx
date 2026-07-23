"use client";

import Image from "next/image";
import { useT } from "../components/LanguageProvider";

const dict = {
  pt: {
    kicker: "sobre mim",
    title: "Quem sou eu",
    p1: "Sou desenvolvedor full stack com um equilíbrio entre habilidades técnicas e interpessoais. Atuo em toda a estrutura da aplicação, do banco de dados à interface. Trago experiência de outras áreas profissionais para o desenvolvimento, pois acredito que a rota para a excelência é universal.",
    p2: "Possuo uma visão sistêmica, o que me permite mapear o projeto antes mesmo da execução. Por ter um bom senso de organização, prospero em ambientes de trabalho maduros e bem estruturados. É essa clareza de processos que me faz priorizar sustentabilidade e escalabilidade.",
    p3: "Meu grande objetivo profissional é dedicar essa base técnica a um projeto sólido e duradouro, que gere impacto direto e real na qualidade de vida de pessoas em situação de vulnerabilidade. Para estar à altura desse desafio, mantenho uma rotina contínua de estudos e atualização sobre novas tecnologias.",
    p4: "Encaro o desenvolvimento web, móvel e de software como minha profissão e responsabilidade a longo prazo. No entanto, valorizo profundamente o tempo desconectado. Sou um amante da natureza e encontro meu equilíbrio no esporte e em atividades ao ar livre. No futuro, planejo expandir essa paixão academicamente, realizando uma pós-graduação e um mestrado na área esportiva.",
    stackTitle: "Projetos: stacks & frameworks",
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
    stackTitle: "Projects: stacks & frameworks",
    stats: [
      { value: "3+", label: "Years of experience" },
      { value: "15+", label: "Projects delivered" },
      { value: "Open", label: "To new projects" },
    ],
  },
};

const projectStack = [
  { name: "CE-APP",                lang: "TypeScript",   framework: "Ionic 6 + Angular 13 + Capacitor", db: null },
  { name: "CE-Monitor",            lang: "JavaScript",   framework: "Express.js + BullMQ",              db: "MySQL + Redis" },
  { name: "Sleep-Good",            lang: "TypeScript",   framework: "Expo + Next.js 15",                db: "Supabase" },
  { name: "Race-Game",             lang: "JavaScript",   framework: "Vite + Three.js",                  db: null },
  { name: "Moldura",               lang: "TypeScript",   framework: "Next.js 16 + React 19",            db: null },
  { name: "Kaleu.dev-site",        lang: "TypeScript",   framework: "Next.js 16 + React 19",            db: null },
  { name: "Jogodopatrao",          lang: "JavaScript",   framework: "Three.js (Vanilla)",               db: null },
  { name: "Jogodopatrao-portfolio",lang: "JavaScript",   framework: "Babylon.js",                       db: null },
  { name: "Tempo-Jiggler",         lang: "Python",       framework: "CustomTkinter",                    db: null },
  { name: "CV-Maker",              lang: "JavaScript",   framework: "Puppeteer (CLI)",                  db: null },
  { name: "HTTP-Restaurant",       lang: "HTML/CSS/JS",  framework: "Vanilla",                          db: null },
  { name: "Mercor",                lang: null,           framework: "Documentacao/PDFs",                db: null },
];

export default function SobreMim() {
  const t = useT(dict);
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
                src="/kl2.jpeg"
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
          </div>
        </div>

        {/* Stack — projetos e tecnologias */}
        <div style={{
          borderTop: '1px solid var(--border)',
          marginTop: '4rem',
          paddingTop: '3rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.72rem',
            color: 'var(--muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
          }}>
            {t.stackTitle}
          </p>
          <div className="stack-grid">
            {projectStack.map(({ name, lang, framework, db }) => (
              <div
                key={name}
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  padding: '0.875rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                    color: 'var(--text)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {name}
                  </span>
                  {lang && (
                    <span className="tag" style={{ flexShrink: 0 }}>{lang}</span>
                  )}
                </div>
                <span style={{
                  fontFamily: 'var(--font-geist-mono)',
                  fontSize: '0.6875rem',
                  color: 'var(--muted)',
                  lineHeight: 1.4,
                }}>
                  {framework}
                </span>
                {db && (
                  <span style={{
                    fontFamily: 'var(--font-geist-mono)',
                    fontSize: '0.6875rem',
                    color: 'var(--muted)',
                    opacity: 0.65,
                  }}>
                    db: {db}
                  </span>
                )}
              </div>
            ))}
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
