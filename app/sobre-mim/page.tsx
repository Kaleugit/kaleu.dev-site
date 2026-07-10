import Image from "next/image";

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

const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "15+", label: "Projetos entregues" },
  { value: "Aberto", label: "Para novos projetos" },
];

export default function SobreMim() {
  return (
    <section style={{ padding: '8rem 2rem 5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', width: '100%' }}>

        <p style={{
          fontSize: '0.72rem',
          fontFamily: 'var(--font-geist-mono)',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          sobre mim
        </p>

        <h1 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          color: 'var(--text)',
          marginBottom: '4rem',
        }}>
          Quem sou eu
        </h1>

        {/* Foto + Bio lado a lado */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 500px) 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}>
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
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              Sou desenvolvedor full stack com um equilíbrio sólido entre habilidades técnicas e interpessoais. Gosto de atuar em toda a estrutura da aplicação, do banco de dados à interface. Trago a vivência e o rigor que acumulei em outras áreas profissionais para o desenvolvimento, pois acredito que a rota para a excelência é universal, independentemente da área de atuação.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              Possuo uma visão sistêmica apurada, o que me permite mapear o projeto inteiro antes mesmo da execução. Por ter um alto senso de organização, prospero em ambientes de trabalho maduros e bem estruturados. É essa clareza de processos que me faz priorizar performance e código limpo.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              Meu grande objetivo profissional é dedicar essa base técnica a um projeto sólido e duradouro, que gere impacto direto e real na qualidade de vida de pessoas em situação de vulnerabilidade. Para estar à altura desse desafio, mantenho uma rotina contínua de estudos e atualização sobre novas tecnologias.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              Encaro o desenvolvimento web, móvel e de software como minha profissão e responsabilidade a longo prazo. No entanto, valorizo profundamente o tempo desconectado. Sou um amante da natureza e encontro meu equilíbrio no esporte e em atividades ao ar livre. No futuro, planejo expandir essa paixão academicamente, realizando uma pós-graduação e um mestrado na área esportiva.
            </p>
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
            Projetos: stacks &amp; frameworks
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.5rem',
          }}>
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
          {stats.map(({ value, label }) => (
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
