/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://azfun-increff-caas-dev.azurewebsites.net/:path*",
      },
    ];
  },
};

export default nextConfig;
