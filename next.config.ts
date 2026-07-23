import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // permite acessar o dev server pelo IP da rede local (teste no celular)
  allowedDevOrigins: ["192.168.70.242"],
  images: {
    // sharp trava gerando webp/avif no Windows ARM64; otimização segue ativa em prod
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
