'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const images = [
  '/bg3.jpeg', '/bg1.jpeg', '/bg4.jpeg', '/bg5.jpeg',
  '/bg6.jpeg', '/bg7.jpeg', '/bg8.jpeg',
];

const AUTO_INTERVAL = 10000;
const FREEZE_DURATION = 20000;
const FADE_DURATION = 400;

export default function AlternatingImage() {
  const [index, setIndex] = useState(0);
  const [frozen, setFrozen] = useState(false);
  const freezeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => setIndex(next);

  const handleImageClick = () => {
    setFrozen(true);
    if (freezeTimer.current) clearTimeout(freezeTimer.current);
    freezeTimer.current = setTimeout(() => setFrozen(false), FREEZE_DURATION);
  };

  useEffect(() => {
    if (frozen) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [frozen]);

  useEffect(() => () => { if (freezeTimer.current) clearTimeout(freezeTimer.current); }, []);

  return (
    <div style={{ width: '100%' }}>
      {/* Foto 9:16 */}
      <div
        onClick={handleImageClick}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '9 / 16',
          borderRadius: '0.75rem',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: i === index ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease`,
              zIndex: i === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Setas — fora da foto */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.75rem',
        marginTop: '0.875rem',
      }}>
        {[
          { label: '←', action: () => goTo((index - 1 + images.length) % images.length) },
          { label: '→', action: () => goTo((index + 1) % images.length) },
        ].map(({ label, action }) => (
          <button
            key={label}
            onClick={action}
            aria-label={label === '←' ? 'Anterior' : 'Próxima'}
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              backgroundColor: 'transparent',
              color: 'var(--muted)',
              fontSize: '0.8125rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text)';
              e.currentTarget.style.borderColor = 'var(--muted)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--muted)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
