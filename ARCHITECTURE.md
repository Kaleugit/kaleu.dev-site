# kaleu.dev — Architecture & Stack

## Overview

Personal portfolio site. Currently in "under construction" mode with a 3D animated excavator scene.

## Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| 3D Rendering | React Three Fiber | latest |
| 3D Helpers | @react-three/drei | latest |
| 3D Engine | Three.js | latest |
| Hosting | Vercel | — |
| Domain | kaleu.dev (Spaceship) | — |

## Project Structure

```
kaleu.dev-site/
├── app/
│   ├── components/
│   │   ├── Scene.tsx        # Three.js canvas com modelo GLB + animações
│   │   └── SceneLoader.tsx  # Client wrapper para dynamic import (ssr: false)
│   ├── globals.css          # Reset global + Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage (under construction)
├── public/
│   ├── bg.jpg               # Background (high-view repair tools + laptop)
│   └── loader.glb           # Modelo 3D da escavadeira com animações
├── glb/                     # Assets originais (não servidos diretamente)
├── wallpaper/               # Assets originais (não servidos diretamente)
└── ARCHITECTURE.md          # Este arquivo
```

## Architecture Decisions

- **App Router**: usado por ser o padrão atual do Next.js — suporta Server Components, layouts aninhados e melhor performance.
- **dynamic import com ssr: false**: Three.js não funciona no servidor (acessa `window`/WebGL), então o canvas é carregado apenas no cliente via `SceneLoader.tsx`.
- **GLB na pasta `/public`**: assets estáticos servidos diretamente pelo Next.js sem processamento adicional.

## Current State

- [x] Under construction page com modelo 3D animado
- [x] Deploy na Vercel (kaleu-dev-site.vercel.app)
- [x] DNS configurado (kaleu.dev → Vercel)
- [ ] Portfólio completo (a desenvolver)

## Notes for Dev Agent

- O modelo GLB em `/public/loader.glb` contém animações — todas são reproduzidas via `useAnimations` do drei.
- A câmera está configurada em `position: [0, -0.5, 6], fov: 35` — ajustar se o modelo mudar.
- O `OrbitControls` permite rotação manual pelo usuário (zoom desabilitado).
- Qualquer novo componente que use Three.js deve ser wrapped com `"use client"` e importado via `dynamic(..., { ssr: false })`.
