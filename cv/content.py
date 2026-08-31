# -*- coding: utf-8 -*-
"""Conteúdo do currículo em EN (transcrito do PDF original) e PT (traduzido)."""

EN = {
    "lang": "en",
    "doc_title": "Kaleu Lima — Resume",
    "name": "Kaleu Lima",
    "headline": "Full Stack Developer | React · Angular · Node.js · AWS · LLMs in Production",
    "location": "São Paulo, Brazil",
    "phone": "(+55) 15 99718-7246",
    "sections": {
        "summary": "SUMMARY",
        "skills": "SKILLS",
        "work": "WORK EXPERIENCE",
        "projects": "SELECTED PROJECTS",
        "education": "EDUCATION",
        "languages": "LANGUAGES",
    },
    "summary": "Full stack developer with a Data Science degree and about three years of professional "
               "technical work. At the São Paulo City Council I put an AI assistant into production on "
               "the Claude API, with retrieval over the internal database. Around it I work the whole "
               "stack, Angular and React on the front, Node.js and Express on the back, plus my own AWS "
               "CDK stack.",
    "skills": [
        ("Front-End:", "Build and ship production single page applications and interactive interfaces. "
                       "Angular and React day to day, TypeScript throughout."),
        ("Back-End &amp; Database:", "REST APIs and async queues on Node.js and Express. Relational "
                                     "modelling and SQL, plus cache and queue operation in production."),
        ("Cloud &amp; DevOps:", "Serverless applications on AWS, infrastructure as code and a CI/CD "
                                "pipeline I wrote, deployed and maintain myself."),
        ("AI &amp; LLM:", "LLM features in production: RAG, knowledge base and guardrail design, error "
                          "rate measurement, structured evaluation of model output."),
        ("Data Science:", "Collection, cleaning and analysis, SQL against ERP data, dashboards and "
                          "reporting for non-technical stakeholders."),
    ],
    "work": [
        ("Front-End Developer (Freelance) | Imsite — Remote", "Jan 2026 – Present", [
            "Built A Casa do Patrão, an interactive Three.js game for a Record TV and Walt Disney "
            "Company reality show launch event, contracted through an agency. A live ranking ran on the "
            "big screen and hundreds played it.",
            "Delivered two booking applications in production, Pega Horário for scheduling and Angra In "
            "App for boat trips, scoping each with the client and shipping it end to end.",
        ]),
        ("Developer (Internship) | Rede Câmara, São Paulo City Council — Remote", "Jan 2025 – Present", [
            "Built and shipped an AI assistant into production inside a confidential internal management "
            "system. It runs on the Claude API with RAG over the internal database and interviews staff "
            "until it produces a complete service order.",
            "Wrote its knowledge base, business rules and explicit limits, which act as guardrails, then "
            "validated it across hundreds of test cases. Error rate sits at 3 to 4 percent, nearly all "
            "typos. Staff with no domain training now open service orders alone.",
            "Built the retrieval layer for a new platform's AI query feature. Context comes from "
            "structured queries, not embedding similarity, so answers are reproducible.",
            "Contribute to Influlens, an analytics platform unifying Instagram, Facebook and YouTube "
            "metrics through official APIs with OAuth 2.0, polled every five minutes (Node.js, Express, "
            "BullMQ, MySQL, Redis). Reports automated from a day to fifteen minutes.",
        ]),
        ("RLHF Writer, AI Model Evaluator (Freelance) | Mercor — Remote, United States",
         "Feb 2026 – Jun 2026", [
            "Completed 300+ structured evaluations of AI model responses across all knowledge domains, "
            "reading Portuguese content and writing every report entirely in English for a US company.",
        ]),
        ("Data Quality Technician | FormelD (AGCO) — Mogi das Cruzes, Brazil", "Apr 2022 – Apr 2023", [
            "Ran a full physical inventory of the quality warehouse and cross-referenced it against "
            "system records with SQL on the JD Edwards ERP, which exposed parts logged neither in "
            "quarantine nor in stock. Built the Power BI and Excel dashboards management acted on.",
            "Traced the cause to a missing component and arranged its shipment from the group plant in "
            "Germany, and the tractor transmission cases went back to the assembly line repaired. That "
            "recovered 500,000 BRL in parts marked for scrap, and the measures held savings at 150,000 "
            "BRL per month.",
        ]),
        ("English Teacher | Nova Nett and CCBEU — Piedade and Sorocaba, Brazil", "Aug 2014 – Mar 2020", [
            "Taught students aged 5 to 73 and grew enrollment by 33 percent through monthly trial "
            "classes. Six years of daily English, where the C1 comes from.",
        ]),
    ],
    "projects": [
        ("Jobscope", " (AWS Lambda, API Gateway, DynamoDB, S3, SQS with DLQ, CloudFront, AWS CDK, GitHub "
                     "Actions, React, Gemini): job tracker that reads a posting and shows the skill gap "
                     "against a CV. Whole stack in CDK, deployed through GitHub Actions with OIDC. "
                     "Deployed and in use."),
        ("codocs", " (Node.js, TypeScript, tree-sitter, Gemini): CLI that generates onboarding docs from "
                   "a repository, module graph derived from the code, not from the model."),
        ("Fastin", " (Kotlin, Jetpack Compose, Room, WorkManager): Android fasting tracker with no "
                   "internet permission declared, so no health data leaves the device."),
        ("Race Game", " (Three.js, Vite, Web Audio API, Canvas API): 1v1 browser racer with hand-written "
                      "physics and procedural audio."),
        ("Tempo Jiggler", " (Python 3, CustomTkinter, PyAutoGUI, NumPy): desktop app that prevents system "
                          "inactivity, shipped as a packaged executable."),
        ("Moldura", " (Next.js 16, React 19): web tool that adds borders for 15x10 photo printing."),
    ],
    "education": [
        "Technologist Degree (CST) in Data Science, UNICID, Brazil. Completed December 2025.",
        "Data Analytics, Google (2023) &nbsp;·&nbsp; Deep Learning for Business, Yonsei (2023) "
        " &nbsp;·&nbsp; Cyber Threat Management, Cisco (2025)",
    ],
    "languages": [
        "English: C1 &nbsp;·&nbsp; Portuguese: Native &nbsp;·&nbsp; Spanish: B1 &nbsp;·&nbsp; Remote, "
        "available as a contractor",
    ],
}

