/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF primeiro: ~30% menor que WebP no mesmo alvo de qualidade.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
