"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useT } from "../../components/LanguageProvider";

const dict = {
  pt: {
    back: "← Projetos",
    title: "Jobscope",
    intro: "Rastreador de candidaturas que transforma um link de vaga em dados acionáveis: um pipeline assíncrono na AWS lê a página, extrai as skills exigidas e cruza com o seu currículo para mostrar o gap entre o que o mercado pede e o que você tem.",
    cta: "Ver ao vivo →",
    github: "GitHub →",
    testLogin: "login de teste: admin / admin",
    contextTitle: "O Contexto e o Desafio",
    contextP1: "A busca por emprego é cega: você aplica para dezenas de vagas sem saber quais skills se repetem no mercado que está mirando, e adaptar o currículo para cada vaga à mão é caro demais para ser viável. O Jobscope resolve isso invertendo o fluxo — você cola a URL da vaga e um pipeline assíncrono lê a página, identifica empresa e cargo e extrai as skills exigidas. Ao enviar seu currículo, o dashboard cruza o que o mercado pede com o que você tem.",
    contextP2: "O desafio técnico foi rodar tudo isso 100% serverless, com a infraestrutura inteira versionada como código e custo mensal zero, dentro do free tier da AWS.",
    techTitle: "Destaques Técnicos e Engenharia",
    techP1: "O diferencial do projeto não está no CRUD, mas na engenharia ao redor: extração via LLM sem scraper, processamento fora do caminho da requisição e uma infraestrutura inteira definida em código, com deploy automático sem chaves de acesso.",
    highlights: [
      {
        title: "Intake por URL",
        desc: "Você cola o link e o modelo (Google Gemini com url_context) busca e lê a própria página da vaga — não há scraper para manter nem formulário para preencher. O currículo em PDF é lido nativamente pelo mesmo pipeline e vira um perfil estruturado: nome, cargo, localização e skills.",
      },
      {
        title: "Pipeline Assíncrono",
        desc: "Tanto a vaga quanto o currículo são processados fora do caminho da requisição via SQS + Lambda, com DLQ e partial batch failures para retries seguros. A UI responde imediatamente e os resultados vão preenchendo conforme chegam. O upload do currículo vai por presigned PUT direto para o S3, sem passar pelo API Gateway.",
      },
      {
        title: "Dashboard de Skill Gap",
        desc: "As skills pedidas pelas vagas são cruzadas com o seu perfil: o que você tem, o que falta ranqueado pela frequência com que o mercado pede, um score de aderência por vaga e as skills que você domina e ninguém pede.",
      },
      {
        title: "cv-maker",
        desc: "Gera currículo e carta de apresentação escritos para uma vaga específica, selecionando conteúdo de um perfil-mestre — nada inventado, para que toda afirmação sobreviva à entrevista. Ambos respeitam regras de ATS e o limite de uma página, com preview A4 lado a lado mostrando a ocupação real da página medida pelo navegador e um relatório de cobertura do que entrou, do que faltou e do que foi cortado.",
      },
      {
        title: "Infraestrutura 100% Código",
        desc: "Toda a stack é AWS CDK em TypeScript: CloudFront + S3 privado (OAC), API Gateway HTTP API, Lambda em Node 22 e DynamoDB single-table on-demand. Um comando sobe tudo. Custo mensal: zero, dentro do free tier da AWS e do Gemini.",
      },
      {
        title: "CI/CD sem Chaves de Acesso",
        desc: "O deploy é automático via GitHub Actions assumindo uma role IAM por OIDC — nenhuma credencial guardada no repositório. Isso rendeu um bug de produção real: o subject claim do OIDC do GitHub embute IDs numéricos, e a trust policy só passou a casar depois de ser escopada para a forma com IDs, diagnosticada via CloudTrail.",
      },
    ],
    roadmapTitle: "Próximos Passos",
    roadmapP1: "O aplicativo hoje é single-user. As próximas etapas abrem a plataforma para mais gente sem mudar a arquitetura.",
    roadmap: [
      {
        title: "Autenticação e Multiusuário",
        desc: "Integração com Amazon Cognito para login e suporte a múltiplos usuários, cada um com seu perfil e suas candidaturas.",
      },
      {
        title: "LLM Intercambiável",
        desc: "O módulo de extração é agnóstico de provedor: trocar o Google Gemini por Amazon Bedrock não exige mudanças no resto da stack.",
      },
    ],
  },
  en: {
    back: "← Projects",
    title: "Jobscope",
    intro: "Job application tracker that turns a posting link into actionable data: an async AWS pipeline reads the page, extracts the required skills and matches them against your resume to show the gap between what the market asks for and what you have.",
    cta: "View live →",
    github: "GitHub →",
    testLogin: "test login: admin / admin",
    contextTitle: "Context and Challenge",
    contextP1: "Job hunting is blind: you apply to dozens of postings without knowing which skills keep repeating in the market you're aiming at, and tailoring your resume for each posting by hand is too expensive to be viable. Jobscope solves this by inverting the flow — you paste the posting URL and an async pipeline reads the page, identifies company and role, and extracts the required skills. Once you upload your resume, the dashboard matches what the market asks for against what you have.",
    contextP2: "The technical challenge was running all of it 100% serverless, with the entire infrastructure versioned as code and a monthly cost of zero, inside the AWS free tier.",
    techTitle: "Technical Highlights and Engineering",
    techP1: "The project's differentiator is not the CRUD, but the engineering around it: LLM-based extraction with no scraper, processing off the request path, and an entire infrastructure defined in code with automatic deploys and no stored access keys.",
    highlights: [
      {
        title: "URL-only Intake",
        desc: "You paste the link and the model (Google Gemini with url_context) fetches and reads the posting page itself — no scraper to maintain, no form to fill in. The PDF resume is read natively by the same pipeline and becomes a structured profile: name, title, location and skills.",
      },
      {
        title: "Async Pipeline",
        desc: "Both the posting and the resume are processed off the request path through SQS + Lambda, with a DLQ and partial batch failures for safe retries. The UI answers immediately and fills in as results land. The resume upload goes through a presigned PUT straight to S3, never passing through API Gateway.",
      },
      {
        title: "Skill Gap Dashboard",
        desc: "Requested skills are matched against your profile: what you have, what you're missing ranked by how often the market asks for it, a match score per application, and the skills you master that nobody asks for.",
      },
      {
        title: "cv-maker",
        desc: "Generates a resume and cover letter written for one specific posting, selecting content from a master profile — nothing invented, so every claim survives the interview. Both are checked against ATS rules and a one-page limit, with a side-by-side A4 preview showing the real page occupancy as measured by the browser, and a coverage report of what made it in, what was missing and what was cut.",
      },
      {
        title: "Infrastructure as 100% Code",
        desc: "The whole stack is AWS CDK in TypeScript: CloudFront + private S3 (OAC), API Gateway HTTP API, Lambda on Node 22 and single-table on-demand DynamoDB. One command deploys everything. Monthly cost: zero, inside the AWS and Gemini free tiers.",
      },
      {
        title: "CI/CD with No Access Keys",
        desc: "Deploys run automatically through GitHub Actions assuming an IAM role via OIDC — no credentials stored in the repository. It even surfaced a real production bug: GitHub's OIDC subject claim embeds numeric IDs, and the trust policy only matched after being scoped to the ID form, diagnosed through CloudTrail.",
      },
    ],
    roadmapTitle: "Next Steps",
    roadmapP1: "The app is currently single-user. The next steps open the platform up without changing the architecture.",
    roadmap: [
      {
        title: "Auth and Multi-user",
        desc: "Amazon Cognito integration for login and multi-user support, each with their own profile and applications.",
      },
      {
        title: "Swappable LLM",
        desc: "The extraction module is provider-agnostic: swapping Google Gemini for Amazon Bedrock requires no changes to the rest of the stack.",
      },
    ],
  },
};

const images = [
  { src: "/img20.png", alt: "Jobscope - dashboard com perfil e skills mais pedidas pelo mercado" },
  { src: "/img21.png", alt: "Jobscope - candidaturas com skills extraídas de cada vaga" },
  { src: "/img22.png", alt: "Jobscope - cv-maker com perfil-mestre" },
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

export default function Jobscope() {
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
            href="https://d1kvuqf3mt7qda.cloudfront.net"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
          >
            {t.cta}
          </a>
          <span style={{
            fontSize: "0.72rem",
            fontFamily: "var(--font-geist-mono)",
            color: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: "0.375rem",
            padding: "0.35rem 0.6rem",
          }}>
            {t.testLogin}
          </span>
          <a
            href="https://github.com/Kaleugit/jobscope"
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
            {["AWS CDK", "TypeScript", "Node.js", "AWS Lambda", "API Gateway", "DynamoDB", "Amazon S3", "CloudFront", "Amazon SQS", "GitHub Actions", "OIDC", "React", "Vite", "Google Gemini"].map((tag) => (
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
