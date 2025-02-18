/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_WORDPRESS_URL.replace('https://', '')
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/homepage',
        destination: '/',
        permanent: true
      }
    ]
  }
}
