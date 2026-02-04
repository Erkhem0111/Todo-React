/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.join(__dirname, ""), // Sets the root to the directory containing next.config.js
  },
};

export default nextConfig;
