/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    // Allow HEIC and other formats
    unoptimized: false,
  },
  // Ensure proper source directory handling
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
}

module.exports = nextConfig