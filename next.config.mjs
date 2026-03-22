/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/', destination: '/site/index.html' },
      { source: '/about', destination: '/site/about.html' },
      { source: '/artists', destination: '/site/artists.html' },
      { source: '/portfolio', destination: '/site/portfolio.html' }
    ];
  }
};

export default nextConfig;
