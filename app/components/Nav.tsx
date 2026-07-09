'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/sobre-mim', label: 'Sobre mim' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/contato', label: 'Contato' },
];

export default function Nav() {
  const pathname = usePathname();

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
      <nav style={{
        maxWidth: '72rem',
        margin: '0 auto',
        padding: '0 2rem',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/logo2.png"
            alt="kaleu"
            width={90}
            height={40}
            style={{
              height: '2.5rem',
              width: 'auto',
              objectFit: 'contain',
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskComposite: 'source-in',
            }}
          />
        </Link>

        <ul style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none' }}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="nav-link" data-active={pathname === href ? 'true' : 'false'}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
