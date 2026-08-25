"use client";

import Link from "next/link";
import Image from "next/image";
import { useT } from "../../components/LanguageProvider";

const dict = {
  pt: {
    back: "← Projetos",
    title: "fastin",
    intro: "App Android de controle de jejum intermitente. Offline por construção, distribuído por sideload — sem backend, sem login e sem permissão de internet no manifesto.",
    cta: "Ver no GitHub →",
    contextTitle: "O Contexto e o Problema",
    contextP1: "Eu acompanhava meu jejum intermitente em planilha, e a planilha não resolvia a única pergunta que importava no meio da manhã: há quanto tempo eu estou sem comer? Os apps do mercado resolviam isso, mas todos pediam conta, mandavam meus dados de saúde para um servidor e monetizavam com assinatura.",
    contextP2: "O incômodo não era o preço. Um registro diário de peso, alimentação e jejum é um dado íntimo, e não havia motivo técnico para ele sair do meu aparelho — o app não precisa de nada além do meu próprio histórico para funcionar.",
    solutionTitle: "A Solução",
    solutionP1: "Um app nativo que roda inteiramente no dispositivo. O manifesto não declara a permissão de INTERNET: o app funciona em modo avião por construção, não por promessa. Sem Play Store, sem Play Services, sem conta.",
    solutionP2: "A regra central é mais sutil do que parece: o jejum de um dia começa na última refeição do dia anterior e termina na primeira refeição do dia atual. Ele atravessa a meia-noite por definição, e num país com horário de verão a duração real diverge do relógio de parede. Um jejum de 20:00 às 12:00 marca 16h no relógio, mas 17h reais quando o país sai do horário de verão naquela noite.",
    featuresTitle: "Funcionalidades",
    features: [
      {
        title: "Relógio de jejum em tempo real",
        desc: "Conta o tempo desde a última refeição registrada, com os marcos de 16h, 18h, 20h e 24h e o horário previsto de cada um.",
      },
      {
        title: "Registro diário sem campo obrigatório",
        desc: "Horários das refeições, déficit calórico, qualidade, água, álcool, peso e observações. Todos opcionais — tocar de novo num chip já marcado limpa o campo.",
      },
      {
        title: "Dashboard configurável",
        desc: "O usuário adiciona, remove e configura cards: linha, dispersão, heatmap e número grande, sobre sete métricas e cinco períodos.",
      },
      {
        title: "Backup em CSV",
        desc: "Export e import simétricos. É o único backup que existe, e o Auto Backup do Android está desligado de propósito — um log de saúde não vai para a nuvem sem o usuário pedir.",
      },
      {
        title: "Notificações locais",
        desc: "Avisos ao bater 16h, 18h e 20h via WorkManager, sem rede e sem Play Services. O worker revalida o jejum antes de notificar: se você já comeu, o aviso não dispara.",
      },
    ],
    techTitle: "Destaque Técnico: testar um app Android sem emulador",
    techP1: "Desenvolvi o app numa máquina Windows ARM64, e no meio do caminho descobri que o Google não publica o emulador Android para essa plataforma — o pacote nem aparece no SDK manager. O Robolectric, que roda testes de Android na JVM, também só publica binário nativo para x86_64 no Windows, e uma JVM ARM64 não carrega DLL x64.",
    techP2: "A saída foi isolar o problema onde ele realmente existe: apenas a JVM de teste roda em x64. Compilação, Kotlin, KSP, R8 e o empacotamento do APK seguem em ARM64 nativo — o APK entregue nunca passa por emulação. Com isso, os 90 testes rodam na JVM, sem aparelho conectado.",
    techP3: "Para ver as telas, cada uma é composta e desenhada de verdade num bitmap e salva em PNG. Isso virou também um teste de renderização: uma tela que quebrasse ao medir ou desenhar falharia ali, e nenhum outro teste pegaria — os demais consultam a árvore de semântica, que existe mesmo quando o desenho falha.",
    lessonTitle: "O bug que quase não apareceu",
    lessonP1: "Num teste de formulário, o botão salvar ficava abaixo da dobra na tela pequena do ambiente de teste. O toque caía fora da janela e era descartado em silêncio — sem exceção, sem aviso. O salvamento nunca acontecia, e os testes que afirmavam \"o banco continua vazio\" passavam. Dois testes verdes provando exatamente nada.",
    lessonP2: "A correção não foi só rolar até o elemento antes de tocar. Foi adotar como regra que toda asserção que exige um efeito tenha um par que exige a ausência dele. Sem esse par, uma função quebrada continua passando para sempre. A mesma disciplina revelou depois um vazamento entre testes e uma recursão infinita — e, nas screenshots, que o calendário virava uma parede de laranja com uso real.",
    numbersTitle: "Números",
    numbers: [
      { label: "Testes na JVM", value: "90" },
      { label: "Tamanho do APK", value: "1,5 MB" },
      { label: "Permissões de rede", value: "0" },
      { label: "ADRs documentados", value: "9" },
    ],
  },
  en: {
    back: "← Projects",
    title: "fastin",
    intro: "Android intermittent fasting tracker. Offline by construction, distributed via sideload — no backend, no login and no internet permission in the manifest.",
    cta: "View on GitHub →",
    contextTitle: "Context and Problem",
    contextP1: "I was tracking my intermittent fasting in a spreadsheet, and the spreadsheet didn't answer the one question that mattered mid-morning: how long have I gone without eating? The apps on the market answered it, but all of them wanted an account, shipped my health data to a server and monetized through subscriptions.",
    contextP2: "The problem wasn't the price. A daily log of weight, meals and fasting is intimate data, and there was no technical reason for it to leave my device — the app needs nothing beyond my own history to work.",
    solutionTitle: "The Solution",
    solutionP1: "A native app that runs entirely on the device. The manifest does not declare the INTERNET permission: the app works in airplane mode by construction, not by promise. No Play Store, no Play Services, no account.",
    solutionP2: "The core rule is subtler than it looks: a day's fast starts at the previous day's last meal and ends at the current day's first meal. It crosses midnight by definition, and in a country with daylight saving time the real duration diverges from the wall clock. A fast from 20:00 to 12:00 reads as 16h on the clock, but is 17 real hours when the country leaves DST that night.",
    featuresTitle: "Features",
    features: [
      {
        title: "Real-time fasting clock",
        desc: "Counts the time since the last logged meal, with 16h, 18h, 20h and 24h milestones and the projected time for each one.",
      },
      {
        title: "Daily log with no required field",
        desc: "Meal times, caloric deficit, quality, water, alcohol, weight and notes. All optional — tapping an already-selected chip clears the field.",
      },
      {
        title: "Configurable dashboard",
        desc: "The user adds, removes and configures cards: line, scatter, heatmap and big number, across seven metrics and five periods.",
      },
      {
        title: "CSV backup",
        desc: "Symmetric export and import. It is the only backup that exists, and Android Auto Backup is disabled on purpose — a health log doesn't go to the cloud unless the user asks.",
      },
      {
        title: "Local notifications",
        desc: "Alerts at 16h, 18h and 20h via WorkManager, with no network and no Play Services. The worker re-validates the fast before notifying: if you already ate, the alert doesn't fire.",
      },
    ],
    techTitle: "Technical Highlight: testing an Android app without an emulator",
    techP1: "I built the app on a Windows ARM64 machine, and partway through discovered that Google doesn't publish the Android emulator for that platform — the package doesn't even appear in the SDK manager. Robolectric, which runs Android tests on the JVM, also ships native binaries only for x86_64 on Windows, and an ARM64 JVM cannot load an x64 DLL.",
    techP2: "The fix was to isolate the problem where it actually exists: only the test JVM runs on x64. Compilation, Kotlin, KSP, R8 and APK packaging stay on native ARM64 — the delivered APK never passes through emulation. With that, all 90 tests run on the JVM, with no device attached.",
    techP3: "To see the screens, each one is really composed and drawn into a bitmap and saved as PNG. That doubled as a rendering test: a screen that broke while measuring or drawing would fail there, and no other test would catch it — the rest query the semantics tree, which exists even when drawing fails.",
    lessonTitle: "The bug that almost didn't show up",
    lessonP1: "In a form test, the save button sat below the fold on the test environment's small screen. The tap landed outside the window and was silently discarded — no exception, no warning. The save never happened, and the tests asserting \"the database is still empty\" passed. Two green tests proving exactly nothing.",
    lessonP2: "The fix wasn't just scrolling to the element before tapping. It was adopting the rule that every assertion demanding an effect gets a paired assertion demanding its absence. Without that pair, a broken function keeps passing forever. The same discipline later surfaced a leak between tests and an infinite recursion — and, in the screenshots, that the calendar turned into a wall of orange under real usage.",
    numbersTitle: "Numbers",
    numbers: [
      { label: "Tests on the JVM", value: "90" },
      { label: "APK size", value: "1.5 MB" },
      { label: "Network permissions", value: "0" },
      { label: "Documented ADRs", value: "9" },
    ],
  },
};

