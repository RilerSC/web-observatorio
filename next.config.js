/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Partial Prerendering (Next.js 16+)
  cacheComponents: true, // PPR (Partial Prerendering)
  
  // External packages para server components
  serverExternalPackages: ['nodemailer'],
  
  // Experimental features de Next.js 16
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  
  // Optimización de imágenes (avanzada)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 año
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fundepos.ac.cr',
      },
    ],
    unoptimized: false, // Asegurar que las imágenes se optimizan
  },
  
  // Compresión
  compress: true,
  
  // Turbopack (Next.js 16+) con alias
  turbopack: {
    resolveAlias: {
      '@': './src',
    },
  },
  
  // Headers de caché para assets estáticos
  async headers() {
    return [
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/video/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/logos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/pdf/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Optimizaciones de Webpack (opcional, Turbopack maneja automáticamente)
  // Se mantiene para compatibilidad si se usa --webpack flag
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Code splitting optimizado
      config.optimization = config.optimization || {};
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          mui: {
            name: 'mui',
            test: /[\\/]node_modules[\\/](@mui|@emotion)[\\/]/,
            priority: 10,
          },
          framer: {
            name: 'framer',
            test: /[\\/]node_modules[\\/](framer-motion)[\\/]/,
            priority: 10,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 5,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig










