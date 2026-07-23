"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";

const images = [
  { src: "/img9.png",  alt: "Influlens - dashboard unificado" },
  { src: "/img10.png", alt: "Influlens - métricas de engajamento" },
  { src: "/img11.png", alt: "Influlens - análise de sentimento" },
  { src: "/img12.png", alt: "Influlens - monitoramento de assuntos" },
  { src: "/img13.png", alt: "Influlens - gestão de campanhas" },
  { src: "/img14.png", alt: "Influlens - relatórios automatizados" },
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

export default function Influlens() {
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
              Influlens
            </h1>
            <p style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.65,
              maxWidth: "36rem",
            }}>
              Plataforma de monitoramento e analytics desenvolvida sob medida para a
              Câmara Municipal de São Paulo, que unifica Instagram, Facebook e YouTube
              em um painel com análise de sentimento por IA e relatórios automatizados.
            </p>
          </div>
          <span style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-geist-mono)",
            color: "var(--muted)",
            flexShrink: 0,
            paddingTop: "0.5rem",
          }}>
            2025/2026
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
            href="https://cemonitor.dev.redesampa.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
          >
            Acessar Influlens →
          </a>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {["Angular 13", "Ionic 6", "Capacitor", "Node.js", "BullMQ", "MySQL", "Redis"].map((tag) => (
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
            <h2 style={headingStyle}>O Contexto e o Desafio</h2>
            <p style={bodyStyle}>
              Equipes de comunicação que gerenciam múltiplas redes sociais enfrentam um
              problema logístico crônico: a fragmentação de dados. Cada plataforma possui
              seu próprio painel, suas definições de métricas e formas distintas de recortar
              períodos.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Em ambientes corporativos ou governamentais, onde a operação envolve múltiplas
              organizações, diversas contas e dezenas de perfis, consolidar esses dados
              torna-se um trabalho manual exaustivo. O uso de planilhas e exportações avulsas
              gera atrasos e imprecisões, e o custo de manter uma visão confiável do
              desempenho acaba ultrapassando a capacidade operacional da equipe.
            </p>
          </div>

          {/* Solução */}
          <div>
            <h2 style={headingStyle}>A Solução</h2>
            <p style={bodyStyle}>
              Para resolver esse gargalo, a plataforma Influlens (também estruturada como
              CE Monitor) foi desenvolvida para a Câmara Municipal de São Paulo. O sistema
              centraliza Instagram, Facebook e YouTube em uma única plataforma de analytics,
              desenhada sob uma arquitetura hierárquica (Organizações → Contas → Perfis).
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              O resultado é uma fonte única de verdade. Em vez de números isolados que
              não se conversam, a ferramenta entrega métricas padronizadas e comparáveis
              entre redes e períodos, oferecendo contexto histórico preciso para a tomada
              de decisão.
            </p>
          </div>

          {/* Segurança */}
          <div>
            <h2 style={headingStyle}>Segurança e Privacidade (OAuth 2.0)</h2>
            <p style={bodyStyle}>
              A comunicação com as redes é realizada de forma totalmente segura via OAuth 2.0
              através das APIs oficiais (Facebook Graph e YouTube Data API). O escopo de
              acesso é restrito à leitura de métricas públicas: a plataforma não armazena
              senhas, não realiza postagens em nome do usuário e não acessa mensagens privadas.
              Todo o acesso é auditável e revogável a qualquer momento.
            </p>
          </div>

          {/* Funcionalidades */}
          <div>
            <h2 style={headingStyle}>Funcionalidades Principais</h2>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
              {[
                {
                  title: "Dashboard Unificado",
                  desc: "Alcance, impressões, engajamento e métricas de interação em um painel único, com filtros avançados e comparação automática com períodos anteriores.",
                },
                {
                  title: "Gestão de Campanhas",
                  desc: "Organização e monitoramento de perfis próprios e influenciadores. Permite agrupar publicações específicas para analisar o desempenho de campanhas em conjunto, gerando gráficos comparativos cross-platform.",
                },
                {
                  title: "Análise de Sentimento por IA",
                  desc: "Classificação automatizada de comentários utilizando Processamento de Linguagem Natural. O sistema categoriza as interações em positivas, neutras ou negativas, gerando uma série histórica ponderada pelo volume de menções.",
                },
                {
                  title: "Monitoramento de Assuntos",
                  desc: "Ferramenta de social listening para acompanhar menções ao longo do tempo, mapeando o alcance total, a quebra por rede e a evolução temporal da opinião pública.",
                },
                {
                  title: "Relatórios Automatizados",
                  desc: "Geração dinâmica de PDFs customizáveis por rede, perfil ou métrica, com histórico armazenado e funcionalidade de agendamento para disparos recorrentes.",
                },
                {
                  title: "Arquitetura Multi-Tenant",
                  desc: "Estrutura multi-organização e multi-rede, adequada para operações que precisam gerenciar vários times ou órgãos públicos em paralelo.",
                },
              ].map((item) => (
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

          {/* Arquitetura */}
          <div>
            <h2 style={headingStyle}>Arquitetura e Engenharia de Software</h2>
            <p style={bodyStyle}>
              A aplicação foi dividida em microsserviços para garantir escalabilidade e
              performance no processamento contínuo de dados das redes sociais.
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
              {[
                {
                  title: "Frontend (CE-APP)",
                  desc: "Desenvolvido em TypeScript utilizando Angular 13 e Ionic 6, encapsulado pelo Capacitor. Essa stack garante uma interface responsiva, fluida e preparada para acesso multi-dispositivo.",
                },
                {
                  title: "Backend (CE-Monitor)",
                  desc: "API construída em JavaScript rodando em Node.js com Express.js. Para lidar com requisições assíncronas e a ingestão massiva de dados das APIs do Google e da Meta, foi implementado o BullMQ para orquestração robusta de filas.",
                },
                {
                  title: "Banco de Dados e Cache",
                  desc: "MySQL para o armazenamento persistente e relacional da estrutura de organizações e métricas, trabalhando em conjunto com o Redis para gerenciar o estado das filas do BullMQ e otimizar o cache de consultas frequentes.",
                },
              ].map((item) => (
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
