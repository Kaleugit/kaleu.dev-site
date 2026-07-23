"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useT } from "../../components/LanguageProvider";

const dict = {
  pt: {
    back: "← Projetos",
    title: "Moldura",
    intro: "Adiciona bordas brancas ou pretas para impressão de fotos 15x10, preservando a composição e a proporção original.",
    cta: "Acessar Moldura →",
    contextTitle: "O Contexto e o Problema",
    contextP1: "Como entusiasta da fotografia, acredito que imprimir e guardar fotos fisicamente é uma experiência incrível, especialmente para presentear pessoas queridas. No entanto, ao tentar imprimir minhas fotos, me deparei com um problema técnico no mercado que prejudicava muito o resultado final.",
    contextP2: "Enquanto o padrão de revelação física das gráficas utiliza a proporção 15:10 (herança das câmeras analógicas), a grande maioria dos smartphones captura imagens na proporção 16:9. Para compensar essa diferença, as empresas de impressão aplicam cortes automáticos para forçar o encaixe da foto no papel. Isso destrói a composição original da imagem e, devido ao processamento em lote agressivo, frequentemente resulta em perda de qualidade.",
    solutionTitle: "A Solução",
    solutionP1: "Para resolver essa incompatibilidade sem comprometer as imagens, desenvolvi o Moldura. Uma ferramenta simples, rápida e eficiente que prepara fotos digitais para o formato de impressão sem realizar nenhum corte, adicionando um preenchimento inteligente.",
    featuresTitle: "Funcionalidades Principais",
    features: [
      {
        title: "Preservação da Composição",
        desc: "Adiciona molduras (brancas ou pretas) para adaptar qualquer proporção para 15:10 sem cortar a imagem.",
      },
      {
        title: "Orientação Dinâmica",
        desc: "Ajuste manual para fotos na horizontal ou vertical.",
      },
      {
        title: "Produtividade",
        desc: "Suporte completo para upload e download de imagens em lote, mantendo a qualidade original.",
      },
      {
        title: "Acessibilidade",
        desc: "Interface internacionalizada, disponível em Português e Inglês.",
      },
    ],
    techTitle: "Destaque Técnico: Privacidade e Performance",
    techP1: "Um dos maiores diferenciais da aplicação é a sua arquitetura. Toda a lógica de manipulação e ajuste das imagens acontece exclusivamente no navegador (client-side). Nenhuma foto é enviada para servidores externos, o que garante três pilares fundamentais:",
    pillars: [
      {
        title: "Privacidade Absoluta",
        desc: "O usuário tem controle total sobre seus arquivos em sua própria máquina.",
      },
      {
        title: "Segurança",
        desc: "Zero risco de interceptação ou vazamento de dados e fotos pessoais.",
      },
      {
        title: "Agilidade",
        desc: "Processamento imediato, sem o tempo de espera tradicional de upload e download em servidores de terceiros.",
      },
    ],
  },
  en: {
    back: "← Projects",
    title: "Moldura",
    intro: "Adds white or black borders for 15x10 photo printing, preserving the original composition and aspect ratio.",
    cta: "Open Moldura →",
    contextTitle: "Context and Problem",
    contextP1: "As a photography enthusiast, I believe that printing and keeping physical photos is an incredible experience, especially as a gift for loved ones. However, when trying to print my own photos, I ran into a technical problem in the market that severely compromised the final result.",
    contextP2: "While print shops use the 15:10 aspect ratio as their physical printing standard (a legacy of analog cameras), the vast majority of smartphones capture images at 16:9. To compensate for this difference, printing companies apply automatic crops to force the photo to fit the paper. This destroys the image's original composition and, due to aggressive batch processing, frequently results in quality loss.",
    solutionTitle: "The Solution",
    solutionP1: "To solve this incompatibility without compromising the images, I built Moldura. A simple, fast, and efficient tool that prepares digital photos for print format without any cropping, by adding smart padding instead.",
    featuresTitle: "Key Features",
    features: [
      {
        title: "Composition Preservation",
        desc: "Adds borders (white or black) to adapt any aspect ratio to 15:10 without cropping the image.",
      },
      {
        title: "Dynamic Orientation",
        desc: "Manual adjustment for horizontal or vertical photos.",
      },
      {
        title: "Productivity",
        desc: "Full support for batch image upload and download, preserving the original quality.",
      },
      {
        title: "Accessibility",
        desc: "Internationalized interface, available in Portuguese and English.",
      },
    ],
    techTitle: "Technical Highlight: Privacy and Performance",
    techP1: "One of the application's biggest differentiators is its architecture. All image manipulation and adjustment logic runs exclusively in the browser (client-side). No photo is ever sent to external servers, which guarantees three fundamental pillars:",
    pillars: [
      {
        title: "Absolute Privacy",
        desc: "Users keep full control over their files on their own machine.",
      },
      {
        title: "Security",
        desc: "Zero risk of interception or leakage of personal data and photos.",
      },
      {
        title: "Speed",
        desc: "Instant processing, with none of the traditional wait times for uploading and downloading through third-party servers.",
      },
    ],
  },
};

