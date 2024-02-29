/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
      {
        protocol: "https",
        hostname: "gotapqnqjblaxnfdwojq.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
