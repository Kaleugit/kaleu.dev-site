import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kaleu.dev",
  description: "Portfólio de Kaleu — desenvolvedor full stack",
  icons: { icon: "/imgtab.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ backgroundColor: "var(--bg)", color: "var(--text)", minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <footer style={{
          borderTop: '1px solid var(--border)',
          padding: '1.25rem 2rem',
          textAlign: 'center',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-geist-mono)',
          color: 'var(--muted)',
          letterSpacing: '0.04em',
        }}>
          kaleu.dev — 2026 All rights reserved ®
        </footer>
      </body>
    </html>
  );
}
