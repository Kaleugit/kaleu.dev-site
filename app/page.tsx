import Link from "next/link";
import AlternatingImage from "./components/AlternatingImage";

export default function Home() {
  return (
    <section style={{
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      padding: '6rem 2rem 3rem',
    }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(0, 300px)',
          gap: '4rem',
          alignItems: 'center',
        }}>

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
                disponível para projetos
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
              Desenvolvedor full stack focado em interfaces limpas e sistemas que escalam.
              Construindo produtos do zero ao deploy.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link href="/projetos" className="btn-primary">Ver projetos</Link>
              <Link href="/contato" className="btn-ghost">Entrar em contato</Link>
            </div>
          </div>

          {/* Foto */}
          <AlternatingImage />

        </div>
      </div>
    </section>
  );
}
