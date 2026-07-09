import Image from "next/image";

const channels = [
  {
    label: "Email",
    value: "kaleukaleu34@gmail.com",
    href: "mailto:kaleukaleu34@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+55 15 99718-7246",
    href: "https://wa.me/5515997187246",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kaleu-lima",
    href: "https://www.linkedin.com/in/kaleu-lima/",
  },
  {
    label: "GitHub",
    value: "github.com/Kaleugit",
    href: "https://github.com/Kaleugit",
  },
];

export default function Contato() {
  return (
    <section style={{ padding: '8rem 2rem 5rem' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', width: '100%' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(0, 340px)',
          gap: '4rem',
          alignItems: 'start',
        }}>

          {/* Texto + canais */}
          <div>
            <p style={{
              fontSize: '0.72rem',
              fontFamily: 'var(--font-geist-mono)',
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              contato
            </p>

            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: 'var(--text)',
              marginBottom: '1rem',
            }}>
              Vamos conversar
            </h1>

            <p style={{
              fontSize: '1rem',
              color: 'var(--muted)',
              lineHeight: 1.65,
              marginBottom: '3rem',
            }}>
              Aberto a projetos freelance, posições full-time e colaborações.
              Respondo em até 24h.
            </p>

            <div style={{ borderTop: '1px solid var(--border)' }}>
              {channels.map(({ label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-row"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-geist-mono)',
                      color: 'var(--muted)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      minWidth: '4rem',
                    }}>
                      {label}
                    </span>
                    <span style={{ fontSize: '0.9375rem', color: 'var(--text)', fontWeight: 400 }}>
                      {value}
                    </span>
                  </div>
                  <span className="contact-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Foto */}
          <Image
            src="/bg2.jpeg"
            alt=""
            width={340}
            height={440}
            style={{ width: '100%', height: 'auto', borderRadius: '0.75rem', objectFit: 'cover' }}
          />

        </div>
      </div>
    </section>
  );
}
