"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useT } from "../../components/LanguageProvider";

const dict = {
  pt: {
    back: "← Projetos",
    title: "Influlens",
    intro: "Plataforma de monitoramento e analytics desenvolvida sob medida para a Câmara Municipal de São Paulo, que unifica Instagram, Facebook e YouTube em um painel com análise de sentimento por IA e relatórios automatizados.",
    cta: "Acessar Influlens →",
    contextTitle: "O Contexto e o Desafio",
    contextP1: "Equipes de comunicação que gerenciam múltiplas redes sociais enfrentam um problema logístico crônico: a fragmentação de dados. Cada plataforma possui seu próprio painel, suas definições de métricas e formas distintas de recortar períodos.",
    contextP2: "Em ambientes corporativos ou governamentais, onde a operação envolve múltiplas organizações, diversas contas e dezenas de perfis, consolidar esses dados torna-se um trabalho manual exaustivo. O uso de planilhas e exportações avulsas gera atrasos e imprecisões, e o custo de manter uma visão confiável do desempenho acaba ultrapassando a capacidade operacional da equipe.",
    solutionTitle: "A Solução",
    solutionP1: "Para resolver esse gargalo, a plataforma Influlens (também estruturada como CE Monitor) foi desenvolvida para a Câmara Municipal de São Paulo. O sistema centraliza Instagram, Facebook e YouTube em uma única plataforma de analytics, desenhada sob uma arquitetura hierárquica (Organizações → Contas → Perfis).",
    solutionP2: "O resultado é uma fonte única de verdade. Em vez de números isolados que não se conversam, a ferramenta entrega métricas padronizadas e comparáveis entre redes e períodos, oferecendo contexto histórico preciso para a tomada de decisão.",
    securityTitle: "Segurança e Privacidade (OAuth 2.0)",
    securityP1: "A comunicação com as redes é realizada de forma totalmente segura via OAuth 2.0 através das APIs oficiais (Facebook Graph e YouTube Data API). O escopo de acesso é restrito à leitura de métricas públicas: a plataforma não armazena senhas, não realiza postagens em nome do usuário e não acessa mensagens privadas. Todo o acesso é auditável e revogável a qualquer momento.",
    featuresTitle: "Funcionalidades Principais",
    features: [
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
    ],
    archTitle: "Arquitetura e Engenharia de Software",
    archP1: "A aplicação foi dividida em microsserviços para garantir escalabilidade e performance no processamento contínuo de dados das redes sociais.",
    archItems: [
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
    ],
  },
  en: {
    back: "← Projects",
    title: "Influlens",
    intro: "A monitoring and analytics platform built to order for the São Paulo City Council, unifying Instagram, Facebook, and YouTube into a single dashboard with AI-powered sentiment analysis and automated reporting.",
    cta: "Open Influlens →",
    contextTitle: "Context and Challenge",
    contextP1: "Communication teams managing multiple social networks face a chronic logistical problem: data fragmentation. Each platform has its own dashboard, its own metric definitions, and different ways of slicing time periods.",
    contextP2: "In corporate or government environments, where operations span multiple organizations, several accounts, and dozens of profiles, consolidating this data becomes an exhausting manual task. Relying on spreadsheets and ad-hoc exports creates delays and inaccuracies, and the cost of maintaining a reliable view of performance ends up exceeding the team's operational capacity.",
    solutionTitle: "The Solution",
    solutionP1: "To remove this bottleneck, the Influlens platform (also structured as CE Monitor) was developed for the São Paulo City Council. The system centralizes Instagram, Facebook, and YouTube into a single analytics platform, designed around a hierarchical architecture (Organizations → Accounts → Profiles).",
    solutionP2: "The result is a single source of truth. Instead of isolated numbers that don't talk to each other, the tool delivers standardized, comparable metrics across networks and time periods, providing precise historical context for decision-making.",
    securityTitle: "Security and Privacy (OAuth 2.0)",
    securityP1: "All communication with the networks is fully secured via OAuth 2.0 through the official APIs (Facebook Graph and YouTube Data API). The access scope is restricted to reading public metrics: the platform does not store passwords, does not post on the user's behalf, and does not access private messages. All access is auditable and revocable at any time.",
    featuresTitle: "Key Features",
    features: [
      {
        title: "Unified Dashboard",
        desc: "Reach, impressions, engagement, and interaction metrics in a single dashboard, with advanced filters and automatic comparison against previous periods.",
      },
      {
        title: "Campaign Management",
        desc: "Organization and monitoring of owned profiles and influencers. Allows grouping specific posts to analyze campaign performance as a whole, generating cross-platform comparison charts.",
      },
      {
        title: "AI Sentiment Analysis",
        desc: "Automated comment classification using Natural Language Processing. The system categorizes interactions as positive, neutral, or negative, building a historical series weighted by mention volume.",
      },
      {
        title: "Topic Monitoring",
        desc: "A social listening tool for tracking mentions over time, mapping total reach, breakdown by network, and how public opinion evolves over time.",
      },
      {
        title: "Automated Reports",
        desc: "Dynamic generation of customizable PDFs by network, profile, or metric, with stored history and scheduling functionality for recurring deliveries.",
      },
      {
        title: "Multi-Tenant Architecture",
        desc: "Multi-organization, multi-network structure, well suited to operations that need to manage several teams or public agencies in parallel.",
      },
    ],
    archTitle: "Architecture and Software Engineering",
    archP1: "The application was split into microservices to ensure scalability and performance for the continuous processing of social media data.",
    archItems: [
      {
        title: "Frontend (CE-APP)",
        desc: "Built in TypeScript using Angular 13 and Ionic 6, wrapped with Capacitor. This stack delivers a responsive, fluid interface ready for multi-device access.",
      },
      {
        title: "Backend (CE-Monitor)",
        desc: "An API built in JavaScript running on Node.js with Express.js. To handle asynchronous requests and the massive data ingestion from Google and Meta APIs, BullMQ was implemented for robust queue orchestration.",
      },
      {
        title: "Database and Cache",
        desc: "MySQL for persistent, relational storage of the organization and metrics structure, working alongside Redis to manage BullMQ queue state and optimize caching of frequent queries.",
      },
    ],
  },
};

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
            {t.cta}
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
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              {t.solutionP2}
            </p>
          </div>

          {/* Segurança */}
          <div>
            <h2 style={headingStyle}>{t.securityTitle}</h2>
            <p style={bodyStyle}>
              {t.securityP1}
            </p>
          </div>

          {/* Funcionalidades */}
          <div>
            <h2 style={headingStyle}>{t.featuresTitle}</h2>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
              {t.features.map((item) => (
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
            <h2 style={headingStyle}>{t.archTitle}</h2>
            <p style={bodyStyle}>
              {t.archP1}
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
              {t.archItems.map((item) => (
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
