"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useT } from "../../components/LanguageProvider";

const dict = {
  pt: {
    back: "← Projetos",
    title: "A Casa do Patrão",
    description:
      'Jogo interativo desenvolvido para o evento de lançamento do reality show "A Casa do Patrão" (The Walt Disney Company e Record TV), projetado para engajar patrocinadores e imprensa.',
    accessBtn: "Acessar A Casa do Patrão →",
    contextHeading: "O Contexto e o Desafio",
    contextP1:
      '"A Casa do Patrão" é um reality show de grande porte produzido pela The Walt Disney Company em parceria com a Record, com transmissão em TV aberta e na plataforma de streaming Disney+.',
    contextP2:
      "Para o evento oficial de lançamento da atração, direcionado exclusivamente a patrocinadores e veículos de imprensa, o desafio foi criar uma experiência interativa que trouxesse um pouco do universo do programa. O jogo foi desenvolvido para rodar de forma fluida durante o evento presencial, servindo como uma ativação dinâmica para os convidados, com um atrativo prêmio para o melhor colocado do ranking.",
    contextP3:
      "Como se tratou de um projeto de ativação temporária e focada em um momento específico, o domínio oficial de produção foi descontinuado após o encerramento do evento (jogodopatrao.imsite.com.br).",
    contributionHeading: "Minha Contribuição",
    contributionP1:
      "Trabalhando em parceria direta com a IMsite, participei da implementação do ambiente interativo do jogo. Fui responsável pelo desenvolvimento completo do mapa em tempo real, pela modelagem e comportamento dos personagens, bem como pela mecânica e programação de todos os mini-games integrados à aplicação da versão curada disponibilizada aqui.",
    contributionP2:
      "Para este portfólio, desenvolvi uma versão de demonstração simplificada. Trata-se de uma réplica fiel da interface visual e das interações do jogo original, adaptada para funcionar de forma independente (client-side), sem a necessidade de conexão com o banco de dados de produção. O objetivo é demonstrar na prática os conceitos de computação gráfica na web e a fluidez do gameplay.",
    architectureHeading: "Arquitetura e Engenharia de Software",
    frontendLabel: "Motores Gráficos e Frontend",
    frontendItems: [
      {
        title: "Three.js",
        desc: "Utilizado para a construção e renderização do mapa principal do jogo. A integração foi realizada de forma leve utilizando ESM (importmap) diretamente no navegador, sem a necessidade de um empacotador (bundler) no build final.",
      },
      {
        title: "GSAP + DiceBear",
        desc: "Animações e geração de avatares procedurais integrados ao canvas Three.js.",
      },
      {
        title: "Troika-three-text",
        desc: "Renderização de texto em 3D integrada ao canvas Three.js.",
      },
    ],
    backendLabel: "Backend e APIs",
    backendItems: [
      {
        title: "Next.js 14 + Node.js Serverless",
        desc: "Framework e runtime para as funções de backend, gerenciamento de rotas de API e renderização server-side.",
      },
      {
        title: "Supabase (PostgreSQL)",
        desc: "Banco de dados relacional para persistência do ranking, autenticação e chamadas RPC seguras.",
      },
      {
        title: "Fila Offline com LocalStorage",
        desc: "Para mitigar problemas de oscilação de internet comuns em eventos corporativos presenciais, a autenticação tradicional foi desabilitada. Um sistema de fila offline salvava temporariamente a pontuação do jogador no navegador (localStorage) e, através de chamadas RPC seguras, sincronizava os dados com o banco assim que a conexão era restabelecida.",
      },
    ],
  },
  en: {
    back: "← Projects",
    title: "A Casa do Patrão",
    description:
      'Interactive game built for the launch event of the reality show "A Casa do Patrão" (The Walt Disney Company and Record TV), designed to engage sponsors and press.',
    accessBtn: "Visit A Casa do Patrão →",
    contextHeading: "The Context and the Challenge",
    contextP1:
      '"A Casa do Patrão" is a large-scale reality show produced by The Walt Disney Company in partnership with Record TV, broadcast on open TV and on the Disney+ streaming platform.',
    contextP2:
      "For the show's official launch event, aimed exclusively at sponsors and press outlets, the challenge was to create an interactive experience that brought a piece of the show's universe to life. The game was built to run smoothly throughout the in-person event, serving as a dynamic activation for guests, with an attractive prize for the top player on the leaderboard.",
    contextP3:
      "Since this was a temporary activation focused on a specific moment, the official production domain was discontinued after the event ended (jogodopatrao.imsite.com.br).",
    contributionHeading: "My Contribution",
    contributionP1:
      "Working in direct partnership with IMsite, I took part in implementing the game's interactive environment. I was responsible for the complete development of the real-time map, character modeling and behavior, as well as the mechanics and programming of all the mini-games integrated into the curated version available here.",
    contributionP2:
      "For this portfolio, I built a simplified demo version. It is a faithful replica of the original game's visual interface and interactions, adapted to run independently (client-side) without connecting to the production database. The goal is to showcase web graphics programming concepts and gameplay fluidity in practice.",
    architectureHeading: "Architecture and Software Engineering",
    frontendLabel: "Graphics Engines and Frontend",
    frontendItems: [
      {
        title: "Three.js",
        desc: "Used to build and render the game's main map. The integration was kept lightweight using ESM (importmap) directly in the browser, with no bundler required in the final build.",
      },
      {
        title: "GSAP + DiceBear",
        desc: "Animations and procedural avatar generation integrated into the Three.js canvas.",
      },
      {
        title: "Troika-three-text",
        desc: "3D text rendering integrated into the Three.js canvas.",
      },
    ],
    backendLabel: "Backend and APIs",
    backendItems: [
      {
        title: "Next.js 14 + Node.js Serverless",
        desc: "Framework and runtime for backend functions, API route management, and server-side rendering.",
      },
      {
        title: "Supabase (PostgreSQL)",
        desc: "Relational database for leaderboard persistence, authentication, and secure RPC calls.",
      },
      {
        title: "Offline Queue with LocalStorage",
        desc: "To mitigate the unstable internet connections common at in-person corporate events, traditional authentication was disabled. An offline queue system temporarily stored the player's score in the browser (localStorage) and, through secure RPC calls, synced the data with the database as soon as the connection was restored.",
      },
    ],
  },
};