const images = [
  { src: "/img1.png", alt: "Moldura - tela principal" },
  { src: "/img2.png", alt: "Moldura - upload em lote" },
  { src: "/ima3.jpeg", alt: "Moldura - resultado final" },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const touchStart = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(dx) > 45) (dx < 0 ? next : prev)();
  };


  return (
    <div style={{ marginBottom: "4rem" }}>
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{
        position: "relative",
        touchAction: "pan-y",
        width: "100%",
        aspectRatio: "16/9",
        background: "var(--surface)",
        borderRadius: "0.5rem",
        overflow: "hidden",
        border: "1px solid var(--border)",
      }}>
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          style={{ objectFit: "contain" }}
          priority={current === 0}
        />

        <button
          onClick={prev}
          className="carousel-nav" aria-label="Imagem anterior"
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(9,9,11,0.7)",
            border: "1px solid var(--border)",
            borderRadius: "0.375rem",
            color: "var(--text)",
            padding: "0.5rem 0.75rem",
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: 1,
          }}
        >
          ←
        </button>

        <button
          onClick={next}
          className="carousel-nav" aria-label="Próxima imagem"
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(9,9,11,0.7)",
            border: "1px solid var(--border)",
            borderRadius: "0.375rem",
            color: "var(--text)",
            padding: "0.5rem 0.75rem",
            cursor: "pointer",
            fontSize: "1rem",
            lineHeight: 1,
          }}
        >
          →
        </button>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        marginTop: "1rem",
      }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="carousel-dot" aria-label={`Ir para imagem ${i + 1}`}
            style={{
              width: "0.5rem",
              height: "0.5rem",
              borderRadius: "50%",
              border: "none",
              background: i === current ? "var(--text)" : "var(--border)",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.15s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Moldura() {
  const t = useT(dict);
  return (
    <section className="detail-section">
      <div className="detail-container" style={{ maxWidth: "56rem", margin: "0 auto", width: "100%" }}>

        {/* Voltar */}
        <Link href="/projetos" className="detail-back" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.875rem",
          color: "var(--muted)",
          textDecoration: "none",
          marginBottom: "3rem",
          transition: "color 0.15s ease",
        }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
        >
          {t.back}
        </Link>

        {/* Cabeçalho */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "2rem",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}>
          <div>
            <h1 style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}>
              {t.title}
            </h1>
            <p style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.65,
              maxWidth: "36rem",
            }}>
              {t.intro}
            </p>
          </div>
          <span style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-geist-mono)",
            color: "var(--muted)",
            flexShrink: 0,
            paddingTop: "0.5rem",
          }}>
            2026
          </span>
        </div>

        {/* Stack + Link */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}>
          <a
            href="https://ajuste-de-moldura.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
          >
            {t.cta}
          </a>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {["Next.js 16", "React 19", "Vercel"].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Carrossel */}
        <div className="detail-media"><Carousel /></div>

        {/* Conteúdo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* Contexto */}
          <div>
            <h2 style={headingStyle}>{t.contextTitle}</h2>
            <p style={bodyStyle}>
              {t.contextP1}
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              {t.contextP2}
            </p>
          </div>

          {/* Solução */}
          <div>
            <h2 style={headingStyle}>{t.solutionTitle}</h2>
            <p style={bodyStyle}>
              {t.solutionP1}
            </p>
          </div>

          {/* Funcionalidades */}
          <div>
            <h2 style={headingStyle}>{t.featuresTitle}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
              {t.features.map((item) => (
                <div key={item.title} style={{
                  padding: "1.25rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                }}>
                  <p style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--text)",
                    marginBottom: "0.375rem",
                  }}>
                    {item.title}
                  </p>
                  <p className="detail-row-desc">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Destaque Técnico */}
          <div>
            <h2 style={headingStyle}>{t.techTitle}</h2>
            <p style={bodyStyle}>
              {t.techP1}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
              {t.pillars.map((item) => (
                <div key={item.title} style={{
                  padding: "1.25rem 0",
                  borderBottom: "1px solid var(--border)",
                  display: "flex",
                  gap: "2rem",
                  alignItems: "baseline",
                }}>
                  <p className="detail-row-title">
                    {item.title}
                  </p>
                  <p className="detail-row-desc">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const headingStyle: React.CSSProperties = {
  fontSize: "1.125rem",
  fontWeight: 600,
  color: "var(--text)",
  letterSpacing: "-0.01em",
  marginBottom: "0.75rem",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "0.9375rem",
  color: "var(--muted)",
  lineHeight: 1.75,
};
