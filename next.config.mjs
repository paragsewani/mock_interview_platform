/** @type {import('next').NextConfig} */
const nextConfig = {
  // Essential production settings
  output: 'standalone', // Creates optimized production bundle
  productionBrowserSourceMaps: false, // Disable source maps in production
  
  // Build optimizations
  swcMinify: true, // Use Rust-based minifier (faster than Terser)
  optimizeFonts: true, // Optimize Google Fonts loading
  
  // Image optimizations
  images: {
    formats: ['image/avif', 'image/webp'], // Modern image formats
    minimumCacheTTL: 60, // 60 seconds cache minimum
  },
  
  // Security headers (optional but recommended)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ],
      },
    ]
  },
  
  // Error handling during builds (temporary)
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production', // Only ignore in production
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  }
}

export default nextConfig;
