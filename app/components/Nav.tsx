'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLang, type Lang } from './LanguageProvider';

const links = [
  { href: '/sobre-mim', label: { pt: 'Sobre mim', en: 'About me' } },
  { href: '/projetos', label: { pt: 'Projetos', en: 'Projects' } },
  { href: '/contato', label: { pt: 'Contato', en: 'Contact' } },
];

export default function Nav() {
  const pathname = usePathname();
  const { lang, setLang } = useLang();

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'rgba(9, 9, 11, 0.8)',
      backdropFilter: 'blur(12px)',
    }}>
      <nav className="nav-inner">
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo2.png"
            alt="kaleu"
            width={90}
            height={40}
            className="nav-logo"
            style={{
              objectFit: 'contain',
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
            }}
          />
        </Link>

        <ul className="nav-list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="nav-link" data-active={pathname === href ? 'true' : 'false'}>
                {label[lang]}
              </Link>
            </li>
          ))}
          <li>
            <div className="lang-toggle" role="group" aria-label="Idioma / Language">
              {(['pt', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  data-active={lang === l ? 'true' : 'false'}
                  aria-pressed={lang === l}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
