import Image from "next/image";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "PostgreSQL", "Docker", "Git", "REST APIs",
  "Tailwind CSS", "AWS", "Prisma", "Redis",
];

const stats = [
  { value: "3+", label: "Anos de experiência" },
  { value: "20+", label: "Projetos entregues" },
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
          <Image
            src="/kl1.jpeg"
            alt="Kaleu"
            width={500}
            height={500}
            style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', objectFit: 'cover' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              Sou desenvolvedor full stack com foco em criar produtos digitais funcionais e
              esteticamente consistentes. Gosto de trabalhar em toda a stack — do banco de dados
              à interface.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              Tenho experiência em projetos desde MVPs rápidos até sistemas de maior escala,
              sempre priorizando código limpo, performance e boa experiência para o usuário final.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.75 }}>
              Quando não estou codando, estou estudando design de sistemas, lendo sobre arquitetura
              de software ou explorando novas ferramentas.
            </p>
          </div>
        </div>

        {/* Stack — abaixo da foto/bio */}
        <div style={{
          borderTop: '1px solid var(--border)',
          marginTop: '4rem',
          paddingTop: '3rem',
        }}>
          <p style={{
            fontSize: '0.72rem',
            fontFamily: 'var(--font-geist-mono)',
            color: 'var(--muted)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            Stack
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
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
