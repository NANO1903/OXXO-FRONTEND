import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['*', '192.168.0.103'],
  deprecated: {
    looseRouteMatching: true,
  },
};

export default nextConfig;
