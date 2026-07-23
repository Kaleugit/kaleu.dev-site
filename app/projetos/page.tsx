"use client";

import Link from "next/link";
import { useT } from "../components/LanguageProvider";

const dict = {
  pt: {
    kicker: "projetos",
    title: "O que eu entreguei",
    view: "Ver projeto →",
    projects: [
      {
        title: "Influlens",
        description:
          "Plataforma de monitoramento e analytics desenvolvida sob medida para a Câmara Municipal de São Paulo, que unifica Instagram, Facebook e YouTube em um painel com análise de sentimento por IA e relatórios automatizados.",
        tags: ["Angular 13", "Ionic 6", "Node.js", "BullMQ", "MySQL", "Redis"],
        slug: "influlens",
        year: "2025/2026",
      },
      {
        title: "Tempo Jiggler",
        description:
          "Aplicativo desktop desenvolvido em Python para prevenir a inatividade do sistema operacional através de automação discreta de periféricos.",
        tags: ["Python 3", "CustomTkinter", "PyAutoGUI", "NumPy", "PyInstaller"],
        slug: "tempo-jiggler",
        year: "2026",
      },
      {
        title: "Moldura",
        description:
          "Adiciona bordas brancas ou pretas para impressão de fotos 15x10, preservando a composição e a proporção original.",
        tags: ["Next.js 16", "React 19"],
        slug: "moldura",
        year: "2026",
      },
      {
        title: "A Casa do Patrão",
        description:
          "Jogo interativo desenvolvido para o evento de lançamento do reality show \"A Casa do Patrão\" (The Walt Disney Company e Record TV), projetado para engajar patrocinadores e imprensa.",
        tags: ["Three.js", "Next.js 14", "Supabase", "Vercel"],
        slug: "a-casa-do-patrao",
        year: "2026",
      },
      {
        title: "Race Game",
        description:
          "Jogo de corrida 1v1 side-scrolling no navegador, desenvolvido com Three.js puro, com física customizada, áudio procedural e modelagem gráfica 100% gerada via código.",
        tags: ["Three.js", "Vite", "Web Audio API", "Canvas API", "JavaScript"],
        slug: "race-game",
        year: "2026",
      },
    ],
  },
  en: {
    kicker: "projects",
    title: "What I've delivered",
    view: "View project →",
    projects: [
      {
        title: "Influlens",
        description:
          "Monitoring and analytics platform custom-built for the São Paulo City Council, unifying Instagram, Facebook and YouTube into a single dashboard with AI sentiment analysis and automated reports.",
        tags: ["Angular 13", "Ionic 6", "Node.js", "BullMQ", "MySQL", "Redis"],
        slug: "influlens",
        year: "2025/2026",
      },
      {
        title: "Tempo Jiggler",
        description:
          "Desktop application built in Python to prevent operating system inactivity through discreet peripheral automation.",
        tags: ["Python 3", "CustomTkinter", "PyAutoGUI", "NumPy", "PyInstaller"],
        slug: "tempo-jiggler",
        year: "2026",
      },
      {
        title: "Moldura",
        description:
          "Adds white or black borders for 15x10 photo printing, preserving the original composition and aspect ratio.",
        tags: ["Next.js 16", "React 19"],
        slug: "moldura",
        year: "2026",
      },
      {
        title: "A Casa do Patrão",
        description:
          "Interactive game built for the launch event of the reality show \"A Casa do Patrão\" (The Walt Disney Company and Record TV), designed to engage sponsors and press.",
        tags: ["Three.js", "Next.js 14", "Supabase", "Vercel"],
        slug: "a-casa-do-patrao",
        year: "2026",
      },
      {
        title: "Race Game",
        description:
          "1v1 side-scrolling racing game in the browser, built with pure Three.js, featuring custom physics, procedural audio and graphics 100% generated through code.",
        tags: ["Three.js", "Vite", "Web Audio API", "Canvas API", "JavaScript"],
        slug: "race-game",
        year: "2026",
      },
    ],
  },
};

export default function Projetos() {
  const t = useT(dict);
  return (
    <section className="page-section">
      <div style={{ maxWidth: "56rem", margin: "0 auto", width: "100%" }}>

        <p style={{
          fontSize: "0.72rem",
          fontFamily: "var(--font-geist-mono)",
          color: "var(--accent)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}>
          {t.kicker}
        </p>

        <h1 style={{
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 600,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          color: "var(--text)",
          marginBottom: "3rem",
        }}>
          {t.title}
        </h1>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {t.projects.map((project) => (
            <Link key={project.slug} href={`/projetos/${project.slug}`} className="project-row">
              <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "0.5rem",
                  }}>
                    <h2 style={{
                      fontSize: "1.0625rem",
                      fontWeight: 500,
                      color: "var(--text)",
                      letterSpacing: "-0.01em",
                    }}>
                      {project.title}
                    </h2>
                    <span style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-geist-mono)",
                      color: "var(--muted)",
                      flexShrink: 0,
                    }}>
                      {project.year}
                    </span>
                  </div>

                  <p style={{
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    marginBottom: "1rem",
                  }}>
                    {project.description}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <span className="project-arrow">{t.view}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
