"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useT } from "../../components/LanguageProvider";

const dict = {
  pt: {
    back: "← Projetos",
    title: "Race Game",
    intro: "Jogo de corrida 1v1 side-scrolling no navegador, desenvolvido com Three.js puro, com física customizada, áudio procedural e modelagem gráfica 100% gerada via código.",
    cta: "Jogar agora →",
    github: "GitHub →",
    contextTitle: "O Contexto e o Desafio",
    contextP1: "Este projeto nasceu da vontade de explorar os limites da renderização 3D e da manipulação de dados diretamente no navegador, sem depender de engines ou frameworks de interface.",
    contextP2: "O desafio central foi criar um jogo de corrida fluido e imersivo, controlando um veículo com física de suspensão realista, onde a dependência de assets externos fosse reduzida a quase zero. O resultado é uma aplicação leve, rápida e que extrai o máximo desempenho das APIs nativas da web.",
    techTitle: "Destaques Técnicos e Engenharia",
    techP1: "O maior diferencial na arquitetura dessa aplicação é a forte dependência de geração procedural, tanto para a parte visual quanto para a sonora.",
    highlights: [
      {
        title: "Modelagem Procedural",
        desc: "O veículo (inspirado no clássico Toyota Bandeirante) foi construído inteiramente via código no Three.js, eliminando a necessidade de carregar arquivos 3D tradicionais (.glb). A malha foi montada com formas geométricas primitivas sobrepostas para eliminar costuras, com detalhes como janelas com clearcoat e faróis hemisféricos.",
      },
      {
        title: "Engenharia de Som",
        desc: "O jogo não utiliza arquivos de áudio pré-gravados para o motor. O som é sintetizado matematicamente em tempo real via Web Audio API. O sistema simula um motor de 4 marchas com transições dinâmicas de frequência, oscilações de RPM e um efeito de descompressão do turbo (blow-off) criado através da filtragem precisa de ruído branco.",
      },
      {
        title: "Física Customizada",
        desc: "A mecânica do carro não utiliza bibliotecas de física prontas. Foi implementado um sistema matemático próprio que calcula o comportamento independente da suspensão (mola-amortecedor), a influência da gravidade durante saltos e a interação da hitbox dinâmica 2D contra a malha do terreno gerado.",
      },
      {
        title: "Sistema de Partículas",
        desc: "A fumaça do escapamento é gerenciada por um pool otimizado de 100 sprites em Canvas API. A densidade, direção e turbulência das partículas reagem de forma dinâmica às ações do jogador, mudando com a ativação do turbo, aumento de velocidade ou durante manobras no ar.",
      },
      {
        title: "Lobby e Otimização",
        desc: "O menu inicial apresenta uma visualização 3D interativa do carro, suportando eventos de drag e zoom para mouse e touch. O loop principal da corrida foi desenhado para atualizar a telemetria, renderizar o cenário e processar a inteligência do bot inimigo sem comprometer a taxa de quadros do navegador.",
      },
    ],
    roadmapTitle: "Próximos Passos",
    roadmapP1: "A infraestrutura atual serve como MVP de um ecossistema competitivo. As próximas etapas focam em transformar a experiência individual em uma plataforma multiplayer.",
    roadmap: [
      {
        title: "PvP Online",
        desc: "Implementação de modo multiplayer em tempo real utilizando WebSockets para sincronização de estado entre jogadores.",
      },
      {
        title: "Ranking e Leaderboard",
        desc: "Sistema de pontuação persistente com tabela de classificação global e histórico de corridas por jogador.",
      },
      {
        title: "Economia Interna",
        desc: "Desenvolvimento de moeda virtual e sistema de apostas nas corridas, com potencial de evolução estrutural para uma plataforma competitiva.",
      },
    ],
  },
  en: {
    back: "← Projects",
    title: "Race Game",
    intro: "A 1v1 side-scrolling racing game in the browser, built with pure Three.js, featuring custom physics, procedural audio, and graphics modeled 100% through code.",
    cta: "Play now →",
    github: "GitHub →",
    contextTitle: "Context and Challenge",
    contextP1: "This project was born from the desire to push the limits of 3D rendering and data manipulation directly in the browser, without relying on game engines or UI frameworks.",
    contextP2: "The central challenge was to create a fluid, immersive racing game, controlling a vehicle with realistic suspension physics, while reducing the dependency on external assets to nearly zero. The result is a lightweight, fast application that squeezes maximum performance out of native web APIs.",
    techTitle: "Technical Highlights and Engineering",
    techP1: "The biggest differentiator in this application's architecture is its heavy reliance on procedural generation, for both visuals and sound.",
    highlights: [
      {
        title: "Procedural Modeling",
        desc: "The vehicle (inspired by the classic Toyota Bandeirante) was built entirely through code in Three.js, eliminating the need to load traditional 3D files (.glb). The mesh was assembled from overlapping primitive shapes to eliminate seams, with details such as clearcoat windows and hemispherical headlights.",
      },
      {
        title: "Sound Engineering",
        desc: "The game uses no pre-recorded audio files for the engine. The sound is mathematically synthesized in real time via the Web Audio API. The system simulates a 4-gear engine with dynamic frequency transitions, RPM oscillations, and a turbo blow-off effect created through precise white-noise filtering.",
      },
      {
        title: "Custom Physics",
        desc: "The car's mechanics do not rely on off-the-shelf physics libraries. A custom mathematical system computes the independent behavior of the suspension (spring-damper), the influence of gravity during jumps, and the interaction of a dynamic 2D hitbox against the generated terrain mesh.",
      },
      {
        title: "Particle System",
        desc: "The exhaust smoke is managed by an optimized pool of 100 sprites using the Canvas API. Particle density, direction, and turbulence react dynamically to the player's actions, changing with turbo activation, increased speed, or mid-air maneuvers.",
      },
      {
        title: "Lobby and Optimization",
        desc: "The main menu features an interactive 3D visualization of the car, supporting drag and zoom events for both mouse and touch. The main race loop was designed to update telemetry, render the scenery, and process the enemy bot's AI without compromising the browser's frame rate.",
      },
    ],
    roadmapTitle: "Next Steps",
    roadmapP1: "The current infrastructure serves as the MVP of a competitive ecosystem. The next steps focus on turning the single-player experience into a multiplayer platform.",
    roadmap: [
      {
        title: "Online PvP",
        desc: "Implementation of a real-time multiplayer mode using WebSockets for state synchronization between players.",
      },
      {
        title: "Ranking and Leaderboard",
        desc: "Persistent scoring system with a global leaderboard and per-player race history.",
      },
      {
        title: "In-Game Economy",
        desc: "Development of a virtual currency and race-betting system, with the structural potential to evolve into a competitive platform.",
      },
    ],
  },
};

