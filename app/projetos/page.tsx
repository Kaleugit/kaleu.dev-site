const projects = [
  {
    title: "Projeto Alpha",
    description: "Plataforma SaaS para gestão de tarefas com autenticação, permissões por papel e dashboard em tempo real.",
    tags: ["Next.js", "PostgreSQL", "Stripe"],
    href: "#",
    year: "2024",
  },
  {
    title: "Projeto Beta",
    description: "API REST de alta disponibilidade com rate limiting, cache Redis e documentação OpenAPI gerada automaticamente.",
    tags: ["Node.js", "Redis", "Docker"],
    href: "#",
    year: "2024",
  },
  {
    title: "Projeto Gamma",
    description: "App mobile-first de finanças pessoais com gráficos interativos e sincronização offline.",
    tags: ["React", "TypeScript", "SQLite"],
    href: "#",
    year: "2023",
  },
  {
    title: "Projeto Delta",
    description: "E-commerce com integração de pagamento, painel admin e controle de estoque em tempo real.",
    tags: ["Next.js", "Prisma", "AWS S3"],
    href: "#",
    year: "2023",
  },
];

export default function Projetos() {
  return (
    <section style={{ padding: '8rem 2rem 5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', width: '100%' }}>

        {/* Header */}
        <p style={{
          fontSize: '0.72rem',
          fontFamily: 'var(--font-geist-mono)',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          projetos
        </p>

        <h1 style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          color: 'var(--text)',
          marginBottom: '3rem',
        }}>
          O que eu construí
        </h1>

        {/* Lista de projetos */}
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {projects.map((project, i) => (
            <a key={project.title} href={project.href} className="project-row">
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>

                <span className="project-num">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    gap: '1rem',
                    marginBottom: '0.5rem',
                  }}>
                    <h2 style={{
                      fontSize: '1.0625rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      letterSpacing: '-0.01em',
                    }}>
                      {project.title}
                    </h2>
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-geist-mono)',
                      color: 'var(--muted)',
                      flexShrink: 0,
                    }}>
                      {project.year}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                    marginBottom: '1rem',
                  }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <span className="project-arrow">Ver projeto →</span>
                  </div>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