const shots = [
  { src: "/fastin-01-calendario.png", alt: "fastin — calendário com relógio de jejum" },
  { src: "/fastin-03-dashboard.png", alt: "fastin — dashboard com gráficos" },
  { src: "/fastin-02-formulario.png", alt: "fastin — formulário de registro do dia" },
  { src: "/fastin-05-ajustes.png", alt: "fastin — ajustes e backup" },
];

/**
 * Tira de screenshots de celular.
 *
 * Os outros projetos usam carrossel 16:9, que aqui deixaria ~90% do quadro vazio: estas
 * imagens são 1233x2673. Mostrar as quatro lado a lado cabe melhor num app mobile e ainda
 * deixa a tela inteira legível.
 */
function PhoneStrip() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
        gap: "0.75rem",
        marginBottom: "4rem",
      }}
    >
      {shots.map((shot, i) => (
        <div
          key={shot.src}
          style={{
            position: "relative",
            aspectRatio: "1233 / 2673",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "0.75rem",
            overflow: "hidden",
          }}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes="(max-width: 768px) 45vw, 220px"
            style={{ objectFit: "cover", objectPosition: "top" }}
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
}

export default function Fastin() {
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
            href="https://github.com/Kaleugit/fastin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "0.8125rem", padding: "0.5rem 1rem" }}
          >
            {t.cta}
          </a>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Gradle KTS"].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Telas */}
        <div className="detail-media"><PhoneStrip /></div>

        {/* Conteúdo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* Contexto */}
          <div>
            <h2 style={headingStyle}>{t.contextTitle}</h2>
            <p style={bodyStyle}>{t.contextP1}</p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>{t.contextP2}</p>
          </div>

          {/* Solução */}
          <div>
            <h2 style={headingStyle}>{t.solutionTitle}</h2>
            <p style={bodyStyle}>{t.solutionP1}</p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>{t.solutionP2}</p>
          </div>

          {/* Números */}
          <div>
            <h2 style={headingStyle}>{t.numbersTitle}</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "0.75rem",
              marginTop: "1.5rem",
            }}>
              {t.numbers.map((item) => (
                <div key={item.label} style={{
                  padding: "1.25rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "0.5rem",
                }}>
                  <p style={{
                    fontSize: "1.75rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    letterSpacing: "-0.02em",
                    fontVariantNumeric: "tabular-nums",
                    marginBottom: "0.25rem",
                  }}>
                    {item.value}
                  </p>
                  <p style={{ fontSize: "0.8125rem", color: "var(--muted)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
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
                  <p className="detail-row-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Destaque Técnico */}
          <div>
            <h2 style={headingStyle}>{t.techTitle}</h2>
            <p style={bodyStyle}>{t.techP1}</p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>{t.techP2}</p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>{t.techP3}</p>
          </div>

          {/* Lição */}
          <div>
            <h2 style={headingStyle}>{t.lessonTitle}</h2>
            <p style={bodyStyle}>{t.lessonP1}</p>
            <p style={{ ...bodyStyle, marginTop: "1rem" }}>{t.lessonP2}</p>
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
