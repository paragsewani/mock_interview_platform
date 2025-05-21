/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This line fixes the Vercel client-reference-manifest error
};

export default nextConfig;
