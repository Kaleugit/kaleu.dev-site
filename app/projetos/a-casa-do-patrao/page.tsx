"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/img3.png", alt: "A Casa do Patrão - mapa interativo" },
  { src: "/img4.png", alt: "A Casa do Patrão - mini-game" },
  { src: "/img5.png", alt: "A Casa do Patrão - ranking" },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div style={{ marginBottom: "4rem" }}>
      <div style={{
        position: "relative",
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
          aria-label="Imagem anterior"
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
          aria-label="Próxima imagem"
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
            aria-label={`Ir para imagem ${i + 1}`}
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
  return (
    <section style={{ padding: "8rem 2rem 6rem" }}>
      <div style={{ maxWidth: "56rem", margin: "0 auto", width: "100%" }}>

        {/* Voltar */}
        <Link href="/projetos" style={{
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
          ← Projetos
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
              A Casa do Patrão
            </h1>
            <p style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.65,
              maxWidth: "36rem",
            }}>
              Jogo interativo desenvolvido para o evento de lançamento do reality show
              "A Casa do Patrão" (The Walt Disney Company e Record TV), projetado para
              engajar patrocinadores e imprensa.
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
            Acessar A Casa do Patrão →
          </a>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {["Three.js", "Next.js 14", "Supabase", "Vercel"].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Carrossel */}
        <Carousel />

        {/* Conteúdo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* Contexto */}
          <div>
            <h2 style={headingStyle}>O Contexto e o Desafio</h2>
            <p style={bodyStyle}>
              "A Casa do Patrão" é um reality show de grande porte produzido pela The Walt
              Disney Company em parceria com a Record, com transmissão em TV aberta e na
              plataforma de streaming Disney+.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Para o evento oficial de lançamento da atração, direcionado exclusivamente a
              patrocinadores e veículos de imprensa, o desafio foi criar uma experiência
              interativa que trouxesse um pouco do universo do programa. O jogo foi
              desenvolvido para rodar de forma fluida durante o evento presencial, servindo
              como uma ativação dinâmica para os convidados, com um atrativo prêmio para
              o melhor colocado do ranking.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Como se tratou de um projeto de ativação temporária e focada em um momento
              específico, o domínio oficial de produção foi descontinuado após o
              encerramento do evento (jogodopatrao.imsite.com.br).
            </p>
          </div>

          {/* Contribuição */}
          <div>
            <h2 style={headingStyle}>Minha Contribuição</h2>
            <p style={bodyStyle}>
              Trabalhando em parceria direta com a IMsite, participei da implementação do
              ambiente interativo do jogo. Fui responsável pelo desenvolvimento completo
              do mapa em tempo real, pela modelagem e comportamento dos personagens, bem
              como pela mecânica e programação de todos os mini-games integrados à
              aplicação da versão curada disponibilizada aqui.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Para este portfólio, desenvolvi uma versão de demonstração simplificada.
              Trata-se de uma réplica fiel da interface visual e das interações do jogo
              original, adaptada para funcionar de forma independente (client-side), sem
              a necessidade de conexão com o banco de dados de produção. O objetivo é
              demonstrar na prática os conceitos de computação gráfica na web e a fluidez
              do gameplay.
            </p>
          </div>

          {/* Arquitetura */}
          <div>
            <h2 style={headingStyle}>Arquitetura e Engenharia de Software</h2>

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
                Motores Gráficos e Frontend
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
                {[
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
                ].map((item) => (
                  <div key={item.title} style={{
                    padding: "1.25rem 0",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                  }}>
                    <p style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      minWidth: "10rem",
                      flexShrink: 0,
                    }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6 }}>
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
                Backend e APIs
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
                {[
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
                ].map((item) => (
                  <div key={item.title} style={{
                    padding: "1.25rem 0",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                  }}>
                    <p style={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      minWidth: "10rem",
                      flexShrink: 0,
                    }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.6 }}>
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