const images = [
  { src: "/img15.png", alt: "Race Game - lobby 3D interativo" },
  { src: "/img16.png", alt: "Race Game - corrida side-scrolling" },
  { src: "/img17.png", alt: "Race Game - física de suspensão" },
  { src: "/img18.png", alt: "Race Game - sistema de partículas" },
  { src: "/img19.jpeg", alt: "Race Game - tela de resultado" },
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

export default function RaceGame() {
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

        {/* Stack + Links */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}>
          <a
            href="https://race-game-topaz.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
          >
            {t.cta}
          </a>
          <a
            href="https://github.com/Kaleugit/race-game"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.8125rem",
              color: "var(--muted)",
              textDecoration: "none",
              padding: "0.5rem 0",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            {t.github}
          </a>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {["Three.js", "Vite", "Web Audio API", "Canvas API", "JavaScript"].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Carrossel */}
        <div className="detail-media"><Carousel /></div>

        {/* Conteudo */}
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

          {/* Destaques Técnicos */}
          <div>
            <h2 style={headingStyle}>{t.techTitle}</h2>
            <p style={bodyStyle}>
              {t.techP1}
            </p>

            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
              {t.highlights.map((item) => (
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

          {/* Roadmap */}
          <div>
            <h2 style={headingStyle}>{t.roadmapTitle}</h2>
            <p style={bodyStyle}>
              {t.roadmapP1}
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
              {t.roadmap.map((item) => (
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
