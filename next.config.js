/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  // Your other Next.js configuration options here

  async exportPathMap() {
    return {
      "/": { page: "/" }, // Replace with your desired pages
      "/meals": { page: "/meals" },
      "/community": { page: "/community" },
      "/meals/share": { page: "/meals/share" },
      // Add more routes as needed
    };
  },
};
