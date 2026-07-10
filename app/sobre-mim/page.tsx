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
