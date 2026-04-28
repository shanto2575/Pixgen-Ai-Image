/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ], 
    domains: [
      "lh3.googleusercontent.com", // Google ছবি
      "avatars.githubusercontent.com" // Github ছবি
    ],
  },
};

export default nextConfig;