PT = {
    "lang": "pt-BR",
    "doc_title": "Kaleu Lima — Currículo",
    "name": "Kaleu Lima",
    "headline": "Desenvolvedor Full Stack | React · Angular · Node.js · AWS · LLMs em Produção",
    "location": "São Paulo, Brasil",
    "phone": "(+55) 15 99718-7246",
    "sections": {
        "summary": "RESUMO",
        "skills": "COMPETÊNCIAS",
        "work": "EXPERIÊNCIA PROFISSIONAL",
        "projects": "PROJETOS SELECIONADOS",
        "education": "FORMAÇÃO",
        "languages": "IDIOMAS",
    },
    "summary": "Desenvolvedor full stack com graduação em Ciência de Dados e cerca de três anos de "
               "atuação técnica profissional. Na Câmara Municipal de São Paulo, coloquei em produção um "
               "assistente de IA sobre a API da Claude, com recuperação de dados na base interna. Em "
               "torno dele trabalho a stack inteira: Angular e React no front, Node.js e Express no "
               "back, além da minha própria stack em AWS CDK.",
    "skills": [
        ("Front-End:", "Construo e entrego em produção single page applications e interfaces "
                       "interativas. Angular e React no dia a dia, TypeScript em todo o código."),
        ("Back-End &amp; Banco de Dados:", "APIs REST e filas assíncronas em Node.js e Express. "
                                           "Modelagem relacional e SQL, além de operação de cache e "
                                           "filas em produção."),
        ("Cloud &amp; DevOps:", "Aplicações serverless na AWS, infraestrutura como código e um pipeline "
                                "de CI/CD que eu mesmo escrevi, publiquei e mantenho."),
        ("IA &amp; LLM:", "Funcionalidades com LLM em produção: RAG, desenho de base de conhecimento e "
                          "guardrails, medição de taxa de erro, avaliação estruturada da saída do "
                          "modelo."),
        ("Ciência de Dados:", "Coleta, tratamento e análise, SQL sobre dados de ERP, dashboards e "
                              "relatórios para públicos não técnicos."),
    ],
    "work": [
        ("Desenvolvedor Front-End (Freelance) | Imsite — Remoto", "Jan 2026 – Atual", [
            "Desenvolvi A Casa do Patrão, um jogo interativo em Three.js para o evento de lançamento de "
            "um reality show da Record TV com a Walt Disney Company, contratado via agência. Um ranking "
            "ao vivo rodou no telão e centenas de pessoas jogaram.",
            "Entreguei duas aplicações de agendamento em produção, Pega Horário para marcação de "
            "horários e Angra In App para passeios de barco, definindo o escopo com o cliente e levando "
            "cada uma de ponta a ponta.",
        ]),
        ("Desenvolvedor (Estágio) | Rede Câmara, Câmara Municipal de São Paulo — Remoto",
         "Jan 2025 – Atual", [
            "Construí e coloquei em produção um assistente de IA dentro de um sistema interno e "
            "confidencial de gestão. Ele roda na API da Claude com RAG sobre a base de dados interna e "
            "entrevista o servidor até produzir uma ordem de serviço completa.",
            "Escrevi sua base de conhecimento, regras de negócio e limites explícitos, que funcionam "
            "como guardrails, e depois o validei em centenas de casos de teste. A taxa de erro fica "
            "entre 3% e 4%, quase toda em erros de digitação. Servidores sem treinamento no domínio "
            "agora abrem ordens de serviço sozinhos.",
            "Construí a camada de recuperação de dados para a funcionalidade de consulta com IA de uma "
            "nova plataforma. O contexto vem de consultas estruturadas, não de similaridade de "
            "embeddings, então as respostas são reproduzíveis.",
            "Contribuo com o Influlens, plataforma de analytics que unifica métricas de Instagram, "
            "Facebook e YouTube pelas APIs oficiais com OAuth 2.0, consultadas a cada cinco minutos "
            "(Node.js, Express, BullMQ, MySQL, Redis). Relatórios automatizados de um dia para quinze "
            "minutos.",
        ]),
        ("Redator RLHF, Avaliador de Modelos de IA (Freelance) | Mercor — Remoto, Estados Unidos",
         "Fev 2026 – Jun 2026", [
            "Concluí mais de 300 avaliações estruturadas de respostas de modelos de IA em todos os "
            "domínios de conhecimento, lendo conteúdo em português e escrevendo todos os relatórios "
            "integralmente em inglês para uma empresa americana.",
        ]),
        ("Técnico em Qualidade de Dados | FormelD (AGCO) — Mogi das Cruzes, SP", "Abr 2022 – Abr 2023", [
            "Conduzi o inventário físico completo do almoxarifado da qualidade e o cruzei com os "
            "registros do sistema em SQL no ERP JD Edwards, o que expôs peças que não constavam nem em "
            "quarentena nem em estoque. Construí os dashboards em Power BI e Excel sobre os quais a "
            "gestão agiu.",
            "Rastreei a causa até um componente faltante e providenciei seu envio da planta do grupo na "
            "Alemanha, e as caixas de transmissão de tratores voltaram reparadas para a linha de "
            "montagem. Isso recuperou R$ 500.000 em peças marcadas para sucata, e as medidas "
            "sustentaram uma economia de R$ 150.000 por mês.",
        ]),
        ("Professor de Inglês | Nova Nett e CCBEU — Piedade e Sorocaba, SP", "Ago 2014 – Mar 2020", [
            "Dei aula para alunos de 5 a 73 anos e aumentei a matrícula em 33% com aulas experimentais "
            "mensais. Seis anos de inglês diário, de onde vem o C1.",
        ]),
    ],
    "projects": [
        ("Jobscope", " (AWS Lambda, API Gateway, DynamoDB, S3, SQS com DLQ, CloudFront, AWS CDK, GitHub "
                     "Actions, React, Gemini): rastreador de vagas que lê um anúncio e mostra a lacuna "
                     "de competências em relação a um currículo. Stack inteira em CDK, publicada via "
                     "GitHub Actions com OIDC. No ar e em uso."),
        ("codocs", " (Node.js, TypeScript, tree-sitter, Gemini): CLI que gera documentação de onboarding "
                   "a partir de um repositório, com o grafo de módulos derivado do código, não do "
                   "modelo."),
        ("Fastin", " (Kotlin, Jetpack Compose, Room, WorkManager): rastreador de jejum para Android sem "
                   "permissão de internet declarada, então nenhum dado de saúde sai do aparelho."),
        ("Race Game", " (Three.js, Vite, Web Audio API, Canvas API): corrida 1v1 no navegador com física "
                      "escrita à mão e áudio procedural."),
        ("Tempo Jiggler", " (Python 3, CustomTkinter, PyAutoGUI, NumPy): aplicativo desktop que impede a "
                          "inatividade do sistema, distribuído como executável empacotado."),
        ("Moldura", " (Next.js 16, React 19): ferramenta web que adiciona bordas para impressão de fotos "
                    "15x10."),
    ],
    "education": [
        "Curso Superior de Tecnologia (CST) em Ciência de Dados, UNICID, Brasil. Concluído em dezembro "
        "de 2025.",
        "Data Analytics, Google (2023) &nbsp;·&nbsp; Deep Learning for Business, Yonsei (2023) "
        " &nbsp;·&nbsp; Cyber Threat Management, Cisco (2025)",
    ],
    "languages": [
        "Inglês: C1 &nbsp;·&nbsp; Português: Nativo &nbsp;·&nbsp; Espanhol: B1 &nbsp;·&nbsp; Remoto, "
        "disponível como PJ",
    ],
}
