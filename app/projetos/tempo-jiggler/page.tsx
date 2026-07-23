"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useT } from "../../components/LanguageProvider";

const dict = {
  pt: {
    back: "← Projetos",
    description:
      "Aplicativo desktop desenvolvido em Python para prevenir a inatividade do sistema operacional através de automação discreta de periféricos.",
    githubBtn: "Ver no GitHub →",
    contextHeading: "O Contexto e a Solução",
    contextP1:
      "O Tempo Jiggler é um utilitário de produtividade criado para resolver um problema cotidiano simples, mas recorrente: evitar que o computador entre em modo ocioso, ative o bloqueio de tela ou altere o status de presença em aplicativos de comunicação durante longos processos de leitura ou compilação.",
    contextP2:
      "Para resolver isso, desenvolvi uma aplicação desktop leve que simula interações humanas básicas diretamente com o sistema operacional, mantendo a máquina ativa sem interferir no fluxo de trabalho do usuário.",
    featuresHeading: "Funcionalidades Principais",
    featuresIntro: "O aplicativo conta com três módulos independentes de funcionamento:",
    features: [
      {
        title: "Mouse Jiggler",
        desc: "Executa micromovimentos automáticos no cursor do mouse a cada 30 segundos. O deslocamento é quase imperceptível a olho nu, mas suficiente para sinalizar atividade ao sistema operacional.",
      },
      {
        title: "Text Jiggler",
        desc: "Foca na automação de teclado, digitando e apagando caracteres sequencialmente em campos de texto, operando em intervalos de tempo configuráveis pelo usuário.",
      },
      {
        title: "Timer com Alarme",
        desc: "Um utilitário de contagem regressiva integrado. Ao zerar, emite um aviso sonoro.",
      },
    ],
    archHeading: "Arquitetura e Engenharia do Software",
    archItems: [
      {
        title: "Python 3 + CustomTkinter",
        desc: "A interface gráfica foi construída com CustomTkinter, que oferece componentes modernos e suporte nativo a temas claro e escuro, sobre a base do Tkinter padrão da biblioteca padrão do Python.",
      },
      {
        title: "PyAutoGUI + NumPy",
        desc: "PyAutoGUI controla o mouse e o teclado em nível de sistema operacional. NumPy é utilizado para gerar os vetores de micromovimento do cursor de forma eficiente, garantindo que os deslocamentos sejam orgânicos e dentro de limites seguros da tela.",
      },
      {
        title: "PyInstaller",
        desc: "A aplicação é empacotada em um único executável standalone via PyInstaller, eliminando a necessidade de o usuário final ter Python instalado.",
      },
    ],
    securityHeading: "Nota sobre Distribuição e Segurança",
    securityP1:
      "O software está empacotado e disponível para download. Por se tratar de um projeto pessoal, o executável foi gerado sem a assinatura de um certificado digital comercial da Microsoft. Como padrão de segurança contra arquivos desconhecidos, o Windows pode classificar o aplicativo como não reconhecido e bloquear a execução.",
    securityP2:
      "Para desenvolvedores e usuários com foco em segurança, o código-fonte está totalmente aberto. A recomendação é clonar o repositório e rodar o script diretamente pelo interpretador do Python, garantindo total transparência e controle sobre a execução.",
  },
  en: {
    back: "← Projects",
    description:
      "Desktop application built in Python to prevent operating system inactivity through discreet peripheral automation.",
    githubBtn: "View on GitHub →",
    contextHeading: "The Context and the Solution",
    contextP1:
      "Tempo Jiggler is a productivity utility created to solve a simple yet recurring everyday problem: preventing the computer from going idle, triggering the lock screen, or changing presence status in communication apps during long reading or compilation processes.",
    contextP2:
      "To solve this, I built a lightweight desktop application that simulates basic human interactions directly with the operating system, keeping the machine active without interfering with the user's workflow.",
    featuresHeading: "Key Features",
    featuresIntro: "The application features three independent operating modules:",
    features: [
      {
        title: "Mouse Jiggler",
        desc: "Performs automatic micro-movements of the mouse cursor every 30 seconds. The displacement is nearly imperceptible to the naked eye, but enough to signal activity to the operating system.",
      },
      {
        title: "Text Jiggler",
        desc: "Focuses on keyboard automation, sequentially typing and deleting characters in text fields, operating at user-configurable time intervals.",
      },
      {
        title: "Timer with Alarm",
        desc: "A built-in countdown utility. When it reaches zero, it emits an audible alert.",
      },
    ],
    archHeading: "Software Architecture and Engineering",
    archItems: [
      {
        title: "Python 3 + CustomTkinter",
        desc: "The graphical interface was built with CustomTkinter, which offers modern components and native light/dark theme support on top of Python's standard Tkinter library.",
      },
      {
        title: "PyAutoGUI + NumPy",
        desc: "PyAutoGUI controls the mouse and keyboard at the operating system level. NumPy is used to efficiently generate the cursor's micro-movement vectors, ensuring displacements are organic and within safe screen bounds.",
      },
      {
        title: "PyInstaller",
        desc: "The application is packaged into a single standalone executable via PyInstaller, eliminating the need for the end user to have Python installed.",
      },
    ],
    securityHeading: "Note on Distribution and Security",
    securityP1:
      "The software is packaged and available for download. As a personal project, the executable was generated without a commercial Microsoft digital certificate signature. As a security standard against unknown files, Windows may classify the application as unrecognized and block execution.",
    securityP2:
      "For developers and security-minded users, the source code is fully open. The recommendation is to clone the repository and run the script directly through the Python interpreter, ensuring full transparency and control over execution.",
  },
};

const images = [
  { src: "/img6.png", alt: "Tempo Jiggler - interface principal" },
  { src: "/img7.png", alt: "Tempo Jiggler - módulo Mouse Jiggler" },
  { src: "/img8.png", alt: "Tempo Jiggler - módulo Text Jiggler e Timer" },
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

export default function TempoJiggler() {
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
              Tempo Jiggler
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
            href="https://github.com/Kaleugit/tempo-jiggler"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
          >
            {t.githubBtn}
          </a>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {["Python 3", "CustomTkinter", "PyAutoGUI", "NumPy", "PyInstaller"].map((tag) => (
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
            <p style={bodyStyle}>{t.contextP1}</p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>{t.contextP2}</p>
          </div>

          {/* Funcionalidades */}
          <div>
            <h2 style={headingStyle}>{t.featuresHeading}</h2>
            <p style={bodyStyle}>{t.featuresIntro}</p>
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
            <h2 style={headingStyle}>{t.archHeading}</h2>
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

          {/* Nota de segurança */}
          <div>
            <h2 style={headingStyle}>{t.securityHeading}</h2>
            <p style={bodyStyle}>{t.securityP1}</p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>{t.securityP2}</p>
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
