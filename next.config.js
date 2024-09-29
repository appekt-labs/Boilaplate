const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  //making development faster
  experimental: {
    swcMinify: true,

  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakeimg.pl",
        // port: '',
        // pathname: '/account123/**',
      },
      {
        hostname: "placeholder.co",
        protocol: "https"
      }
    ],
  },
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