const images = [
  { src: "/img3.png", alt: "A Casa do Patrão - mapa interativo" },
  { src: "/img4.png", alt: "A Casa do Patrão - mini-game" },
  { src: "/img5.png", alt: "A Casa do Patrão - ranking" },
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
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1rem" }}>
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

export default function ACasaDoPatrao() {
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
              {t.description}
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
            href="https://jogo-do-patrao-portifolio-curated-k.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
          >
            {t.accessBtn}
          </a>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {["Three.js", "Next.js 14", "Supabase", "Vercel"].map((tag) => (
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
            <h2 style={headingStyle}>{t.contextHeading}</h2>
            <p style={bodyStyle}>
              {t.contextP1}
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              {t.contextP2}
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              {t.contextP3}
            </p>
          </div>

          {/* Contribuição */}
          <div>
            <h2 style={headingStyle}>{t.contributionHeading}</h2>
            <p style={bodyStyle}>
              {t.contributionP1}
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              {t.contributionP2}
            </p>
          </div>

          {/* Arquitetura */}
          <div>
            <h2 style={headingStyle}>{t.architectureHeading}</h2>

            {/* Frontend */}
            <div style={{ marginTop: "1.5rem" }}>
              <p style={{
                fontSize: "0.72rem",
                fontFamily: "var(--font-geist-mono)",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                {t.frontendLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
                {t.frontendItems.map((item) => (
                  <div key={item.title} className="detail-row">
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

            {/* Backend */}
            <div style={{ marginTop: "2rem" }}>
              <p style={{
                fontSize: "0.72rem",
                fontFamily: "var(--font-geist-mono)",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}>
                {t.backendLabel}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
                {t.backendItems.map((item) => (
                  <div key={item.title} className="detail-row">
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
