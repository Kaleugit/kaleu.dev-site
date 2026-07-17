"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: "/img6.png", alt: "Tempo Jiggler - interface principal" },
  { src: "/img7.png", alt: "Tempo Jiggler - módulo Mouse Jiggler" },
  { src: "/img8.png", alt: "Tempo Jiggler - módulo Text Jiggler e Timer" },
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

export default function TempoJiggler() {
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
              Tempo Jiggler
            </h1>
            <p style={{
              fontSize: "1rem",
              color: "var(--muted)",
              lineHeight: 1.65,
              maxWidth: "36rem",
            }}>
              Aplicativo desktop desenvolvido em Python para prevenir a inatividade do
              sistema operacional através de automação discreta de periféricos.
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
            Ver no GitHub →
          </a>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {["Python 3", "CustomTkinter", "PyAutoGUI", "NumPy", "PyInstaller"].map((tag) => (
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
            <h2 style={headingStyle}>O Contexto e a Solução</h2>
            <p style={bodyStyle}>
              O Tempo Jiggler é um utilitário de produtividade criado para resolver um
              problema cotidiano simples, mas recorrente: evitar que o computador entre em
              modo ocioso, ative o bloqueio de tela ou altere o status de presença em
              aplicativos de comunicação durante longos processos de leitura ou compilação.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Para resolver isso, desenvolvi uma aplicação desktop leve que simula
              interações humanas básicas diretamente com o sistema operacional, mantendo a
              máquina ativa sem interferir no fluxo de trabalho do usuário.
            </p>
          </div>

          {/* Funcionalidades */}
          <div>
            <h2 style={headingStyle}>Funcionalidades Principais</h2>
            <p style={bodyStyle}>
              O aplicativo conta com três módulos independentes de funcionamento:
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
              {[
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

          {/* Arquitetura */}
          <div>
            <h2 style={headingStyle}>Arquitetura e Engenharia do Software</h2>
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--border)" }}>
              {[
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

          {/* Nota de segurança */}
          <div>
            <h2 style={headingStyle}>Nota sobre Distribuição e Segurança</h2>
            <p style={bodyStyle}>
              O software está empacotado e disponível para download. Por se tratar de um
              projeto pessoal, o executável foi gerado sem a assinatura de um certificado
              digital comercial da Microsoft. Como padrão de segurança contra arquivos
              desconhecidos, o Windows pode classificar o aplicativo como não reconhecido
              e bloquear a execução.
            </p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>
              Para desenvolvedores e usuários com foco em segurança, o código-fonte está
              totalmente aberto. A recomendação é clonar o repositório e rodar o script
              diretamente pelo interpretador do Python, garantindo total transparência e
              controle sobre a execução.
            </p>
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
